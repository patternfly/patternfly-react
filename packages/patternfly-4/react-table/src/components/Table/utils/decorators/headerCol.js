import React from 'react';

export default (id = 'simple-node') => {
  const headerCol = (value, { rowIndex } = {}) =>
    ({
      component: 'th',
      children: <span id={id + rowIndex}>{value.title || value}</span>
    });

  return headerCol;
}
