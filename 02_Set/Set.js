/**
 * 一个元素不重复的集合 => Set
 */
class Set {
    constructor(){
        this.items = {}
    }

    // 添加元素
    add(element){
        if(this.has(element)){
            return false
        }else{
            this.items[element] = element

            return true
        }
    }

    // 移除一个
    delete(element){
        if(this.has(element)){
            delete this.items[element]

            return true
        }else{
            return false
        }
    }

    // 判断是否在 return true/false
    has(element){
        // return element in this.items
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    // 清除所有元素
    clear(){
        this.items = {}
    }

    // 获取大小
    size(){
        return Object.keys(this.items).length
    }

    // 返回一个所有元素的数组
    values(){
        return Object.values(this.items)
    }

    /**
     * 集合运算⬇️
     */
    
    // 并集
    union(otherSet){
        const unionSet = new Set()

        this.values().forEach(item => unionSet.add(item))
        otherSet.values().forEach(item => unionSet.add(item))

        return unionSet
    }

    // 交集
    intersection(otherSet){
        const intersection = new Set()
        let bigger = this.values()
        let smaller = otherSet.values()

        console.log(bigger)
        console.log(smaller)

        if(this.size() < otherSet.size()){
            smaller = this.values()
            bigger = otherSet.values()
        }

        smaller.forEach(item => {
            if(bigger.includes(item)) {
                intersection.add(item)
            }
        })

        return intersection
    }

    // 差集
    difference(otherSet){
        const difference = new Set()

        this.values().forEach(item => {
            if(! otherSet.has(item)) {
                difference.add(item)
            }
        })

        return difference
    }

    // 是否为otherSet的子集
    isSubsetOf(otherSet){
        if(otherSet.size() < this.size()){
            return false
        }

        let subsetFlag = true
        this.values().every(item => {
            if(otherSet.has(item)) {
                return true
            }else{
                subsetFlag = false 
                return false
            }
        })

        return subsetFlag
    }
}

module.exports = {
    Set
}