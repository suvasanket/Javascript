const depthfirst = (graph, felement) => {
  console.log(felement);
  for (const i of graph[felement]) {
    depthfirst(graph, i);
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
depthfirst(graph, "a");
