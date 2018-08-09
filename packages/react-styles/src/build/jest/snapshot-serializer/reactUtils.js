function getNodes(node, nodes = []) {
  if (node.children) {
    const children = typeof node.children === 'function' ? node.children() : node.children;

    children.forEach(child => getNodes(child, nodes));
  }

  if (typeof node === 'object') {
    nodes.push(node);
  }

  return nodes;
}

export { getNodes };
