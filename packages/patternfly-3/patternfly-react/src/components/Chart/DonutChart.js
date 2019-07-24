import React from 'react';
import C3Chart from 'react-c3js';
import { findDOMNode } from 'react-dom';
import { lifecycle, compose } from 'recompose';

import { patternfly } from '../../common/patternfly';
import { getComposer } from './ChartConstants';

const { pfSetDonutChartTitle } = patternfly;
const colIndexOfMaxValue = columns => columns.reduce((iMax, x, i, arr) => (x[1] > arr[iMax][1] ? i : iMax), 0);

const truncateNum = (num, precision) => {
  const pointNotation = num.toString().split('.');
  if (pointNotation.length === 1) return pointNotation[0];
  return `${pointNotation[0]}.${pointNotation[1].slice(0, precision)}`;
};

const setDonutTitle = obj => {
  let primary;
  let secondary;

  const { props } = obj;
  const { data, title = {} } = props;
  const { type, precision = 0 } = title;
  const { columns } = data;
  const sum = columns.reduce((acc, x) => acc + x[1], 0);
  const iMax = colIndexOfMaxValue(columns);
  const percentage = (100 * columns[iMax][1]) / sum;

  switch (type) {
    case 'percent':
      primary = precision ? `${truncateNum(percentage, precision)}%` : `${Math.round(percentage)}%`;
      break;
    case 'max':
      primary = Math.round(columns[iMax][1]).toString();
      [secondary] = columns[iMax];
      break;
    case 'total':
    default:
      primary = Math.round(sum).toString();
      break;
  }

  pfSetDonutChartTitle(
    // eslint-disable-next-line react/no-find-dom-node
    findDOMNode(obj),
    title.primary || primary,
    title.secondary || secondary
  );
};

const addDonutTitle = lifecycle({
  componentDidMount() {
    setDonutTitle(this);
  },
  componentDidUpdate(prevProps) {
    setDonutTitle(this);
  }
});

const DonutChart = compose(
  getComposer('DONUT_CHART'),
  addDonutTitle
)(({ className, type, data, ...props }) => <C3Chart className={className} type={type} data={data} {...props} />);

export default DonutChart;
