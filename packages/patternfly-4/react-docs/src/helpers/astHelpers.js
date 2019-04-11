function getLinks0(htmlAstNode, res) {
  if (!htmlAstNode) {
    return;
  }

  if (htmlAstNode.type === 'element' && htmlAstNode.tagName === 'a') {
    res[htmlAstNode.properties.href] = true;
  }
  else if (htmlAstNode.children) {
    for (const c of htmlAstNode.children) {
      getLinks0(c, res);
    }
  }
}

exports.getLinks = (htmlAst) => {
  let res = {};
  getLinks0(htmlAst, res);
  return Object.keys(res);
}