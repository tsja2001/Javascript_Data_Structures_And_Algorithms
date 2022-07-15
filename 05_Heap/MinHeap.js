const { Compare, defaultCompare, swap } = require('../util')

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
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
            this.heap.push(value)
            this.siftUp(this.heap.length - 1)

            return true
        }
        return false
    }

    // 比较自己和父节点, 如果 父 > 自己, 则交换位置
    siftUp(index) {
        let parentIndex = this.getParentIndex(index)

        while (
            index > 0 &&
            this.compareFn(this.heap[parentIndex], this.heap[index]) == Compare.BIGGER_THAN
        ) {
            swap(this.heap, parentIndex, index)

            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() == 0
    }

    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0]
    }

    // 弹出最小元素(第一个元素)
    extract() {
        if (this.isEmpty()) {
            return undefined
        }
        const top = this.heap.shift()
        this.siftDown(0)

        return top
    }

    // 比较自己和左右子节点, 如果自己大, 就把自己和子节点交换
    siftDown(index) {
        // 指向要要把index移到哪个位置, 目前先让其指向自身
        let element = index
        // 左子节点
        const left = this.getLeftIndex(index)
        // 有子节点
        const right = this.getRightIndex(index)
        const size = this.size()
        // 如果自己比左子节点大, 要移动的位置, 指向左子节点
        if (left < size && this.compareFn(this.heap[element], this.heap[left]) == Compare.BIGGER_THAN) {
            element = left
        }
        // 如果又比右子节点大, 要移动的位置, 指向右子节点
        if (right < size && this.compareFn(this.heap[element], this.heap[right]) == Compare.BIGGER_THAN) {
            element = right
        }
        // 如果最后要移动的位置, 不是指向自身, 而是指向别处, 证明需要移动, 进行交换操作.
        // 对移动后的位置, 继续递归
        if (index != element) {
            swap(this.heap, index, element)
            this.siftDown(element)
        }
    }

    printHeap() {
        let index = 0
        let floor = 1
        let stopFlag = true

        while (index <= this.heap.length - 1) {
            let str = ''
            for (index = 2 ** (floor - 1) - 1; index < 2 ** floor - 1; index++) {
                if (this.heap[index]) {
                    str = `${str} ${this.heap[index]}`
                }
            }
            console.log(str)
            floor++
        }
    }
}

module.exports = {
    MinHeap
}