import camelcase from 'camel-case';
import { inject } from './inject';

export function isValidStyleDeclaration(styleObj) {
  return styleObj && typeof styleObj.__className === 'string' && typeof styleObj.__inject === 'function';
}

export function createStyleDeclaration(className, rawCss) {
  return {
    __className: className.replace('.', '').trim(),
    __inject() {
      inject(rawCss);
    }
  };
}

export function isAphroditeDeclaration(styleObj) {
  return styleObj && styleObj._definition && styleObj._name && styleObj._len;
}

export function isModifier(className) {
  return className.startsWith('.pf-m-');
}

export function getModifier(styleObj, modifier, defaultModifier) {
  const modifiers = styleObj.modifiers || styleObj;
  return modifiers[modifier] || modifiers[camelcase(modifier)] || defaultModifier;
}

export function formatClassName(className) {
  return camelcase(className.replace(/pf-((c|l|m|u|is|has)-)?/g, ''));
}

export function getCSSClasses(cssString) {
  return cssString.match(/(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/g); //eslint-disable-line
}
