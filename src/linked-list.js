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
            if(node.data < this.head.data) {
                node.next = this.head;
                this.head = node;
            }
            else {
                let currentNode = this.head.next;
                let temp = null;
                let prev = this.head;
                let done = false;
                while(currentNode != null) {
                    if(node.data > currentNode.data){
                        prev = currentNode;
                        currentNode = currentNode.next;
                    }
                    else if (node.data < currentNode.data){
                        prev.next = node;
                        node.next = currentNode;
                        this._length++;
                        done = true;
                    }
                    else {
                        return;
                    }
                }
                prev.next = node;
                this._length++;
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

module.exports = LinkedList;