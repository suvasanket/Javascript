const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges);

  const visited = new Set([src]);

  const queue = [[src, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current === dst) return distance;

    for (const neighbour of graph[current]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return "don't have any path";
};

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

console.log(shortestPath(edges, "j", "m"));
