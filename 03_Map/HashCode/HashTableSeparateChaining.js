const { defaultToString } = require('../../util')
const { ValuePair } = require('../models/valuePair')
const { HashCode } = require('./HashCode')
const { LinkedList } = require('../../01_LinkList/01_LinkedList')
/**
 * 散列表(hashCode/hashMap)
 * 使用分离链接法(Linklist)处理冲突
 */

class HashTableSeparateChaining extends HashCode {
    constructor(){
        super(defaultToString)
    }

    // 将键值加入散列表
    put(key, value){
        if(key != null && value != null){
            const hashKey = this.hashCode(key)
            const head = this.table[hashKey]

            if(head == null){
                // 如果此节点未存储数据
                this.table[hashKey] = new LinkedList
                // head = linklist
            }
            this.table[hashKey].push(new ValuePair(key, value))

            return true
        }
        return false
    }

    // 获取
    get(key){
        const hashKey = this.hashCode(key)
        let linklist = this.table[hashKey]
        if(linklist != null){
            let node = linklist.getHead()
            while(node != null){
                if(node.element.key == this.toStringFn(key)){
                    return node.element.value
                }
                node = node.next
            }
        }

        return undefined
    }

    // 移除
    remove(key){
        if(key != null){
            const hashKey = this.hashCode(key)
            let linklist = this.table[hashKey]
            if(linklist != null){
                let node = linklist.getHead()
                while(node != null){
                    if(node.element.key == this.toStringFn(key)){
                        linklist.remove(node.element)

                        if(linklist.isEmpty()){
                            delete this.table[hashKey]
                        }

                        return true
                    }
                    node = node.next
                }
            }

            return false
        }
    }

    // 转为字符串
    toString() {
        const linklistKeys = Object.keys(this.table)

        if(linklistKeys.length > 0){
            let str = this.table[linklistKeys[0]].toString()
    
            for(let i = 1; i < linklistKeys.length; i++){
                const linklist = this.table[linklistKeys[i]]
                str = `${str}, ${linklist.toString()}`
            }
    
            return str
        }

        return ''
    }

    // 获取keys的数组
    keys() {
        // 需要重写
    }

    // 获取values的数组
    values() {
        // 需要重写
    }

    // 获取keyValues的数组
    keyValues() {
        // 需要重写
    }

    // 清除
    clear() {
        this.table = {}
    }

    // 获取大小
    size(){
        // 需要重写
    }

    // 判断为空
    isEmpty(){
        // 需要重写
    }
}

module.exports = {
    HashTableSeparateChaining
}