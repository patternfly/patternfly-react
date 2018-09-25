import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Grid/grid.css';
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
  /** content rendered inside the Grid Layout Item */
  children: PropTypes.any,
  /** additional classes added to the Grid Layout Item */
  className: PropTypes.string,
  /** the number of columns the grid item spans. Value should be a number 1-12   */
  span: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans. Value should be a number 1-12   */
  rowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns a grid item is offset */
  offset: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
  sm: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  smRowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
  smOffset: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
  md: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
  mdRowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
  mdOffset: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
  lg: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  lgRowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
  lgOffset: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
  xl: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
  xlRowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
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
