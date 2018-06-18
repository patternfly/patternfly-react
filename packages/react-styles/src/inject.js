import { StyleSheet } from 'aphrodite';

const injectionBuffer = new Set();
const injectedCSS = new Set();
let shouldInject = true;
let styleTag;

export const dataAttribute = 'data-patternfly';

export function rehydrate([renderedClassNames]) {
  StyleSheet.rehydrate(renderedClassNames);
}

export function preventInjection() {
  injectionBuffer.clear();
  shouldInject = false;
}

export function startInjection() {
  shouldInject = true;
}

export function getBufferedStyles() {
  return Array.from(injectionBuffer);
}

export function inject(cssStr) {
  if (injectionBuffer.has(cssStr)) {
    return;
  }

  injectionBuffer.add(cssStr);

  if (shouldInject) {
    injectStyleTag(cssStr);
  }
}

function injectStyleTag(cssRule) {
  if (injectedCSS.has(cssRule)) {
    return;
  }
  if (styleTag == null) {
    styleTag = document.querySelector(`style[${dataAttribute}]`);
    if (styleTag == null) {
      const head = document.head || document.getElementsByTagName('head')[0];
      styleTag = document.createElement('style');

      styleTag.type = 'text/css';
      styleTag.setAttribute(dataAttribute, '');
      head.appendChild(styleTag);
    }
  }

  styleTag.appendChild(document.createTextNode(cssRule));
  injectedCSS.add(cssRule);
}
