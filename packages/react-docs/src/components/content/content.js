import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from './content.styles';

const propTypes = {
  children: PropTypes.node.isRequired
};

const Content = ({ children }) => <div className={css(styles.content)}>{children}</div>;

Content.propTypes = propTypes;

export default Content;
