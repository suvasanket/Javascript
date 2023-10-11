//find if there exist any path or not from one node to another

//1
const undirected_finder = (edges, node1, node2) => {
  const graph = buildGraph(edges);
  return hasPath(graph, node1, node2, new Set());
};

//3
//haspath
const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;

  //infinite loop avoider
  if (visited.has(src)) return false;
  visited.add(src);

  for (const neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst, visited) === true) return true;
  }
  return false;
};

//2
//first convert all edges into adjacency list(from a array to graph)
const buildGraph = (edges) => {
  const graph = {};
  for (const node of edges) {
    const [a, b] = node;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirected_finder(edges, "i", "n"));
