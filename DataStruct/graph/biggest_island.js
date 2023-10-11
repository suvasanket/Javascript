function biggest_island(graph) {
  let visited = new Set();
  let longest = 0;

  for (let node in graph) {
    let size = explore(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
}

const explore = (graph, node, set) => {
  if (set.has(String(node))) return 0;

  set.add(String(node));

  let count = 1;
  for (let neighbour of graph[node]) {
    count += explore(graph, neighbour, set);
  }

  return count;
};
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};
console.log(biggest_island(graph));
