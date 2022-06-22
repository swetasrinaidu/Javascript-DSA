//using adjacency list to store graph
class Graph{
    constructor(){
        this.adjacencyList={}
    }

//add a vertex
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex]=[]; 
    return this;
  }

//add edge
  addEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this.adjacencyList[vertex1],this.adjacencyList[vertex2]
  }
// remove edge
  removeEdge(vertex1,vertex2){
    console.log("remove edge")
    this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(el=>el!==vertex2)
    this.adjacencyList[vertex2]=this.adjacencyList[vertex2].filter(el=>el!==vertex1)
    return this.adjacencyList[vertex1],this.adjacencyList[vertex2]
  } 
// remove vertex
  removeVertex(vertex){
    console.log("remove vertex")
  while(this.adjacencyList[vertex].length){
    const adjaVertex=this.adjacencyList[vertex].pop();
    this.removeEdge(vertex,adjaVertex)
  }
  delete this.adjacencyList[vertex];
  return this;
}   
dfsRecursive(start){
  console.log("dfs recursive")
  const result=[];
  const visted= {};
  const adjacencyList=this.adjacencyList;
  function dfs(vertex){
  if(!vertex) return null;
  visted[vertex]=true;
  result.push(vertex);
  adjacencyList[vertex].forEach(el=> {
              if(!visted[el]){
                return dfs(el);
              }
    
  });
 } 
 dfs(start);
 return result;
}

dfsIterative(start){
  console.log("dfs iterative")
  const result=[];
  const stack=[start];
  const visited={};
  let currentVertex;
  visited[start]=true;
  while(stack.length){
    currentVertex=stack.pop();
    console.log(currentVertex)
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach(el=>{
             if(!visited[el]){
              visited[el]=true;
              stack.push(el)
             }
    });
  }
   return result;
}
bfsIterative(start){
  const queue=[start];
  const result=[];
  const visited={};
  visited[start]=true;
  let currentVertex;
  while(queue.length){
    currentVertex=queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach(el=>{
      if(!visited[el]){
        visited[el]=true;
        queue.push(el);
      }
           
    });
  }
  return result;
}

}
let graph=new Graph()
console.log(graph.addVertex('A'))
console.log(graph.addVertex('B'))
console.log(graph.addVertex('C'))
console.log(graph.addVertex('D')) 
console.log(graph.addVertex('E')) 
console.log(graph.addVertex('F')) 
console.log(graph.addEdge('A','B'))
console.log(graph.addEdge('A','E'))
console.log(graph.addEdge('B','C'))
console.log(graph.addEdge('C','D'))
console.log(graph.addEdge('D','F'))
console.log(graph.addEdge('F','E'))
console.log(graph.addEdge('B','D'))
console.log(graph.addEdge('D','E'))
// console.log(graph.removeEdge(5,6))
// console.log(graph.removeEdge(1,4))
// console.log(graph.removeVertex(5))
// console.log(graph.removeVertex(6))
console.log(graph.dfsRecursive('A'))
console.log(graph.dfsIterative('A'))
console.log(graph.bfsIterative('A'))

