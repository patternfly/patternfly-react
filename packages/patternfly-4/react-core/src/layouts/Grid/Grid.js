import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
import { css } from '@patternfly/react-styles';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { getGridSpanModifier, gridSpans } from './gridUtils';
import { DeviceSizes } from '../../styles/sizes';

const gridItemSpanValueShape = PropTypes.oneOf(gridSpans);

const propTypes = {
  /** content rendered inside the Grid layout */
  children: PropTypes.any,
  /** additional classes added to the Grid layout */
  className: PropTypes.string,
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span: gridItemSpanValueShape,
  /** the number of columns all grid items should span on a small device */
  sm: gridItemSpanValueShape,
  /** the number of columns all grid items should span on a medium device */
  md: gridItemSpanValueShape,
  /** the number of columns all grid items should span on a large device */
  lg: gridItemSpanValueShape,
  /** the number of columns all grid items should span on a xLarge device */
  xl: gridItemSpanValueShape,
  /** the number of columns all grid items should span on a 2xLarge device */
  xl2: gridItemSpanValueShape,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  gutter: null,
  span: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xl2: null
};

const Grid = ({ children, className, gutter, span, ...props }) => {
  const classes = [styles.grid, span && getGridSpanModifier(span)];

  Object.entries(DeviceSizes).forEach(([propKey, gridSpanModifier]) => {
    const propValue = props[propKey];
    if (propValue) {
      classes.push(getGridSpanModifier(propValue, gridSpanModifier));
    }
    delete props[propKey];
  });

  return (
    <div
      className={css(
        ...classes,
        gutter && getGutterModifier(styles, gutter, styles.modifiers && styles.modifiers.gutter),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
