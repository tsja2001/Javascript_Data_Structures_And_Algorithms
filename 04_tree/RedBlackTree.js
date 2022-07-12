const { defaultCompare, Compare } = require("../util");
const { BinarySearchTree } = require("./BinarySearchTree");
const { RedBlackNode, Colors } = require("./models/node")

class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn)
    }

    // 插入节点
    insert(key) {
        // 1. 如果当前树为空
        if (this.root == null) {
            this.root = new RedBlackNode(key)
            this.root.color = Colors.BLACK
        }
        // 2. 如果树不空, 开始递归插入
        else {
            const newNode = this.insertNode(this.root, key)
            // 重新修改红黑状态
            this.fixTreeProperties(newNode)
        }
    }

    insertNode(node, key) {
        // 和当前节点比, 小, 往左找
        if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
            if (node.left == null) {
                // 左侧为空, 直接插入
                node.left = new RedBlackNode(key)
                node.left.parent = node
                return node.left
            } else {
                // 左侧不空, 递归继续找
                return this.insertNode(node.left, key)
            }
        }
        // 和当前节点比, 大, 往右找
        else {
            if (node.right == null) {
                // 右侧为空, 直接插入
                node.right = new RedBlackNode(key)
                node.right.parent = node
                return node.right
            } else {
                // 右侧不空, 递归继续找
                return this.insertNode(node.right, key)
            }
        }
    }

    // 修改红黑色颜色
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.isRed() && node.color != Colors.BLACK) {
            let parent = node.parent
            const grandParent = node.parent.parent
            // 1.👨是👴的左侧
            if (grandParent && grandParent.left == parent) {
                const uncle = grandParent.right
                // 1.1 有👨‍🦱, 且是红色
                if (uncle && uncle.color == Colors.RED) {
                    // 直接调整颜色
                    uncle.color = Colors.BLACK
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    // 当前节点指向👴, 继续向上循环
                    node = grandParent
                }
                // 1.2 无👨‍🦱
                else {
                    // 1.2.1 👦是👨右侧, 将树转化成1.2.2形式
                    if (parent.right == node) {
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent
                    }
                    // 1.2.2 👦是👨左侧
                    this.rotationLL(grandParent)
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            }
            // 2.👨节点是👴节点的右侧
            else {
                const uncle = grandParent.left
                // 2.1 有👨‍🦱, 且是红色
                if (uncle && uncle.color == Colors.RED) {
                    // 直接调整颜色
                    uncle.color = Colors.BLACK
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    // 当前节点指向👴, 继续向上循环
                    node = grandParent
                }
                // 2.2 无👨‍🦱
                else {
                    // 2.2.1 👦是👨左侧
                    if (parent.left == node) {
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent
                    }
                    // 1.2.2 👦是👨右侧
                    this.rotationRR(grandParent)
                    parent.color = Colors.BLACK
                    grandParent.color = Colors.RED
                    node = parent
                }
            }
        }
        this.root.color = Colors.BLACK
    }

    // 右旋转
    rotationLL(node) {
        // 1. 拿到node的左节点, tmp准备做新的根结点
        const tmp = node.left
        // 2.1 把tmp的右子树, 放在原来在node的左子树上
        node.left = tmp.right
        // 2.2 如果tmp右子树不为空, 重定向tmp右子树的父节点
        if (tmp.right != null && tmp.right.key != null) {
            tmp.right.parent = node
        }

        // 3.1 处理跟节点的父节点问题, 如果在整棵树中node已经是根节点, root重新指向tmp
        tmp.parent = node.parent
        if (node.parent == null) {
            this.root = tmp
        }
        // 3.2 如果node不是整棵树的根节点, 判断其父节点的左/右子节点, 重新定向
        else {
            if (node.parent.left == node) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }

        // 4. node父节点重定向
        tmp.right = node
        node.parent = tmp
    }

    // 左旋转
    rotationRR(node) {
        // 1. 拿到node的右节点, tmp准备做新的根结点
        const tmp = node.right
        // 2.1 把tmp的左子树, 放在原来在node的右子树上
        node.right = tmp.left
        // 2.2 如果tmp左子树不为空, 重定向tmp左子树的父节点
        if (tmp.left != null && tmp.left.key != null) {
            tmp.left.parent = node
        }

        // 3.1 处理跟节点的父节点问题, 如果在整棵树中node已经是根节点, root重新指向tmp
        tmp.parent = node.parent
        if (node.parent == null) {
            this.root = tmp
        }
        // 3.2 如果node不是整棵树的根节点, 判断其父节点的左/右子节点, 重新定向
        else {
            if (node.parent.left == node) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }

        // 4. node父节点重定向
        tmp.left = node
        node.parent = tmp
    }
}

module.exports = {
    RedBlackTree
}