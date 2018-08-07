import * as React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../Label';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';

const tooltip = text => <Tooltip id="tooltip">{text}</Tooltip>;

const LabelWithTooltip = ({
  onDeleteClick,
  category,
  value,
  truncate,
  bsStyle,
  className
}) => (
  <li key={value.id}>
    <OverlayTrigger placement="bottom" overlay={tooltip(value.label)}>
      <Label
        key={value.id}
        onRemoveClick={() => onDeleteClick(category, value)}
        bsStyle={bsStyle}
        className={`compound-label-inner-color-pf ${className}`}
      >
        {truncate(value.label)}
      </Label>
    </OverlayTrigger>
  </li>
);

LabelWithTooltip.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  value: PropTypes.PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  truncate: PropTypes.func.isRequired,
  className: PropTypes.string,
  bsStyle: PropTypes.string
};

LabelWithTooltip.defaultProps = {
  className: '',
  bsStyle: 'primary'
};
export default LabelWithTooltip;
