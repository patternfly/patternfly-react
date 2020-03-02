import React from 'react';
import C3Chart from 'react-c3js';
import { getComposer } from './ChartConstants';

const LineChart = getComposer('LINE_CHART')(({ className, type, data, ...props }) => (
  <C3Chart className={className} type={type} data={data} {...props} />
));

export default LineChart;
