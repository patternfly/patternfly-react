import { NodeShape } from '@patternfly/react-topology';

const getRandomNode = (numNodes: number, notNode = -1): number => {
  let node = Math.floor(Math.random() * numNodes);
  if (node === notNode) {
    node = getRandomNode(numNodes, notNode);
  }
  return node;
};

const STATUSES = ['default', 'danger', 'warning', 'success'];
const SHAPES = [
  NodeShape.circle,
  NodeShape.rect,
  NodeShape.rhombus,
  NodeShape.trapezoid,
  NodeShape.octagon,
  NodeShape.hexagon
];

export const generateData = (
  numNodes: number,
  numGroups: number,
  numEdges: number
): {
  nodes: { id: string; group: number; status: string; shape: NodeShape }[];
  edges: { source: string; target: string }[];
} => {
  const nodes: { id: string; group: number; status: string; shape: NodeShape }[] = [];
  const edges: { source: string; target: string }[] = [];

  for (let i = 0; i < numNodes; i++) {
    const group = i % (numGroups + 1);
    const enumIndex = Math.round(Math.random() * (STATUSES.length + 1));
    nodes.push({
      id: `Node ${i}`,
      group: group > 0 ? group : undefined,
      status: STATUSES[i % STATUSES.length],
      shape: SHAPES[enumIndex]
    });
  }

  for (let i = 0; i < numEdges; i++) {
    const sourceNum = getRandomNode(numNodes);
    const targetNum = getRandomNode(numNodes, sourceNum);
    edges.push({ source: `Node ${sourceNum}`, target: `Node ${targetNum}` });
  }

  return { nodes, edges };
};
