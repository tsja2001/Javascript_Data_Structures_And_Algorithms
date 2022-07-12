const { Compare, defaultCompare } = require('../util') 
const { Node } = require('./models/node') 

class BinarySearchTree {
    constructor(compareFn = defaultCompare){
        this.root = null
        this.compareFn = compareFn
    }

    // 插入元素
    insert(key){
        if(this.root == null){
            this.root = new Node(key)
        }else{
            this.insertNode(this.root, key)
        }
    }

    insertNode(node, key){
        if(this.compareFn(key, node.key) == Compare.LESS_THAN){
            // 小于父节点 => 左子节点
            // 左子节点为空, 放入元素
            if(node.left == null){
                node.left = new Node(key)
            }else{
                // 左子节点不空, 递归
                this.insertNode(node.left, key)
            }
        }else{
            // 大于等于父节点 => 右子节点
            // 左子节点为空, 放入元素
            if(node.right == null){
                node.right = new Node(key)
            }else{
                // 右子节点不空, 递归
                this.insertNode(node.right, key)
            }
        }
    }

    // 中序遍历(左中右)
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }

    inOrderTraverseNode(node, callback) {
        if(node != null){
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }

    // 先序遍历(中左右)
    proOrderTraverse(callback) {
        this.proOrderTraverseNode(this.root, callback)
    }

    proOrderTraverseNode(node, callback) { 
        if(node != null){
            callback(node.key)
            this.proOrderTraverseNode(node.left, callback)
            this.proOrderTraverseNode(node.right, callback)
        }
    }

    // 后序遍历(左右中)
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }

    postOrderTraverseNode(node, callback){
        if(node != null){
            this.postOrderTraverse(node.left, callback)
            this.postOrderTraverse(node.right, callback)
            callback(node.key)
        }
    }

    // 获取最小值
    min() {
        return this.minNode(this.root)
    }

    minNode(node){
        if(node.left == null){
            return node
        }

        return this.minNode(node.left)
    }

    // 获取最大值
    max() {
        return this.maxNode(this.root)
    }

    maxNode(node){
        if(node.right == null){
            return node
        }

        return this.maxNode(node.right)
    }

    // 判断一个值是否在树🌲中
    search(key){
        return this.searchNode(this.root, key)
    }

    searchNode(node, key){
        if(node == null){
            // 如果找到节点为空都没有 => 找不到元素
            return false
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            // 要查找的元素 < 当前节点, 走左子树
            return this.searchNode(node.left, key)
        }else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            // 要查找的元素 > 当前节点, 走右子树
            return this.searchNode(node.right, key)
        }else{
            return true
        }
    }

    // 删除一个元素
    remove(key) {
        // console.log(this.removeNode(this.root, key))
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        // 找了一圈没找着要移除, 返回空
        if(node == null){
            return null
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left =  this.removeNode(node.left, key)
            return node
        }else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.right =  this.removeNode(node.right, key)
            return node
        }else{
            // 找到要移除的元素了
            if(node.left == null && node.right == null){
                // 1. 为叶元素, 直接移除
                node = null
                return node
            }else if(node.left == null){
                // 2. 只有左边为空, 右边不为空
                node = node.right
                return node
            }else if(node.left == null){
                // 2. 只有右边为空, 左边不为空
                node = node.left
                return node
            }else{
                // 3. 左右都有元素, 把右边最小替换到要移除的位置上
                let minNode = this.minNode(node.right)
                node.key = minNode.key
                node.right = this.removeNode(node.right, minNode.key)
                return node
            }
        }
    }
}

module.exports = {
    BinarySearchTree
}