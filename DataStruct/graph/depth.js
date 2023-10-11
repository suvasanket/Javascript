function depthfirst(graph, felement) {
  const stack = [felement];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let i of graph[current]) {
      stack.push(i);
    }
  }
}
const graph = {
  a: ["b", "c"],
  b: ["d", "e"],
  c: ["f"],
  d: [],
  e: [],
  f: [],
};

depthfirst(graph, "a");
