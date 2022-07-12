/**
 * 有序链表
 * 链表中的元素都是有序的
 */

const { defaultEquals, defaultCompare, Compare } = require("../util");
const { LinkedList } = require("./01_LinkedList");
const { Node } = require("./models/linked-list-models")

class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn)
        this.compareFn = compareFn
    }

    insert(element, index = 0) {
        if(this.isEmpty()){
            super.insert(element, index)
        }else{
            let pop = this.getIndexNextSortedElement(element)
            super.insert(element, pop)

            return true
        }
    }

    // 比较元素应该插入到哪个位置
    getIndexNextSortedElement(element) {
        let i = 0
        let current = this.head
        for(; i <= this.count && current; i++){
            const res = this.compareFn(element, current.element)
            if(res === Compare.LESS_THAN){
                return i
            }else{
                current = current.next
            }
        }

        return i
    }
}

module.exports = {
    SortedLinkedList
}