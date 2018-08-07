import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Grid/styles.css';
import { css } from '@patternfly/react-styles';
import { DeviceSizes } from '../../styles/sizes';
import {
  getOffsetKey,
  getOffsetModifier,
  getRowSpanKey,
  getRowSpanModifier,
  getSpanModifier,
  gridSpans
} from './gridUtils';

const gridItemSpanValueShape = PropTypes.oneOf(gridSpans);

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  span: gridItemSpanValueShape,
  rowSpan: gridItemSpanValueShape,
  offset: gridItemSpanValueShape,
  sm: gridItemSpanValueShape,
  smRowSpan: gridItemSpanValueShape,
  smOffset: gridItemSpanValueShape,
  md: gridItemSpanValueShape,
  mdRowSpan: gridItemSpanValueShape,
  mdOffset: gridItemSpanValueShape,
  lg: gridItemSpanValueShape,
  lgRowSpan: gridItemSpanValueShape,
  lgOffset: gridItemSpanValueShape,
  xl: gridItemSpanValueShape,
  xlRowSpan: gridItemSpanValueShape,
  xlOffset: gridItemSpanValueShape
};

const defaultProps = {
  children: null,
  className: '',
  span: null,
  rowSpan: null,
  offset: null,
  sm: null,
  smRowSpan: null,
  smOffset: null,
  md: null,
  mdRowSpan: null,
  mdOffset: null,
  lg: null,
  lgRowSpan: null,
  lgOffset: null,
  xl: null,
  xlRowSpan: null,
  xlOffset: null
};

const GridItem = ({ children, className, span, rowSpan, offset, ...props }) => {
  const classes = [
    styles.gridItem,
    span && getSpanModifier(span),
    offset && getOffsetModifier(offset),
    rowSpan && getRowSpanModifier(rowSpan)
  ];

  Object.keys(DeviceSizes).forEach(size => {
    const popProp = (propKey, getModifierFn) => {
      const propValue = props[propKey];
      if (propValue) {
        classes.push(getModifierFn(propValue, size));
      }
      delete props[propKey];
    };

    popProp(size, getSpanModifier);
    popProp(getRowSpanKey(size), getRowSpanModifier);
    popProp(getOffsetKey(size), getOffsetModifier);
  });

  return (
    <div className={css(...classes, className)} {...props}>
      {children}
    </div>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

export default GridItem;
