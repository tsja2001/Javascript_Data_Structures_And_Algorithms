const { defaultCompare, BalanceFactor, Compare } = require('../util');
const { BinarySearchTree } = require('./BinarySearchTree')
const { Node } = require('./models/node') 


class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare){
        super(compareFn)
    }

    // 获取某个节点高度
    getNodeHeight(node){
        if(node == null){
            return -1
        }
        return Math.max(
            this.getNodeHeight(node.left),
            this.getNodeHeight(node.right)
        ) + 1
    }

    // 计算平衡因子(左高度 - 右高度)
    getBalanceFactor(node){
        const height = 
            this.getNodeHeight(node.left) -
            this.getNodeHeight(node.right)
        switch (height) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            case 0:
                return BalanceFactor.BALANCE
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            case 2:
                return BalanceFactor.UNBALANCED_LEFT
        }
    }

    // LL左左 向右单旋转
    rotationLL(node){
        const tmp = node.left
        node.left = tmp.right
        tmp.right = node

        return tmp
    }

    // RR右右 向左单旋转
    rotationRR(node){
        const tmp = node.right
        node.right = tmp.left
        tmp.left = node

        return tmp
    }

    // LR左右 向右双旋转
    rotationLR(node){
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
    }

    // RL右左 向左双旋转
    rotationRL(node){
        node.right = this.rotationLL(node.left)
        return this.rotationRR(node)
    }

    // AVL树插入节点
    insert(key){
        this.root = this.insertNode(this.root, key)
    }

    insertNode(node, key){
        // 1.先插入节点
        if(node == null){
            // 1.1 如果已经遍历到空节点, 就插入这里
            return new Node(key)
        }else if(this.compareFn(key, node.key) == Compare.LESS_THAN){
            // 1.2 如果要插入元素 > 当前遍历节点, 往左子节点找
            node.left = this.insertNode(node.left, key)
        }else if(this.compareFn(key, node.key) == Compare.BIGGER_THAN){
            // 1.3 如果要插入元素 > 当前遍历节点, 往左子节点找
            node.right = this.insertNode(node.right, key)
        }else{
            // 1.4 要插入的元素已有, 不再找了
            return node
        }
        // 2.验证平衡,调平
        const balanceFactor = this.getBalanceFactor(node)
        if(balanceFactor == BalanceFactor.UNBALANCED_LEFT){
            // 2.1 左边更高 
            if(this.compareFn(key, node.left.key) == Compare.LESS_THAN){
                // 2.1.1 LL: 插入到了左子节点的左子节点
                node = this.rotationLL(node)
            }else{
                // 2.1.2 LR: 插入到了左子节点的右子节点
                return this.rotationLR(node)
            }
        }
        if(balanceFactor == BalanceFactor.UNBALANCED_RIGHT){
            // 2.1 右边更高 
            if(this.compareFn(key, node.right.key) == Compare.BIGGER_THAN){
                // 2.1.1 RR: 插入到了右子节点的右子节点
                node = this.rotationRR(node)
            }else{
                // 2.1.2 RL: 插入到了右子节点的左子节点
                return this.rotationRL(node)
            }
        }

        return node
    }

    // AVL树移除节点
    remove(key){
        this.removeNode(this.root, key)
    }
    
    removeNode(node, key){
        node = super.removeNode(node, key)
        if(node == null){
            return node
        }
        // 检测是否平衡
        const balanceFactor = this.getBalanceFactor(node)
        // 左边高
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft = this.getBalanceFactor(node.left)
            if(
                balanceFactorLeft === BalanceFactor.BALANCE || 
                balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ){
                // LL型
                return this.rotationLL(node)
            }
            if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                // LR型
                return this.rotationLR(node.left)
            }
        }
        // 右边高
        if(balanceFactor === balanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight = this.getBalanceFactor(node.left)
            if(
                balanceFactorRight === BalanceFactor.BALANCE || 
                balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ){
                // RR型
                return this.rotationRR(node)
            }
            if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                // RL型
                return this.rotationRL(node.right)
            }

        }
        return node
    }
}

module.exports = {
    AVLTree
}