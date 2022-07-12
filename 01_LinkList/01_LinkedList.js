const { defaultEquals } = require("../util");
const { Node } = require("./models/linked-list-models")
/**
 * 单链表
 */
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = null
        this.equalsFn = equalsFn
    }

    // 最后加入
    push(element) {
        const node = new Node(element)

        if(this.head == null){
            // 链表为空时
            this.head = node
        }else{
            // 链表不为空时
            let current = this.head
            while(current.next != null) {
                current = current.next
            }
            current.next = node
        }

        this.count++
    }

    // 移除
    removeAt(index) {
        if(index < 0 || index >= this.count) {
            // 检查越界
            return undefined
        }else{
            let current = this.head
            if(index == 0){
                // 当要移除第一个
                this.head = this.head.next

            }else{
                // 移除的不是第一个
                let previous = this.getElementAt(index - 1)
                
                let current = previous.next
                previous.next = current.next
            }

            this.count--
            return current.element
        }
    }

    // 获取索引值下的元素
    getElementAt(index) {
        if(index < 0 || index >= this.count){
            return undefined
        }else{
            let current = this.head
            for(let i = 0; i < index; i++){
                current = current.next
            }
            
            return current
        }
    }

    // 插入(到指定位置)
    insert(element, position) {
        if(position < 0 || position > this.count){
            return false
        }else{
            const node = new Node(element)

            if(position == 0){
                // 在第一个插入
                const current = this.head

                node.next = current
                this.head = node
            }else{
                // 不在第一个插入
                const previous = this.getElementAt(position - 1)
                node.next = previous.next
                previous.next = node
            }

            this.count++
            return true
        }
    }


    // 返回索引
    indexOf(element) {
        let current = this.head

        for(let i = 0; i < this.count && current != null; i++){
            if(this.equalsFn(current.element, element)){
                return i
            }

            current = current.next
        }

        return -1
    }

    // 移除元素
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    // 判断为空
    isEmpty() {
        return this.size() == 0
    }

    // 获取大小
    size() {
        return this.count
    }

    // 获取头
    getHead(){
        return this.head
    }

    // 专为字符串
    toString() {
        if(this.count == 0) {
            // 为空
            return ''
        }else{
            // 不空
            let current = this.head
            let str = `${current.element}`
            for(let i = 1; i < this.count; i++){
                current = current.next
                str = `${str}, ${current.element}`
            }

            return str
        }
    }
}

module.exports = {
    LinkedList
}