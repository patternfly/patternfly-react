import React from 'react';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { useMDXScope } from 'gatsby-mdx/context';
import { Title } from '@patternfly/react-core';

// Copy of `import { MDXRenderer } from 'gatsby-mdx';` with some added injection.
export function MDXRenderer({ scope, components, children, ...props }) {
  const mdxComponents = useMDXComponents(components);
  const mdxScope = useMDXScope(scope);

  if (!children) {
    return null;
  }

  const fullScope = {
    // React is here just in case the user doesn't pass them in
    // in a manual usage of the renderer
    React,
    mdx,
    ...mdxScope
  };

  // children is pre-compiled mdx
  children = children.replace(/_frontmatter: _frontmatter/gm, '');
  const keys = Object.keys(fullScope);
  const values = keys.map(key => fullScope[key]);
  const fn = new Function('_fn', ...keys, `${children}`); // eslint-disable-line no-new-func

  const End = fn({}, ...values);
  const element = React.createElement(End, { components: mdxComponents, ...props });
  // Inject our scope into our custom <code> component.
  const propComponents = element.props.components;
  if (propComponents && propComponents.code) {
    propComponents.code.prototype.getScope = () => fullScope;
  }

  return element;
}
