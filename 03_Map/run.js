const { Dictionary } = require('./Dictionary')
const { HashCode } = require('./HashCode/HashCode')
const { HashTableSeparateChaining } = require('./HashCode/HashTableSeparateChaining')
const { HashTableLinearProbing } = require('./HashCode/HashTableLinearProbing')
// const dictionary = new Dictionary

// dictionary.set('wuhu0', 'aaa')
// dictionary.set('wuhu1', {name: 'yahah'})
// dictionary.set('wuhu2', [1,2,3,4])
// dictionary.set('wuhu3', 333)


// // console.log(dictionary.keys())
// // console.log(dictionary.values())
// console.log(dictionary.toString())

// dictionary.forEach((key, value) => {
//     console.log(key, value)
//     if(key == 'wuhu1') return false
// })5

// const arr = [1,2,3,4,5,6]
const hashcode = new HashTableLinearProbing
hashcode.put(444, 'wuhu4')
hashcode.put('哈', '哈哈哈哈')
hashcode.put('啊', '啊aaaaaa')
hashcode.put('焯', '焯aa')
hashcode.put('啦', '啦aa')
hashcode.remove('啊')
// console.log(hashcode.get('焯'))
// console.log(hashcode.get('啊'))
// console.log(hashcode.get('啊'))
console.log(hashcode.get('哈'))