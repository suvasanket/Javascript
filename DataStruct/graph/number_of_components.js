//island==component

const number_of_island = (graph) => {
  const visited = new Set();

  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count++;
    }
  }

  return count;
};

let explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (const neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
};
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};
console.log(number_of_island(graph));
