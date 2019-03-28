import React from 'react';

export default (id = 'simple-node') => {
  const headerCol = (value, { rowIndex } = {}) => {
    const result = typeof value === 'object' ? value.title : value;
    return {
      component: 'th',
      children: <div id={id + rowIndex}>{result}</div>
    };
  };

  return headerCol;
};
