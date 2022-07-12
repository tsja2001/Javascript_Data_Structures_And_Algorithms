const { LinkedList } = require('./01_LinkedList.js.js')
const { defaultEquals } = require("../util");
const { Node } = require("./models/linked-list-models")


class  CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }

    insert(element, index,){
        if(index < 0 || index > this.count){
            return false
        }else{
            const node = new Node(element)
            if(index === 0){
                if(this.head == null){
                    // 为空时
                    node.next = this.head
                    this.head = node
                }else{
                    // 不为空, 插第一个
                    node.next = this.head
                    const current = this.getElementAt(this.size() - 1)
                    current.next = node
                    this.head = node
                }
            }else{
                // 任意中间一个
                let prevNode = this.getElementAt(index - 1)
                let nextNodex = prevNode.next
                prevNode.next = node
                node.next = nextNodex
            }
            this.count++

            return true
        }
    }

    // 重写移除算法
    removeAt(index){
        if(index < 0 || index >= this.count){
            // 越界, 链表为空
            return undefined
        }else{
            let current
            if(index == 0){
                current = this.head
                if(this.size() == 1){
                    // 只有一个元素, 移除
                    this.head = null
                }else{
                    // 有多个元素, 移除第一个
                    // 1. 获取最后一个元素
                    const tailNode = this.getElementAt(this.size() - 1)
                    // 2. 尾元素指向新头元素
                    tailNode.next = current.next
                    this.head = current.next
                }
            // }else if(index == this.size() - 1){
            }else{
                let prevNode = this.getElementAt(index - 1)
                current = prevNode.next
                prevNode.next = current.next
            }
            this.count--

            return current.element
        }
    }

}


module.exports = {
    CircularLinkedList
}