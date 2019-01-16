import React from 'react';

export default (id = 'simple-node') => {
  const headerCol = (value, { rowIndex } = {}) =>
    ({
      component: 'th',
      children: <div id={id + rowIndex}>{value.title || value}</div>
    });

  return headerCol;
}
