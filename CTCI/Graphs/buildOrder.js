 // Build Order: 
// You are given a list of projects and a list of dependencies 
// (which is a list of pairs of projects, where the second project is dependent on the first project). 
// All of a project's dependencies must be built before the project is. 
// Find a build order that will allow the projects to be built. 
// If there is no valid build order, return an error.

// EXAMPLE:

// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c) 
// Output: f, e, a, b, d, c

// if a node has no edges it can be built
// then nodes who had a dependency on that node can be built

const buildOrder = (pList,dList) => {
    let order = [];

    // Build and populate list w/ project vertices
    let graph = new DirectedGraph(pList.length); 
    for(let i = 0; i < pList.length; i++) {
        graph.addVertex(pList[i]);

        let project = graph.adjList.get(pList[i]); 
        for(let j = 0; j < dList.length; j++) { // for each vertex, if it has dependencies, add them to the list
            if(dList[j][0] === pList[i]) {
                project.push(dList[j][1]);
            }
        }
    }

    ///// UnSolved
};