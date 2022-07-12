const { Node } = require('./linked-list-models')

class DoubleNode extends Node {
    constructor(element, next, prev) {
        super(element)
        this.prev = prev
    }
}

module.exports = {
    DoubleNode
}