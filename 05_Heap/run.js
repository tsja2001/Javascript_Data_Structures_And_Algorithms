
const { MinHeap } = require('./MinHeap')

const minHeap = new MinHeap()

minHeap.insert(2)
minHeap.insert(10)
minHeap.insert(4)
// minHeap.insert(10)
// minHeap.insert(6)
// minHeap.insert(7)
// minHeap.insert(9)
// minHeap.insert(15)

console.log(minHeap.head)
minHeap.extract()
console.log(minHeap.head)



// const arr = [1, 2, 3, 4, 5]
// console.log(arr.shift(0))
// console.log(arr)