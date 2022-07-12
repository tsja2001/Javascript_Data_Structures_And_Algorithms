/**
 * 实现ES6内置Set类的并集 交集 差集 判断为子集 的运算
 */
// 并集
const union = (setA, setB) => {
    // const unionSet = new Set()

    // setA.forEach(item => unionSet.add(item))
    // setB.forEach(item => unionSet.add(item))

    // return unionSet

    return new Set([...setA, ...setB])
}

// 交集
const intersection = (setA, setB) => {
    // const intersect = new Set()

    // setA.forEach(item => {
    //     if(setB.has(item)) {
    //         intersect.add(item)
    //     }
    // })

    // return intersect

    return new Set([...setA].filter( x => setB.has(x)) )
}

// 差集
const difference = (setA, setB) => {
    return new Set([...setA].filter( x => !setB.has(x)) )
}

// 是否为otherSet的子集
const isSubsetOf = (setA, setB) => {
    return new Set([...setA].filter( x => !setB.has(x))).size == 0
}


module.exports = {
    union,
    intersection,
    difference,
    isSubsetOf
}