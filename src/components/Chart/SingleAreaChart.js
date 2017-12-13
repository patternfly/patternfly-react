import React from 'react';
import C3Chart from 'react-c3js';
import { getComposer } from './constants';

const SingleAreaChart = getComposer('SINGLE_AREA_CHART')(
  ({ className, type, data, ...props }) => (
    <C3Chart className={className} type={type} data={data} {...props} />
  ),
);

export default SingleAreaChart;
