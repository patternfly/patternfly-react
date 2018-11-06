import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from '@patternfly/react-styles';
import { Title } from '../Title';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/LoginBox/login-box.css';
import { global_spacer_md, global_spacer_sm } from '@patternfly/react-tokens';
import displayStyles from '@patternfly/patternfly-next/utilities/Display/display.css';
import flexAlignment from '@patternfly/patternfly-next/utilities/Flex/flex.css';

const propTypes = {
  /** Content rendered inside the LoginBox Header */
  children: PropTypes.node,
  /** Additional classes added to the LoginBox Header */
  className: PropTypes.string,
  /** Dropdown component for the LoginBox Header */
  dropdown: PropTypes.node,
  /** Title for the LoginBox Header */
  title: PropTypes.string,
  /** Subtitle that contains the Text, URL, and URL Text for the LoginBox Header */
  subtitle: PropTypes.node
};

const defaultProps = {
  children: null,
  className: '',
  dropdown: null,
  title: '',
  subtitle: ''
};

const tokenStyles = StyleSheet.create({
  title: {
    marginBottom: global_spacer_sm.var
  },
  text: {
    marginLeft: global_spacer_md.var
  }
});

const LoginBoxHeader = ({ children, className, dropdown, title, subtitle, ...props }) => (
  <div className={css(styles.loginBoxHeader, className)} {...props}>
    <Title className={css(tokenStyles.title)} size="3xl">
      {title}
    </Title>
    <div className={css(displayStyles.displayInlineFlex, flexAlignment.alignItemsCenter)}>
      {dropdown}
      {subtitle && <p className={css(tokenStyles.text)}>{subtitle}</p>}
    </div>

    {children}
  </div>
);

LoginBoxHeader.propTypes = propTypes;
LoginBoxHeader.defaultProps = defaultProps;

export default LoginBoxHeader;
