import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from '../../../index';

const DualListItemTooltip = ({ id, text, children }) => {
  const tooltip = <Tooltip id={id}>{text}</Tooltip>;
  return (
    <OverlayTrigger overlay={tooltip} placement="top" trigger={['hover', 'focus']} delayShow={150}>
      {children}
    </OverlayTrigger>
  );
};

DualListItemTooltip.propTypes = {
  /** unique tooltip ID */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** text to be shown on the tooltip */
  text: PropTypes.string,
  /** children nodes */
  children: PropTypes.node
};

DualListItemTooltip.defaultProps = {
  id: null,
  text: null,
  children: null
};

export default DualListItemTooltip;
