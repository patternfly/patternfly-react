// https://astexplorer.net/#/gist/cf053901c87c86c41a900bb02e57081e/0be7a558cd15b8bdc6fe3b5bb9cb15a7e142250f
module.exports = {
  meta: {
    docs: {
      description: "Don't use the react hook useLayoutEffect as it can cause issues for SSR.",
      category: 'Possible Errors',
      recommended: false
    },
    schema: []
  },
  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;
        if (
          callee.object &&
          callee.object.name === 'React' &&
          callee.property &&
          callee.property.name === 'useLayoutEffect'
        ) {
          context.report({
            node,
            message:
              '`useLayoutEffect` causes a warning in SSR. Use `useIsomorphicLayoutEffect` from `patternfly-react/packages/react-core/src/helpers`'
          });
        }
      }
    };
  }
};
