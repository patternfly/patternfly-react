import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import RemoveButton from './RemoveButton';
import { noop } from '../../common/helpers';

/**
 * Country page Component
 */
const DisposableLabel = ({ children, type, onRemoveClick, ...rest }) => (
  <Label bsStyle={type} {...rest}>
    {children}
    <RemoveButton onRemoveClick={onRemoveClick} title="Remove" />
  </Label>
);

DisposableLabel.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
};

DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: noop
};
/** sdd */
export default DisposableLabel;
