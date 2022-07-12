const { defaultToString } = require('../../util')
const { ValuePair } = require('../models/valuePair')
const { HashCode } = require('./HashCode')

/**
 * 散列表(hashCode/hashMap)
 * 使用线性探查方法, 冲突的元素存的位置往下找
 * 删除时将后面的元素往前移动
 */

class HashTableLinearProbing extends HashCode {
    constructor(){
        super(defaultToString)
    }

    put(key, value){
        if(key != null && value != null){
            let hashKey = this.hashCode(key)

            while(this.table[hashKey] != null){    
                hashKey++
            }
            this.table[hashKey] = new ValuePair(this.toStringFn(key), value)

            return true
        }

        return false
    }

    get(key){
        let hashKey = this.hashCode(key)
        while(
            this.table[hashKey] != null 
            && 
            this.table[hashKey].key != this.toStringFn(key)
        ){
            hashKey++
        }

        return this.table[hashKey] ? this.table[hashKey].value : undefined

    }

    remove(key){
        const hashKeyRaw = this.hashCode(key)
        let hashKey = hashKeyRaw
        // 找到要移除的位置
        while(this.table[hashKey].key != this.toStringFn(key)){
            if(this.table[hashKey] == null){
                return false
            }
            hashKey++
        }
        // 移除元素
        delete this.table[hashKey]
        // 后面的往前移动
        while(this.table[hashKey + 1] != null && this.hashCode(this.table[hashKey + 1].key) <= hashKeyRaw){
            this.table[hashKey] = this.table[hashKey + 1]
            delete this.table[hashKey + 1]
            hashKey++
        }

        return true
    }
}

module.exports = {
    HashTableLinearProbing
}