import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Level/level';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

const propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  /** additional classes added to the Level layout */
  className: PropTypes.string,
  /** content rendered inside the Level layout */
  children: PropTypes.node,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
