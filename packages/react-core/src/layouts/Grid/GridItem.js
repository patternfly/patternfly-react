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

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  span: PropTypes.oneOf(gridSpans),
  rowSpan: PropTypes.oneOf(gridSpans),
  offset: PropTypes.oneOf(gridSpans),
  sm: PropTypes.oneOf(gridSpans),
  smRowSpan: PropTypes.oneOf(gridSpans),
  smOffset: PropTypes.oneOf(gridSpans),
  md: PropTypes.oneOf(gridSpans),
  mdRowSpan: PropTypes.oneOf(gridSpans),
  mdOffset: PropTypes.oneOf(gridSpans),
  lg: PropTypes.oneOf(gridSpans),
  lgRowSpan: PropTypes.oneOf(gridSpans),
  lgOffset: PropTypes.oneOf(gridSpans),
  xl: PropTypes.oneOf(gridSpans),
  xlRowSpan: PropTypes.oneOf(gridSpans),
  xlOffset: PropTypes.oneOf(gridSpans)
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
