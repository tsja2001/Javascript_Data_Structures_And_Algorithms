const { defaultToString } = require('../util')
const { ValuePair } = require('./models/valuePair')

class Dictionary {
    constructor(toStringFn = defaultToString) {
        this.toStringFn = toStringFn
        this.table = {}
    }

    // 是否有此键值对
    hasKey(key) {
        return this.table[this.toStringFn(key)] != null
    }

    // 设置键值对
    set(key, value) {
        if(key !== null || value !== null){
            const keyStr = this.toStringFn(key)
            this.table[keyStr] = new ValuePair(key, value)
    
            return true
        }

        return false
    }

    // 字典中移除
    remove(key) {
        if(this.hasKey(key)){
            const keyStr = this.toStringFn(key)
            delete this.table[keyStr]

            return true
        }

        return null
    }

    // 检索一个值
    get(key) {
        const keyStr = this.toStringFn(key)
        const valuePair = this.table[keyStr]

        return valuePair === null ? null : valuePair.value
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

    // 遍历, key与value, 当会掉函数返回false时, 终止循环
    forEach(callback) {
        const keyValuesList = this.keyValues()
        let continueFlag = true
        for (let index = 0; index < keyValuesList.length; index++) {
            const element = keyValuesList[index]
            continueFlag = callback(element.key, element.value)
            if(continueFlag == false) {
                return
            }
        }
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

    // 转字符串
    toString() {
        if(this.isEmpty()) return ''
        const keyValues = this.keyValues()
        // let itemStr = `${keyValues[0].key}: ${keyValues[0].value}`
        let itemStr = `${keyValues[0].toString()}`

        for(let i = 1; i < keyValues.length; i ++){
            // itemStr = `${itemStr}, ${keyValues[i].key} : ${keyValues[i].value}`
            itemStr = `${itemStr}, ${keyValues[i].toString()}`
        }

        return itemStr
    }
}

module.exports = {
    Dictionary
}