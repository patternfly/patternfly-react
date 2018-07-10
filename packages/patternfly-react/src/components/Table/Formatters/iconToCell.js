import React from 'react';

export default (value, { rowData }) => (
  <React.Fragment>
    {rowData.iconClass && <i className={`item-icon ${rowData.iconClass}`} />}
    {value}
  </React.Fragment>
);
