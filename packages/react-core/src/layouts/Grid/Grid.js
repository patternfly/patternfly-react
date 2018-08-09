import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Grid/styles.css';
import { css } from '@patternfly/react-styles';
import { GutterSize, getGutterModifier } from '../../styles/gutters';
import { getGridSpanModifier, gridSpans } from './gridUtils';
import { DeviceSizes } from '../../styles/sizes';

const gridItemSpanValueShape = PropTypes.oneOf(gridSpans);

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  span: gridItemSpanValueShape,
  sm: gridItemSpanValueShape,
  md: gridItemSpanValueShape,
  lg: gridItemSpanValueShape,
  xl: gridItemSpanValueShape
};

const defaultProps = {
  children: null,
  className: '',
  gutter: null,
  span: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

const Grid = ({ children, className, gutter, span, ...props }) => {
  const classes = [styles.grid, span && getGridSpanModifier(span)];

  Object.keys(DeviceSizes).forEach(size => {
    const popProp = (propKey, getModifierFn) => {
      const propValue = props[propKey];
      if (propValue) {
        classes.push(getModifierFn(propValue, size));
      }
      delete props[propKey];
    };

    popProp(size, getGridSpanModifier);
  });

  return (
    <div
      className={css(...classes, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)}
      {...props}
    >
      {children}
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
