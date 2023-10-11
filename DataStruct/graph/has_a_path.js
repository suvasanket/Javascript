//we have to findout wheather there is any path from one node to another

//depth first resusive
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (const neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst) === true) {
      return true;
    }
  }
  return false;
};
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};
console.log(hasPath(graph, "a", "f"));
