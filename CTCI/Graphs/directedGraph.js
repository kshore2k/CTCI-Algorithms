// in Directed (vs undirected) paths are one-way street
export class DirectedGraph { 
    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.adjList = new Map();
    };

    // initialize the adjacent list with a 
    // null array 
    addVertex(v) {
        this.adjList.set(v, []);
    };

    // add edge(path) between src and dest.
    // get the list for vertex v and put the vertex w denoting edge between v and w
    addEdge(v, w) {
        this.adjList.get(v).push(w);
    };

    printGraph() {
        const get_keys = this.adjList.keys(); // get all the vertices (nodes)

        for(let i of get_keys) { // iterate over the vertices (nodes)

            let get_values = this.adjList.get(i); // get the corresponding adjacency list for the vertex
            let conc = "";

            for(let j of get_values) { // iterate over the adjacency list & concatenate values into a string
                conc += j + " ";
            }

            console.log(i + " -> " + conc); // print the vertex and its adjacency list
        }
    };

    //breadth first search
    bfs(startingNode) {
        let visited = []; // create visited array
        for(let i = 0; i < this.numOfVertices; i++){
            visited[i] = false;
        }

        let q = new QueueViaArray(); // create queue

        visited[startingNode] = true; // add startingNode to the queue
        q.enqueue(startingNode);

        while(!q.isEmpty()) { // loop until queue is empty
            let getQueueElement = q.dequeue(); // get the element from the queue

            console.log(getQueueElement);

            let get_List = this.adjList.get(getQueueElement); // get the adjacent list for the current vertex (node)

            for(let i in get_List) {  // loop through the list and add the element to the  
                let neigbor = get_List[i]; // queue if it is not processed yet

                if(!visited[neigbor]) {
                    visited[neigbor] = true;
                    q.enqueue(neigbor);
                }
            }
        }
    };

    //dfs
};