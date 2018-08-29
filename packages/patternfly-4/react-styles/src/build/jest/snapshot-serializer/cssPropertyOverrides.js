import { CSSStyleDeclaration } from 'cssstyle';
import camelcase from 'camel-case';

const properties = [
  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows'
];

function createOverride(key) {
  return {
    set(v) {
      this._setProperty(key, v);
    },
    get() {
      return this.getPropertyValue(key);
    },
    enumerable: true,
    configurable: true
  };
}

export function addOverrides() {
  const overrides = properties.reduce(
    (acc, property) => ({
      ...acc,
      [property]: createOverride(property),
      [camelcase(property)]: createOverride(property)
    }),
    {}
  );
  Object.defineProperties(CSSStyleDeclaration.prototype, overrides);
}
