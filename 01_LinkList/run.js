// const { LinkedList } = require('./LinkedList.js')


// const linklist = new LinkedList()

// // 添加
// linklist.push(1)
// linklist.push(2)
// linklist.push(3)

// // 插入指定位置
// linklist.insert(10, 2)

// linklist.remove(3)
// linklist.remove(1)

// console.log(linklist.toString())

/**
 * 双链表
 */
// const { DoubleLinkedList } = require('./DoublyLinkedList')

// const doubleLinkedList = new DoubleLinkedList()

// doubleLinkedList.insert(1, 0)
// doubleLinkedList.insert(2, 0)
// doubleLinkedList.insert(3, 0)
// doubleLinkedList.insert(4, 0)
// doubleLinkedList.insert(5, 4)
// doubleLinkedList.insert(6, 4)
// doubleLinkedList.insert(0, 2)

// console.log(doubleLinkedList.toString())
// doubleLinkedList.removeAt(6)
// console.log(doubleLinkedList.toString())

/**
 * 循环链表
 */
// const {  CircularLinkedList } = require('./03_CircularLinkedList')
// const  circularLinkedList = new CircularLinkedList

// circularLinkedList.insert(3, 0)
// circularLinkedList.insert(4, 1)
// circularLinkedList.insert(5, 2)
// circularLinkedList.insert(10, 0)
// circularLinkedList.insert(0, 1)

// console.log(circularLinkedList.toString())

// circularLinkedList.removeAt(0)
// circularLinkedList.removeAt(2)
// circularLinkedList.removeAt(2)

// console.log(circularLinkedList.toString())

/**
 * 有序链表
 */
const { SortedLinkedList } = require("./04_SortedLinkedList");

const sortedLinkedList = new SortedLinkedList

sortedLinkedList.insert(1)
sortedLinkedList.insert(2)
sortedLinkedList.insert(3)
sortedLinkedList.insert(2)
sortedLinkedList.insert(0)
sortedLinkedList.insert(0)
sortedLinkedList.insert(0)

console.log(sortedLinkedList.toString())
