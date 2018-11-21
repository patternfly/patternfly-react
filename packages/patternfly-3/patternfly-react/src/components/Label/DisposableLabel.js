import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';
import { Label as BsLabel } from 'react-bootstrap';
import Label from './Label';

const DisposableLabel = props => <Label {...props} />;

// WARNING: This should be kept consistent with Label.propTypes
DisposableLabel.propTypes = {
  ...BsLabel.propTypes,
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
};

// WARNING: This should be kept consistent with Label.defaultProps
DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: noop
};

export default DisposableLabel;
