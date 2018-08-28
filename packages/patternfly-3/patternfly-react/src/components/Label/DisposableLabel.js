import React from 'react';
import Label from './Label';
import { noop } from '../../common/helpers';

const DisposableLabel = props => <Label {...props} />;

DisposableLabel.propTypes = {
  ...Label.propTypes
};

DisposableLabel.defaultProps = {
  ...Label.defaultProps,
  onRemoveClick: noop
};

export default DisposableLabel;
