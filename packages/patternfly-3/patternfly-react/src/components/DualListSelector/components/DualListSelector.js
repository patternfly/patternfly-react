import React from 'react';
import DualListHeading from './DualListHeading';
import DualListBody from './DualListBody';
import DualListFooter from './DualListFooter';

const DualListSelector = props => (
  <div className="dual-list-pf-selector">
    <DualListHeading {...props} />
    <DualListBody {...props} />
    <DualListFooter {...props} />
  </div>
);

export default DualListSelector;
