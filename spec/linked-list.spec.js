let LinkedList = require('../src/linked-list');

describe('LinkedList', () => {
    let linkedList;
    beforeEach(()=>{
        linkedList = new LinkedList();
    });
    describe('insert', () => {
        it('should insert data correctly', () => {
            let mario = {name: 'Mario'};
            linkedList.insert(mario);
            expect(linkedList.contains('Mario')).toEqual(mario);
        })
    });
    describe('toString', () => {
       it('should  display string correctly', () => {
           let mario = {name: 'Mario'};
           let luigi = {name: 'Luigi'};
           let peach = {name: 'Peach'};
           linkedList.insert(mario);
           linkedList.insert(luigi);
           linkedList.insert(peach);
           expect(linkedList.toString()).toEqual('{Mario} -> {Luigi} -> {Peach} -> null');
       })
    });
});