class LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }
    insert(element) {
        let node = new LinkedListNode(element);
        if (this.head == null) {
            this.head = node;
            this._length++
        }
        else {
            let currentNode = this.head;
            console.log("Current Node is: " + currentNode.data);
            console.log("Current Node next is : " + currentNode.next);
            let temp = null;
            while(currentNode != null) {
                if (currentNode.next == null){
                    console.log("this.head is: " + this.head.data);
                    console.log("this.head.next is: " + this.head.next);
                    if(this.head.data >= node.data){
                        console.log(currentNode.data + ">=" + node.data);
                        console.log(currentNode.data >= node.data);
                        temp = this.head;
                        this.head = node;
                        node.next = temp;
                        console.log("New this.head is: " + this.head.data);
                        console.log("New this.head.next is: " + this.head.next.data);
                        return;
                    }
                    else{
                        currentNode.next = node;
                        this._length++;
                        return;
                    }
                }
                else if (currentNode.data <= node.data) {
                    temp = currentNode;
                    currentNode = currentNode.next;
                }
                else{
                    temp.next = node;
                    node.next = currentNode;
                    this._length++
                }
            }
        }
    }
    contains(string) {
        if (this.head === null){
            return null;
        }
        else{
            let currNode = this.head;
            while(currNode != null) {
                if (currNode.data == string) {
                    return currNode.data;
                }
                else {
                    currNode = currNode.next;
                }
            }
        }
    }
    remove(string) {
        if(this.head != null) {
            if(this.head.data == string) {
                let tmpNode = this.head;
                this.head = this.head.next;
                tmpNode.next = null;
                this._length--;
            }
            else{
                let previousNode = this.head;
                let currentNode = previousNode.next;
                while(currentNode != null) {
                    if(currentNode.data == string) {
                        previousNode.next = currentNode.next;
                        currentNode.next = null;
                        this._length--;
                        return;
                    }
                    else{
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                }
            }
        }
    }
    toString(){
        let listString = '';
        let currNode = this.head;
        while(currNode != null) {
           listString += `{${currNode.data}} -> `;
           currNode = currNode.next;
        }
        return listString + 'null';
    }
    // get size() {
    //     return this.size;
    // }

}
class LinkedListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
    setNext(node){
        this.next = node;
    }
}

// module.exports = LinkedList;