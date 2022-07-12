// 树的节点
class Node {
    constructor(key) {
        this.left = null
        this.right = null
        this.key = key
    }
}

// 红黑树节点
class RedBlackNode extends Node {
    constructor(key) {
        super(key)
        this.color = Colors.RED
        this.parent = null
    }

    isRed() {
        return this.color == Colors.RED
    }

    isBlack() {
        return this.color == Colors.BLACK
    }
}

const Colors = {
    RED: 'red',
    BLACK: 'black',
}

module.exports = {
    Node,
    RedBlackNode,
    Colors
}