import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';
import spacing from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import displayStyles from '@patternfly/patternfly-next/utilities/Display/display.css';
import flexAlignment from '@patternfly/patternfly-next/utilities/Flex/flex.css';

const propTypes = {
  /** Content rendered inside the LoginBox Header */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox Header */
  className: PropTypes.string,
  /** Dropdown component for the LoginBox Header */
  dropdown: PropTypes.node.isRequired,
  /** Title for the LoginBox Header */
  title: PropTypes.string.isRequired,
  /** Subtitle that contains the Text, URL, and URL Text for the LoginBox Header */
  subtitle: PropTypes.node.isRequired
};

const defaultProps = {
  children: null,
  className: ''
};

const LoginBoxHeader = ({ children, className, dropdown, title, subtitle, ...props }) => (
  <div className={css(styles.loginBoxHeader, className)} {...props}>
    <Title className={css(spacing.mbSm)} size="3xl">
      {title}
    </Title>
    <div className={css(displayStyles.displayInlineFlex, flexAlignment.alignItemsCenter)}>
      {dropdown}
      <p className={css(spacing.mlMd)}>{subtitle}</p>
    </div>

    {children}
  </div>
);

LoginBoxHeader.propTypes = propTypes;
LoginBoxHeader.defaultProps = defaultProps;

export default LoginBoxHeader;
