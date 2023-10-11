const breadthfirst = (graph, flemenent) => {
  const queue = [flemenent];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const i of graph[current]) {
      queue.push(i);
    }
  }
};
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};
breadthfirst(graph, "a");
