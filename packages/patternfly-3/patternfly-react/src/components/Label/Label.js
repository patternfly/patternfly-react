import React from 'react';
import { Label as BsLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';

const Label = ({ children, onRemoveClick, type, ...props }) => (
  <BsLabel bsStyle={type} {...props}>
    {children}
    {!!onRemoveClick && <RemoveButton onRemoveClick={onRemoveClick} title="Remove" />}
  </BsLabel>
);

Label.propTypes = {
  ...BsLabel.propTypes,
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
};

Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};

export default Label;
