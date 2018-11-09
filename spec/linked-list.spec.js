let LinkedList = require('../src/linked-list');

describe('LinkedList', () => {
    let linkedList;
    beforeEach(()=>{
        linkedList = new LinkedList();
    });
    describe('insert', () => {
        it('should insert data correctly', () => {
            let mario = 'Mario';
            linkedList.insert(mario);
            expect(linkedList.contains('Mario')).toEqual(mario);
        })
    });
    describe('toString', () => {
       it('should  display string correctly', () => {
           let mario = 'Mario';
           let luigi = 'Luigi';
           let peach = 'Peach';
           let bowser = 'Bowser';
           let toad = 'Toad';
           linkedList.insert(mario);
           linkedList.insert(luigi);
           linkedList.insert(peach);
           linkedList.insert(bowser);
           linkedList.insert(toad);
           expect(linkedList.toString()).toEqual('{Bowser} -> {Luigi} -> {Mario} -> {Peach} -> {Toad} -> null');
       })
    });
});