const { breadthFirstSearch, breadthFirstSearch_ShortestPath } = require('./breadthFirstSearch')
const { Graph } = require('./Graph')

const graph = new Graph(false)

let verticesList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
// let verticesList = ['A', 'B']
verticesList.forEach(item => graph.addVertex(item))

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("E", "I")

graph.toString()

console.log(breadthFirstSearch_ShortestPath(graph, 'A'))

// breadthFirstSearch(graph, 'B', (vertice) => {
//     console.log(vertice)
// })

