// 对比两个元素是否相等 (用于实现indexOf()中查找元素位置)
const defaultEquals = (a, b) => {
    return a === b
}

// 比较大小常亮
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

// 对比两个元素谁大谁小, 还是相同(用于有序链表中排序)
const defaultCompare = (a, b) => {
    if (a === b) return 0
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

const reverseCompare = (compareFn) => {
    return (a, b) => compareFn(b, a)
}

// 转为字符串
const defaultToString = (item) => {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    }

    return item.toString()
}

//  平衡因子(左高度 - 右高度)
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCE: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}

// 交换数组中两个元素
const swap = (array, index1, index2) => {
    const temp = array[index2]
    array[index2] = array[index1]
    array[index1] = temp

    return array
}

module.exports = {
    defaultEquals,
    defaultCompare,
    reverseCompare,
    Compare,
    defaultToString,
    BalanceFactor,
    swap
}
