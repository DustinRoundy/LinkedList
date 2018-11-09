// let BinarySearchTree  = require("../src/binary-tree");
//
// describe('BinaryTree', () => {
//     let binarySearchTree;
//
//     beforeEach(() => {
//         binarySearchTree = new BinarySearchTree();
//     });
//
//     describe('insert', () => {
//         it('should insert an item in the search tree', () => {
//             binarySearchTree.insert('some random data');
//             expect(binarySearchTree.find('some random data')).not.toBeNull();
//         })
//     });
//
//     describe('find', () => {
//         it('should find wanted data', () => {
//             binarySearchTree.insert('Mario');
//             binarySearchTree.insert('Luigi');
//             binarySearchTree.insert('Peach');
//             expect(binarySearchTree.find('Mario').toEqual('Mario'));
//         });
//         it('if data not found', () => {
//             binarySearchTree.insert('Mario');
//             binarySearchTree.insert('Luigi');
//             binarySearchTree.insert('Peach');
//             expect(binarySearchTree.find('Cameron').toEqual('Not found'));
//         });
//         it('check if returns string', () => {
//             binarySearchTree.insert('Peach');
//             let checkString = binarySearchTree.find('Peach');
//             expect(typeof checkString.toEqual('string'));
//         });
//
//     });
//
//     describe('remove', () => {
//         it('remove an element correctly', () => {
//             binarySearchTree.insert(5);
//             expect(binarySearchTree.find(5)).toEqual(5);
//             binarySearchTree.remove(5);
//             expect(binarySearchTree.find(5)).toEqual(null);
//         })
//     });
//
//     describe('toString', function () {
//         it('should print tree to string correctly', function () {
//             //was not sure how insert would work
//             // binarySearchTree.insert('1(2(4)(5))(3()(6))');
//             binarySearchTree.insert('1');
//             binarySearchTree.insert('2');
//             binarySearchTree.insert('4');
//             binarySearchTree.insert('5');
//             binarySearchTree.insert('3');
//             binarySearchTree.insert('6');
//
//
//
//             expect(binarySearchTree.toString()).toEqual('1(2(4)(5))(3()(6))');
//         });
//     });
//
//     describe('returns min point correctly', () => {
//         binarySearchTree.insert(5);
//         binarySearchTree.insert(4);
//         binarySearchTree.insert(9);
//         expect(binarySearchTree.min().toEqual(4));
//     })
//     describe('returns max point correctly', () => {
//         binarySearchTree.insert(5);
//         binarySearchTree.insert(4);
//         binarySearchTree.insert(9);
//         expect(binarySearchTree.min().toEqual(9));
//     })
// });