import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Grid/styles.css';
import { css } from '@patternfly/react-styles';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  gutter: PropTypes.oneOf(Object.keys(GutterSize))
};

const defaultProps = {
  children: null,
  className: '',
  gutter: null
};

const Grid = ({ children, className, gutter, ...props }) => (
  <div
    className={css(
      styles.grid,
      gutter && getGutterModifier(styles, gutter, styles.modifiers.gutters),
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
