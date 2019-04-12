import React from "react";
import { MDXTag } from "@mdx-js/tag";
import { withMDXComponents } from "@mdx-js/tag/dist/mdx-provider";
import { withMDXScope } from "gatsby-mdx/context";

// Copy of `import { MDXRenderer } from 'gatsby-mdx';` with some added injection.
export const MDXRenderer = withMDXScope(
  withMDXComponents(({ scope = {}, components = {}, children, ...props }) => {
    if (!children) {
      return null;
    }
    const fullScope = {
      // React and MDXTag are here just in case the user doesn't pass them in
      // in a manual usage of the renderer
      React,
      MDXTag,
      ...scope
    };

    // children is pre-compiled mdx
    const keys = Object.keys(fullScope);
    const values = keys.map(key => fullScope[key]);
    const fn = new Function("_fn", ...keys, `${children}`);


    const End = fn({}, ...values);

    const element = React.createElement(End, { components, ...props });

    // Inject our scope into our custom <code> component.
    let propComponents = element.props.components;
    if (propComponents && propComponents.code) {
      propComponents.code.prototype.getScope = () => fullScope;
    }

    return element;
  })
);