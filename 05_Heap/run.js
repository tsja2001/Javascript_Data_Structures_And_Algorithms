
const { MinHeap } = require('./MinHeap')
const { MaxHeap } = require('./MaxHeap')

const minHeap = new MinHeap()
const maxHeap = new MaxHeap()

// minHeap.insert(2)
// minHeap.insert(10)
// minHeap.insert(4)
// minHeap.insert(10)
// minHeap.insert(6)
// minHeap.insert(7)
// minHeap.insert(9)
// minHeap.insert(15)
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)

maxHeap.insert(1)


// console.log(minHeap.head)
// minHeap.extract()
// console.log(minHeap.head)
console.log(maxHeap.printHeap())



// const arr = [1, 2, 3, 4, 5]
// console.log(arr.shift(0))
// console.log(arr)