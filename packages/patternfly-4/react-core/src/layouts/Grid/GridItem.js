import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/layouts/Grid/grid';
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
  xlOffset: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2: PropTypes.oneOf(gridSpans),
  /** the number of rows the grid item spans on 2xLarge device. Value should be a number 1-12   */
  xl2RowSpan: PropTypes.oneOf(gridSpans),
  /** the number of columns the grid item is offset on 2xLarge device. Value should be a number 1-12   */
  xl2Offset: PropTypes.oneOf(gridSpans),
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
  xlOffset: null,
  xl2: null,
  xl2RowSpan: null,
  xl2Offset: null
};

const GridItem = ({ children, className, span, rowSpan, offset, ...props }) => {
  const classes = [
    styles.gridItem,
    span && getSpanModifier(span),
    offset && getOffsetModifier(offset),
    rowSpan && getRowSpanModifier(rowSpan)
  ];

  Object.entries(DeviceSizes).forEach(([propKey, classModifier]) => {
    const spanValue = props[propKey];
    const rowSpanValue = props[getRowSpanKey(propKey)];
    const offsetValue = props[getOffsetKey(propKey)];

    if (spanValue) {
      classes.push(getSpanModifier(spanValue, classModifier));
    }
    if (rowSpanValue) {
      classes.push(getRowSpanModifier(rowSpanValue, classModifier));
    }
    if (offsetValue) {
      classes.push(getOffsetModifier(offsetValue, classModifier));
    }

    delete props[propKey];
    delete props[getRowSpanKey(propKey)];
    delete props[getOffsetKey(propKey)];
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
