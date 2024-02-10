class Graph {
  constructor() {
    this.graph = new Map();
  }

  addVertex(vertex) {
    if (this.graph.has(vertex) == false) {
      this.graph.set(vertex, new Map());
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.graph.has(vertex1) == false) {
      this.graph.set(vertex1, new Map());
    }
    if (this.graph.has(vertex2) == false) {
      this.graph.set(vertex2, new Map());
    }

    this.graph.get(vertex1).set(vertex2, weight);
    this.graph.get(vertex2).set(vertex1, weight);
  }
  //   addEdge(vertex1, vertex2) {
  //     if (this.graph.has(vertex1) == false) {
  //       this.graph.set(vertex1, new Set());
  //     }
  //     if (this.graph.has(vertex2) == false) {
  //       this.graph.set(vertex2, new Set());
  //     }

  //     this.graph.get(vertex1).add(vertex2);
  //     this.graph.get(vertex2).add(vertex1);
  //   }

  printAdjancyList() {
    for (let [vertex, adjacentVertex] of this.graph) {
      console.log(vertex, "=>", adjacentVertex);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 20);
graph.addEdge("B", "C", 15);
graph.addEdge("D", "A", 23);
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("D", "A");

graph.printAdjancyList();
