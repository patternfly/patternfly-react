/* eslint-disable jsdoc/require-param-description, jsdoc/require-param-type */
import * as css from 'css';
import * as jsdom from 'jsdom';

const { JSDOM } = jsdom;

/**
 * @param props
 */
function getSelectorsFromProps(props = {}) {
  const className = props.className || props.class;
  if (className) {
    return className
      .toString()
      .split(' ')
      .map(cn => `.${cn}`);
  }
  return [];
}

/**
 * @param nodes
 */
function getSelectors(nodes) {
  return nodes.reduce((selectors, node) => {
    const props = typeof node.props === 'function' ? node.props() : node.props;
    return [...selectors, getSelectorsFromProps(props)];
  }, []);
}

/**
 * @param c
 */
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * @param r
 * @param g
 * @param b
 */
function rgbToHex(r, g, b) {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

/**
 * @param classNames
 * @param cssStr
 */
function getComputedStyles(classNames, cssStr) {
  const dom = new JSDOM(
    `<!DOCTYPE html>
      <head><style>${cssStr}</style></head>
      <body><div class="${classNames}"></div>
      </body>`
  );
  const cs = dom.window.getComputedStyle(dom.window.document.body.children[0]);
  const values = {};
  for (const key of cs.length) {
    const value = cs
      .getPropertyValue(key)
      // eslint-disable-next-line radix
      .replace(/rgb\(([\d|,|\s]+)\)/g, (full, match) => rgbToHex(...match.split(',').map(n => parseInt(n, 10))));
    values[key] = value;
  }
  return values;
}

/**
 * @param bufferedStyles
 * @param globalCSS
 */
function getStylesAST(bufferedStyles, globalCSS = '') {
  const ast = css.parse(`${globalCSS}\n${bufferedStyles}`);
  const vars = {};
  const getVarValue = value => value.replace(/var\(([\w|-]*)\)/g, (full, match) => vars[match]);
  ast.stylesheet.rules = ast.stylesheet.rules.map(rule => {
    if (rule.type === 'rule') {
      rule.declarations = rule.declarations.map(decl => {
        if (decl.type === 'declaration') {
          const { property, value } = decl;
          if (property.startsWith('--')) {
            vars[property] = getVarValue(value);
          }
          decl.value = getVarValue(value);
        }
        return decl;
      });
    }
    return rule;
  });
  return ast;
}

/**
 * @param nodeSelectors
 * @param computedStyles
 */
function formatComputedStyles(nodeSelectors, computedStyles) {
  const selector = nodeSelectors.join('');
  const cssString = `${selector} {
    ${Object.keys(computedStyles)
      .map(k => `${k}: ${computedStyles[k]};`)
      .join('\n')}
  }`;
  return css.stringify(css.parse(cssString));
}

/**
 * @param nodeSelectors
 * @param insertedStyles
 * @param globalCSS
 */
function getStyles(nodeSelectors, insertedStyles, globalCSS) {
  if (!nodeSelectors.length) {
    return '';
  }
  const ast = getStylesAST(insertedStyles, globalCSS);
  return nodeSelectors
    .reduce((acc, sel) => {
      if (!sel.length) {
        return acc;
      }

      const re = new RegExp(`(${sel.join('|')})`, 'g');
      if (!re.test(insertedStyles)) {
        return acc;
      }

      const computedStyles = getComputedStyles(sel.map(s => s.replace('.', '')).join(' '), css.stringify(ast));

      return [...acc, formatComputedStyles(sel, computedStyles)];
    }, [])
    .join('\n');
}

export { getSelectors, getStyles };
