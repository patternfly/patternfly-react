export const mockClosest = (map, resolveFunction, force = false) => {
  if (!Element.prototype.closest || force) {
    Element.prototype.closest = selector => (map && map[selector]) || (resolveFunction && resolveFunction(selector));
  }
};

export const makeTableId = ({ column: { property }, rowIndex, columnIndex, name }) =>
  `${property}-${rowIndex}-${columnIndex}${name ? `-${name}` : ''}`;
