import React from 'react';
import C3Chart from 'react-c3js';
import { findDOMNode } from 'react-dom';
import { lifecycle, compose } from 'recompose';

import { patternfly } from '../../common/patternfly';
import { getComposer } from './ChartConstants';

const { pfSetDonutChartTitle } = patternfly;
const colIndexOfMaxValue = columns => columns.reduce((iMax, x, i, arr) => (x[1] > arr[iMax][1] ? i : iMax), 0);

const setDonutTitle = obj => {
  let primary;
  let secondary;

  const { props } = obj;
  const { data, title = {} } = props;
  const { columns } = data;
  const sum = columns.reduce((acc, x) => acc + x[1], 0);
  const iMax = colIndexOfMaxValue(columns);

  switch (title.type) {
    case 'percent':
      primary = `${Math.round((100 * columns[iMax][1]) / sum).toString()}%`;
      [secondary] = columns[iMax];
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
