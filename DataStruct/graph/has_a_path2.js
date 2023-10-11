//breadth first - iterative solution
function hasPath(graph, src, dst) {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    //here
    if (current === dst) {
      return true;
    }
    for (const neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
}
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};
console.log(hasPath(graph, "a", "f"));
