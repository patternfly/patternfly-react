import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Level/styles.css';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

const propTypes = {
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  className: PropTypes.string,
  children: PropTypes.node
};
const defaultProps = {
  gutter: null,
  className: '',
  children: null
};

const Level = ({ gutter, className, children, ...props }) => (
  <div
    {...props}
    className={css(styles.level, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)}
  >
    {children}
  </div>
);
Level.propTypes = propTypes;
Level.defaultProps = defaultProps;
export default Level;
