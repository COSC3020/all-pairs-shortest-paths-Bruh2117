function allPairsShortestPaths(graph) {
    // We initialize a distance matrix where pairs of vertices 
    // with themselves are 0.
    // The rest are set to Infinity, and if there are weighted edges 
    // in the graph we put those in the dist matrix 
    var dist = [];
    for (var i = 0; i < graph.length; i++)
    {
        dist[i] = []; 
        for (var j = 0; j < graph.length; j++)
        {
            dist[i][j] = Infinity;
            if (j == i)
            {
                dist[i][j] = 0; 
            }
            else if (graph[i][j] > 0)
            {
                dist[i][j] = graph[i][j]; 
            }
        }
    }

    // We now start Floyd-Warshall's algorithm by finding shortest path 
    // between all pairs of vertices
    for (var k = 0; k < graph.length; k++)
    {
        for (var i = 0; i < graph.length; i++)
        {
            for (var j = 0; j < graph.length; j++)
            {
                if (dist[i][j] > dist[i][k] + dist[k][j])
                {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist; 
}
