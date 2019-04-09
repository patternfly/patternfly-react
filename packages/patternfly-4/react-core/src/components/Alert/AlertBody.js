import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Alert/alert.css';
import { TimesIcon } from '@patternfly/react-icons';
import { Button, ButtonVariant } from '../Button';

const propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  'aria-label': PropTypes.string
};

const defaultProps = {
  title: null,
  children: '',
  className: '',
  onClose: undefined,
  'aria-label': 'Close'
};

const AlertBody = ({ title, className, children, onClose, 'aria-label': ariaLabel, ...props }) => (
  <div {...props} className={className}>
    {onClose && (
      <Button variant={ButtonVariant.plain} onClick={onClose} aria-label={ariaLabel}>
        <TimesIcon />
      </Button>
    )}
    {title && <h4 className={css(styles.alertTitle)}>{title}</h4>}
    {children && <p>{children}</p>}
  </div>
);

AlertBody.propTypes = propTypes;
AlertBody.defaultProps = defaultProps;

export default AlertBody;
