const { Compare, defaultCompare, swap, reverseCompare } = require('../util')
const { MinHeap } = require('./MinHeap')

class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
        this.compareFn = reverseCompare(compareFn)
    }

}

module.exports = {
    MaxHeap
}