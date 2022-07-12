const { defaultToString } = require('../../util')
const { ValuePair } = require('../models/valuePair')

/**
 * 散列表(hashCode/hashMap)
 * 仅实现存储, 未解决冲突覆盖数据问题
 */

class HashCode {
    constructor(toStringFn = defaultToString) {
        this.toStringFn = toStringFn
        this.table = {}
    }

    // 将字符串转为哈希值
    hashCode(key) {
        return this.loseloseHashCode(key)
    }

    loseloseHashCode(key) {
       if(typeof key == 'number'){
           return key
       }
       const tabKey = this.toStringFn(key)
       let hash = 0
       for(let i = 0; i < tabKey.length; i++){
            hash += tabKey.charCodeAt(i)
       }

       return hash % 37
    }

    // 将键值加入散列表
    put(key, value){
        if(key !== null && value !== null){
            const hashKey = this.hashCode(key)
            this.table[hashKey] = new ValuePair(key, value)

            return true
        }
        return false
    }

    // 获取
    get(key){
        const valuePair = this.table[this.hashCode(key)]
        return valuePair === null ? null : valuePair.value
    }

    // 移除
    remove(key){
        const hashKey = this.hashCode(key)
        const valuePair = this.table[hashKey]

        if(valuePair !== null){
            delete this.table[hashKey]

            return true
        }
        return false
    }

    // 转为字符串
    toString() {
        if(this.isEmpty()){
            return ''
        }
        const keys = Object.keys(this.table)
        let str = `{ ${keys[0]} =>  ${this.table[keys[0]]} }\n`
        for(let i = 1; i < keys.length; i++){
            str = `${str}{ ${keys[i]} => ${this.table[keys[i]].toString()} } \n`
        }

        return str
    }

    // 获取keys的数组
    keys() {
        return this.keyValues().map(item => item.key) 
    }

    // 获取values的数组
    values() {
        return this.keyValues().map(item => item.value) 
    }

    // 获取keyValues的数组
    keyValues() {
        return Object.values(this.table)
    }

    // 清除
    clear() {
        this.table = {}
    }

    // 获取大小
    size(){
        return this.keyValues().length
    }

    // 判断为空
    isEmpty(){
        return this.size() === 0
    }
}

module.exports = {
    HashCode
}