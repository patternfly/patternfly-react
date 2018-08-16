import camelcase from 'camel-case';
import { injectGlobal, caches as emotionCache } from 'emotion';

export function isValidStyleDeclaration(styleObj) {
  return Boolean(styleObj) && typeof styleObj.__className === 'string' && typeof styleObj.__inject === 'function';
}

export function createStyleDeclaration(className, rawCss) {
  return {
    __className: className.replace('.', '').trim(),
    __inject() {
      injectGlobal(rawCss);
    }
  };
}

export function isModifier(className) {
  return Boolean(className && className.startsWith) && className.startsWith('.pf-m-');
}

export function getModifier(styleObj, modifier, defaultModifier) {
  if (!styleObj) {
    return null;
  }

  const modifiers = styleObj.modifiers || styleObj;
  return modifiers[modifier] || modifiers[camelcase(modifier)] || defaultModifier;
}

export function formatClassName(className) {
  return camelcase(className.replace(/pf-((c|l|m|u|is|has)-)?/g, ''));
}

export function getCSSClasses(cssString) {
  return cssString.match(/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/g); //eslint-disable-line
}

export function getClassName(styleObj = {}) {
  if (typeof styleObj === 'string') {
    return styleObj;
  }

  return isValidStyleDeclaration(styleObj) ? styleObj.__className : '';
}

export function getInsertedStyles() {
  return Object.values(emotionCache.inserted);
}
