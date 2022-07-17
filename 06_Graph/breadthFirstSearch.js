const { Graph } = require("./Graph.js");
const { Compare, defaultCompare, Colors, initializeColor } = require("../util");

const breadthFirstSearch = (graph, startVertex, callback) => {
    // 拿到所有节点
    const vertices = graph.getVertex()
    // 拿到节点对应边的字典
    const adjList = graph.getAdjList()
    // 初始化颜色, 全设为白色
    const color = initializeColor(vertices)
    // 待遍历的队伍(先放入要第一个遍历的节点)
    const searchQueue = []

    searchQueue.push(startVertex)

    // 开始遍历队列中的节点
    while (searchQueue.length > 0) {
        // 拿到队列中的第一个节点
        const currentVertice = searchQueue.shift()
        // 拿到此节点的所有邻居
        const neighbours = adjList.get(currentVertice)
        // 遍历邻居
        neighbours.forEach(item => {
            // 对所有白色邻居添加到队列中, 并标记为灰色
            if (color[item] == Colors.WHITE) {
                searchQueue.push(item)
                color[item] = Colors.GRAY
            }
            // 完成遍历, 自己变黑, 标记完成
            color[currentVertice] = Colors.BLACK
        })
        // 每一次遍历之后, 执行一次回掉函数
        if (callback) {
            callback(currentVertice)
        }
    }
}
const breadthFirstSearch_ShortestPath = (graph, startVertex) => {
    // 拿到所有节点
    const vertices = graph.getVertex()
    // 拿到节点对应边的字典
    const adjList = graph.getAdjList()
    // 初始化颜色, 全设为白色
    const color = initializeColor(vertices)
    // 保存每个点到传入点的距离
    const distances = {}
    // 保存每个点到传入节点的路径(前溯点)
    const predecessors = {}
    // 待遍历的队伍(先放入要第一个遍历的节点)
    const searchQueue = []

    searchQueue.push(startVertex)

    vertices.forEach(item => {
        // 初始化记录距离(传入点到传入点的距离是0)
        distances[item] = 0
        // 初始化记录前溯点
        predecessors[item] = []
    })

    // predecessors[startVertex] = startVertex

    // 开始遍历队列中的节点
    while (searchQueue.length > 0) {
        // 拿到队列中的第一个节点
        const currentVertice = searchQueue.shift()
        // 拿到此节点的所有邻居
        const neighbours = adjList.get(currentVertice)
        // 遍历邻居
        neighbours.forEach(item => {
            // 对所有白色邻居添加到队列中, 并标记为灰色
            if (color[item] == Colors.WHITE) {
                searchQueue.push(item)
                color[item] = Colors.GRAY
                // 记录距离, 此邻居节点, 是当前节点距离跟节点的距离 + 1
                distances[item] = distances[currentVertice] + 1
                // 记录路径, 次邻居节点的前溯节点, 是当前节点
                console.log(currentVertice)
                // predecessors[item] = currentVertice
                predecessors[item] = [...predecessors[currentVertice], currentVertice]
            }
            // 完成遍历, 自己变黑, 标记完成
            color[currentVertice] = Colors.BLACK
        })
    }
    return {
        predecessors,
        distances
    }
}

module.exports = {
    breadthFirstSearch,
    breadthFirstSearch_ShortestPath,
    // buildParthByPredecessors
}
