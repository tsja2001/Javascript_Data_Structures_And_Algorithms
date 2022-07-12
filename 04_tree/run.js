const { BinarySearchTree } = require('./BinarySearchTree')
const { AVLTree } = require('./AVLTree')
// const { RedBlackNode } = require('./models/node')
const { RedBlackTree } = require('./RedBlackTree')

const tree = new RedBlackTree

// console.log(tree.min())
// console.log(tree.max())
tree.insert(2)
tree.insert(3)
tree.insert(2.5)
tree.insert(3.5)
tree.inOrderTraverse(key => console.log(key))
console.log('--------------------------------')
// tree.rotationRR(tree.root)
tree.inOrderTraverse(key => console.log(key))

// 获取高度
// console.log(tree.getNodeHeight(tree.root.left.right))

