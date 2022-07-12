const { Compare, defaultCompare, swap } = require('../util')

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.head = []
    }

    getLeftIndex(index) {
        return index * 2 + 1
    }

    getRightIndex(index) {
        return index * 2 + 2
    }

    getParentIndex(index) {
        if (index == 0) return undefined
        return index % 2 == 0 ? (index - 2) / 2 : (index - 1) / 2
    }

    // 插入
    insert(value) {
        if (value != null) {
            this.head.push(value)
            this.siftUp(this.head.length - 1)

            return true
        }
        return false
    }

    // 一个一个往前放, 直到找到小于前面且大于后面的位置
    siftUp(index) {
        let parentIndex = this.getParentIndex(index)

        while (
            index > 0 &&
            this.compareFn(this.head[parentIndex], this.head[index]) == Compare.BIGGER_THAN
        ) {
            swap(this.head, parentIndex, index)

            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    size() {
        return this.head.length
    }

    isEmpty() {
        return this.size() == 0
    }

    findMinimum() {
        return this.isEmpty() ? undefined : this.head[0]
    }

    extract() {
        if (this.isEmpty()) {
            return undefined
        }
        const top = this.head.shift()
        this.siftDown(0)

        return top
    }

    siftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.compareFn(this.head[element], this.head[left]) == Compare.BIGGER_THAN) {
            element = left
        }
        if (right < size && this.compareFn(this.head[element], this.head[right]) == Compare.BIGGER_THAN) {
            element = right
        }
        if (index != element) {
            swap(this.head, index, element)
            this.siftDown(element)
        }
    }
}

module.exports = {
    MinHeap
}