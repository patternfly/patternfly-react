import React from 'react';
import C3Chart from 'react-c3js';
import { getComposer } from './ChartConstants';

const GroupedBarChart = getComposer('GROUPED_BAR_CHART')(({ className, type, data, ...props }) => (
  <C3Chart className={className} type={type} data={data} {...props} />
));

export default GroupedBarChart;
