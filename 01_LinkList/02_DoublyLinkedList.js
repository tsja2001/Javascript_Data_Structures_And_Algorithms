const { LinkedList } = require('./01_LinkedList.js')
const { DoubleNode } = require('./models/double-linked-list-models')
const { defaultEquals } = require("../util");
const { relativeTimeThreshold } = require('moment');
/**
 * 双链表
 */
class DoubleLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
        this.tail = null
    }

    // 重写 按位置插入
    insert(element, index){
        if(index < 0 || index > this.count){
            // 无效
            return false
        }else{
            let node = new DoubleNode(element)
            if(index === 0){
                if(this.head == null){
                    // 为空
                    this.tail = node
                    this.head = node
                }else{
                    // 第一个
                    node.next = this.head
                    this.head.prev = node
                    this.head = node
                }
            }else if(index == this.count){
                // 最后一个
                node.prev = this.tail
                this.tail.next = node
                this.tail = node
            }else{
                // 在中间
                const current = this.getElementAt(index - 1)
                const currentNext = current.next

                node.prev = current
                node.next = currentNext

                current.next = node
                currentNext.prev = node
            }
            this.count++

            return true
        }
    }

    // 重写任意位置删除
    removeAt(index){
        if(index < 0 || index >= this.count){
            // 无效
            return false
        }else{
            const current = this.getElementAt(index)
            if(index == 0){
                if(this.count == 1){
                    // 如果只有一个, 删除
                    this.head = null
                    this.tail = null
                }else{
                    // 如果有多个, 删第一个
                    const nextNode = current.next
                    this.head = nextNode
                    nextNode.prev = null
                }
            }else if(index == this.count - 1){
                // 删最后一个
                let prevNode = current.prev
                this.tail = prevNode
                prevNode.next = null
            }else{
                // 删中间某一个
                current.prev.next = current.next
                current.next.prev = current.prev
            }

            this.count--
            return current.element
        }

    }
}

module.exports = {
    DoubleLinkedList
}