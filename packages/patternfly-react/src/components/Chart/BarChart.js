import React from 'react';
import C3Chart from 'react-c3js';
import { compose, mapProps } from 'recompose';
import { getComposer } from './ChartConstants';
import { c3ChartDefaults } from '../../common/patternfly';

const mapBarChartProps = props => {
  const newProps = Object.assign({}, props);

  // Set Bar Chart tooltip
  if (props.categories) {
    newProps.tooltip = c3ChartDefaults.getDefaultBarTooltip(props.categories);
  }

  return newProps;
};

const BarChart = compose(
  getComposer('BAR_CHART'),
  mapProps(mapBarChartProps)
)(({ className, type, data, ...props }) => <C3Chart className={className} type={type} data={data} {...props} />);

export default BarChart;
