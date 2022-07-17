const { Dictionary } = require("../03_Map/Dictionary");
const { Compare, defaultCompare, Colors, initializeColor } = require("../util");

class Graph {
	constructor(isDirected = false) {
		this.isDirected = isDirected;
		this.vertices = [];
		this.adjList = new Dictionary();
	}

	// 向图中插入节点
	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push(v);
			return true;
		}
		return false;
	}

	// 连接边
	addEdge(v, w) {
		// 如果在存储边的adjList字典中, 没有v或者w顶点, 先建立这个定点
		if (!this.adjList.hasKey(v)) {
			this.adjList.set(v, []);
		}
		if (!this.adjList.hasKey(w)) {
			this.adjList.set(w, []);
		}

		// 拿到边字典中 节点v 相邻节点的数组, 加入w. 表示v与w连接成边
		this.adjList.get(v).push(w);

		// 如果是双向有向图, 还需要建立 w 与 v的连接
		if (!this.isDirected) {
			this.adjList.get(w).push(v);
		}
	}

	// 获取所有节点
	getVertex() {
		return this.vertices;
	}

	// 获取所有边
	getAdjList() {
		return this.adjList;
	}

	// 字符串输出
	toString() {
		this.vertices.forEach((item) => {
			console.log(`${item} => ${this.adjList.get(item)}`);
		});
	}
}

module.exports = {
	Graph,
};
