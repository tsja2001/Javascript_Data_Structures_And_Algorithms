const { initializeColor, Colors } = require("../util")

const depthFirstSearch = (graph, callback) => {
    // 拿到所有节点
    const vertices = graph.getVertex()
    // 拿到节点对应边的字典
    const adjList = graph.getAdjList()
    // 初始化颜色, 全设为白色
    const color = initializeColor(vertices)

    vertices.forEach(item => {
        if (color[item] == Colors.WHITE) {
            depthFirstSearchVisit(item, color, adjList, callback)
        }
    })
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GRAY
    // 如果有回掉函数, 执行回掉函数
    if (callback) {
        callback(u)
    }

    const neighbours = adjList.get(u)
    neighbours.forEach(item => {
        if (color[item] == Colors.WHITE) {
            depthFirstSearchVisit(item, color, adjList, callback)
        }
    })

    color[u] = Colors.BLACK
}

module.exports = {
    depthFirstSearch
}