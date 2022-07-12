// const { Set } = require('./Set')
const { union, intersection, difference, isSubsetOf } = require('./ES6_Set')

const set1 = new Set()
set1.add('1')
set1.add('0')

const set2 = new Set()
set2.add('3')
set2.add('4')
set2.add('6')
set2.add('1')
set2.add('0')

// console.log(set1.size)

// console.log(union(set1, set2))
// console.log(intersection(set1, set2))
// console.log(difference(set1, set2))
console.log(isSubsetOf(set1, set2))