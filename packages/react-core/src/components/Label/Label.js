import React from 'react';
import { Label as BsLabel } from 'react-bootstrap';
import DisposableLabel from './DisposableLabel';

const Label = props => {
  if (props.onRemoveClick) {
    return <DisposableLabel {...props} />;
  }
  return <BsLabel {...props} />;
};

Label.propTypes = {
  ...BsLabel.propTypes,
  ...DisposableLabel.propTypes
};

export default Label;
