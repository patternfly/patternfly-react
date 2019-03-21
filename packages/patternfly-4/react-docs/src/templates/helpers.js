// Recursively look through all tagName: code blocks for which components are used in the *.md file
// Save results in res
function getUsedComponents0(htmlAstNode, possibleComponents, res) {
  if (!htmlAstNode) {
    return
  }

  if (htmlAstNode.type === 'element' && htmlAstNode.tagName === 'code') {
    htmlAstNode.children.filter(c => c.type === 'text').map(c => c.value.toLowerCase()).forEach(text => {
      possibleComponents.forEach(p => {
        if (text.indexOf(p.toLowerCase()) !== -1) res[p] = true;
      })
    });
  }
  else if (htmlAstNode.children) {
    for (const c of htmlAstNode.children) {
      getUsedComponents0(c, possibleComponents, res)
    }
  }
}

export function getUsedComponents(htmlAstNode, possibleComponents) {
  let res = {};
  getUsedComponents0(htmlAstNode, possibleComponents, res);
  return Object.keys(res);
}