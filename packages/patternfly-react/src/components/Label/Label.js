import React from 'react';
import { Label as BsLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RemoveButton from './RemoveButton';
import DisposableLabel from './DisposableLabel';
import CompoundLabel from './CompoundLabel';
import LabelWithTooltip from './LabelWithTooltip';

const Label = ({ children, onRemoveClick, type, ...props }) => (
  <BsLabel bsStyle={type} {...props}>
    {children}
    {!!onRemoveClick && <RemoveButton onRemoveClick={onRemoveClick} title="Remove" />}
  </BsLabel>
);

// WARNING: If you change propTypes you MUST also change DisposableLabel.propTypes
Label.propTypes = {
  ...BsLabel.propTypes,
  /** Children nodes */
  children: PropTypes.node,
  /** Label type */
  type: PropTypes.string,
  /** callback when Label is removed  */
  onRemoveClick: PropTypes.func
};

// WARNING: If you change defaultProps you MUST also change DisposableLabel.defaultProps
Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};

Label.RemoveButton = RemoveButton;
Label.DisposableLabel = DisposableLabel;
Label.CompoundLabel = CompoundLabel;
Label.WithTooltop = LabelWithTooltip;

export default Label;
