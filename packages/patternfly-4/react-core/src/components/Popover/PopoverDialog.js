import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css, getModifier } from '@patternfly/react-styles';

export const PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};

const PopoverDialog = ({ position, children, className, ...props }) => (
  <div
    className={css(styles.popover, getModifier(styles, position, styles.modifiers.top), className)}
    role="dialog"
    aria-modal="true"
    {...props}
  >
    {children}
  </div>
);

PopoverDialog.propTypes = {
  /** PopoverDialog position */
  position: PropTypes.oneOf(Object.values(PopoverPosition)),
  /** PopoverDialog additional class */
  className: PropTypes.string,
  /** PopoverDialog body */
  children: PropTypes.node.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

PopoverDialog.defaultProps = {
  position: 'top',
  className: null
};

export default PopoverDialog;
