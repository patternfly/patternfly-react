import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { patternfly } from '../../../common/patternfly';
import { Tooltip } from '../../Tooltip/index';
import { noop } from '../../../common/helpers';

import BulletChartValue from './BulletChartValue';
import BulletChartRange from './BulletChartRange';
import BulletChartAxis from './BulletChartAxis';
import BulletChartAxisTic from './BulletChartAxisTic';
import BulletChartLegend from './BulletChartLegend';
import BulletChartLegendItem from './BulletChartLegendItem';
import BulletChartThreshold from './BulletChartThreshold';
import BulletChartTitle from './BulletChartTitle';

const randomId = () => Date.now();

const defaultPrimaryColors = [
  patternfly.pfPaletteColors.blue300,
  patternfly.pfPaletteColors.blue400,
  patternfly.pfPaletteColors.blue500,
  patternfly.pfPaletteColors.blue600
];

const defaultExtendedColors = [
  patternfly.pfPaletteColors.blue400,
  patternfly.pfPaletteColors.lightBlue400,
  patternfly.pfPaletteColors.cyan400,
  patternfly.pfPaletteColors.green400,
  patternfly.pfPaletteColors.lightGreen400,
  patternfly.pfPaletteColors.gold400,
  patternfly.pfPaletteColors.orange400,
  patternfly.pfPaletteColors.red300,
  patternfly.pfPaletteColors.purple400
];

const BulletChart = ({
  vertical,
  stacked,
  label,
  details,
  values,
  percents,
  maxValue,
  useDots,
  useExtendedColors,
  thresholdWarning,
  thresholdWarningLegendText,
  thresholdWarningLegendTextFunction,
  thresholdWarningTooltipFunction,
  thresholdError,
  thresholdErrorLegendText,
  thresholdErrorLegendTextFunction,
  thresholdErrorTooltipFunction,
  ranges,
  showAxis,
  customAxis,
  showLegend,
  customLegend,
  className
}) => {
  const classes = classNames('bullet-chart-pf', { 'bullet-chart-pf-vertical': vertical }, className);

  // Order the ranges into an array of 3 ranges lowest to highest, insert 0's if necessary
  // this is to keep darkest as highest and use darkest colors first (ie. 1 range still uses darkest)
  const rangeValues = [];
  if (ranges) {
    for (let i = 0; i < 3; i++) {
      if (ranges.length > i) {
        rangeValues.push(ranges[i]);
      } else {
        rangeValues.push({ value: 0, title: '' });
      }
    }
    rangeValues.sort((range1, range2) => range1.value - range2.value);
  }

  const displayValues = [...values];

  const defaultColors = useExtendedColors ? defaultExtendedColors : defaultPrimaryColors;
  displayValues.forEach((value, index) => {
    if (!value.color && defaultColors[index]) {
      value.color = defaultColors[index];
    }
  });

  if (!stacked) {
    displayValues.sort((value1, value2) => value1.value - value2.value);
  }

  const renderValues = () => {
    let prevValue = 0;

    const getPrevValue = nextValue => {
      if (stacked) {
        const retVal = prevValue;
        prevValue += nextValue;

        return retVal;
      }
      return 0;
    };

    return (
      <div className="bullet-chart-pf-values-container">
        {displayValues.map((value, index) => (
          <BulletChartValue
            key={`${value.title}-${index}`}
            value={value}
            percent={percents}
            maxValue={maxValue}
            prevValue={getPrevValue(value.value)}
            dot={useDots}
            vertical={vertical}
          />
        ))}
      </div>
    );
  };

  const renderLegend = () => {
    if (showLegend) {
      if (customLegend) {
        return customLegend;
      }

      const warningThreshold = thresholdWarningLegendTextFunction(thresholdWarning) || thresholdWarningLegendText;
      const errorThreshold = thresholdErrorLegendTextFunction(thresholdError) || thresholdErrorLegendText;
      const thresholdTipFunction = (title, value) => {
        if (thresholdWarningTooltipFunction) {
          return thresholdWarningTooltipFunction(title, value);
        }
        const tipText = `${title}: ${value}${percents ? '%' : ''}`;
        return <Tooltip id={randomId()}>{tipText}</Tooltip>;
      };

      return (
        <BulletChartLegend>
          {displayValues.map((value, index) => {
            const tooltipFunction = () => {
              if (value.tooltipFunction) {
                return value.tooltipFunction(value.value, value.title);
              }

              const tipText = `${value.title}: ${value.value}${percents ? '%' : ''}`;
              return <Tooltip id={value.tooltipId || randomId()}>{tipText}</Tooltip>;
            };

            const legendTextFunction = value.legendTextFunction || noop;
            return (
              <BulletChartLegendItem
                key={`value-${index}`}
                title={legendTextFunction(value) || value.legendText || value.title}
                value={value.value}
                color={value.color}
                tooltipFunction={tooltipFunction}
              />
            );
          })}
          {rangeValues.map((range, index) => {
            if (range.value > 0 && (percents ? range.value <= 100 : range.value <= maxValue)) {
              const tooltipFunction = () => {
                if (range.tooltipFunction) {
                  return range.tooltipFunction(range.value, range.title);
                }

                const tipText = `${range.title}: ${range.value}${percents ? '%' : ''}`;
                return <Tooltip id={range.tooltipId || randomId()}>{tipText}</Tooltip>;
              };

              const legendTextFunction = range.legendTextFunction || noop;

              return (
                <BulletChartLegendItem
                  key={`range-${index}`}
                  title={legendTextFunction(range) || range.legendText || range.title}
                  value={range.value}
                  boxClassName={`range-${index}`}
                  color={range.color}
                  tooltipFunction={tooltipFunction}
                />
              );
            }

            return null;
          })}
          {warningThreshold && (
            <BulletChartLegendItem
              title={warningThreshold}
              value={thresholdWarning}
              boxClassName="warning"
              tooltipFunction={thresholdTipFunction}
            />
          )}
          {errorThreshold && (
            <BulletChartLegendItem
              title={errorThreshold}
              value={thresholdError}
              boxClassName="error"
              tooltipFunction={thresholdTipFunction}
            />
          )}
        </BulletChartLegend>
      );
    }

    return null;
  };

  const renderChartData = () => (
    <div className="bullet-chart-pf-data-container">
      {renderValues()}
      <BulletChartThreshold
        className="warning"
        threshold={thresholdWarning}
        vertical={vertical}
        percent={percents}
        maxValue={maxValue}
      />
      <BulletChartThreshold
        className="error"
        threshold={thresholdError}
        vertical={vertical}
        percent={percents}
        maxValue={maxValue}
      />
      {rangeValues.map((range, index) => (
        <BulletChartRange
          key={`${range.value}-${index}`}
          value={range.value}
          color={range.color}
          percent={percents}
          maxValue={maxValue}
          index={index + 1}
          vertical={vertical}
        />
      ))}
    </div>
  );

  const renderChartAxis = () => {
    if (customAxis) {
      return customAxis;
    }

    return (
      <BulletChartAxis>
        <BulletChartAxisTic value={0} vertical={vertical} />
        <BulletChartAxisTic
          value={25}
          text={percents ? undefined : `${Math.floor(maxValue * 0.25)}`}
          vertical={vertical}
        />
        <BulletChartAxisTic
          value={50}
          text={percents ? undefined : `${Math.floor(maxValue * 0.5)}`}
          vertical={vertical}
        />
        <BulletChartAxisTic
          value={75}
          text={percents ? undefined : `${Math.floor(maxValue * 0.75)}`}
          vertical={vertical}
        />
        <BulletChartAxisTic value={100} text={percents ? undefined : `${Math.floor(maxValue)}`} vertical={vertical} />
      </BulletChartAxis>
    );
  };

  const renderChartContainer = () => {
    const containerClasses = classNames('bullet-chart-pf-container', {
      'show-axis': showAxis
    });
    const chartContainer = (
      <div className={containerClasses}>
        {renderChartData()}
        {showAxis && renderChartAxis()}
      </div>
    );

    if (vertical) {
      return <div className="bullet-chart-pf-vertical-data-container">{chartContainer}</div>;
    }

    return chartContainer;
  };

  return (
    <div className={classes}>
      <div className="bullet-chart-pf-chart">
        <BulletChartTitle label={label} details={details} />
        {renderChartContainer()}
        <span className="bullet-chart-pf-overflow" />
      </div>
      {renderLegend()}
    </div>
  );
};

BulletChart.propTypes = {
  /** Option to display the bullet chart vertically, default is false */
  vertical: PropTypes.bool,
  /** Option to stack values (each value is in addition to previous value), default is false */
  stacked: PropTypes.bool,
  /** Text to display as the main label for the chart */
  label: PropTypes.string,
  /** Text to display for details of the chart */
  details: PropTypes.string,
  /** Array of values, value, title (for legend and tooltip), color, tooltip function(value, title), legendText(optional),
   * legendTextFunction(value). The legendTextFunction takes priority, then the legendTextFunction, then the default
   * legend text.
   * For Primary colors the first four values can use default colors, for Extended colors the first nine
   * values use default colors, further values the color MUST be specified. */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      title: PropTypes.string,
      color: PropTypes.string,
      tooltipFunction: PropTypes.func,
      legendText: PropTypes.string,
      legendTextFunction: PropTypes.func
    })
  ).isRequired,
  /** Option to use values as percentages, default is true */
  percents: PropTypes.bool,
  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,
  /** Use a dot rather than a bar to depict values, default false */
  useDots: PropTypes.bool,
  /** Use extended color palette for default colors, default false */
  useExtendedColors: PropTypes.bool,
  /** Warning threshold (optional), warning measure line drawn at this point */
  thresholdWarning: PropTypes.number,
  /** Warning threshold legend text (optional), text to show in the legend for the warning threshold */
  thresholdWarningLegendText: PropTypes.string,
  /** Warning threshold legend text function(warningValue), function to return text to show in the legend for the warning threshold */
  thresholdWarningLegendTextFunction: PropTypes.func,
  /** Warning threshold legend tooltip function(text, value), function to return tooltip for the legend */
  thresholdWarningTooltipFunction: PropTypes.func,
  /** Error threshold (optional), error measure line drawn at this point */
  thresholdError: PropTypes.number,
  /** Error threshold legend text (optional), text to show in the legend for the warning threshold */
  thresholdErrorLegendText: PropTypes.string,
  /** Error threshold legend text function(text, value), function to return text to show in the legend for the warning threshold */
  thresholdErrorLegendTextFunction: PropTypes.func,
  /** Error threshold legend tooltip function(warningValue), function to return tooltip for the legend */
  thresholdErrorTooltipFunction: PropTypes.func,
  /** Ranges, array of range bars (3 maximum, additional ranges will be ignored) */
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      title: PropTypes.string,
      color: PropTypes.string,
      tooltipFunction: PropTypes.func,
      legendText: PropTypes.string,
      legendTextFunction: PropTypes.func
    })
  ),
  /** Option to show the axis, default is true */
  showAxis: PropTypes.bool,
  /** Custom Axis */
  customAxis: PropTypes.node,
  /** Show the legend, default false */
  showLegend: PropTypes.bool,
  /** Custom Legend */
  customLegend: PropTypes.node,
  /** User's custom classes */
  className: PropTypes.string
};

BulletChart.defaultProps = {
  vertical: false,
  stacked: false,
  label: null,
  details: null,
  percents: true,
  maxValue: 100,
  useDots: false,
  useExtendedColors: false,
  thresholdWarning: 70,
  thresholdWarningLegendText: null,
  thresholdWarningLegendTextFunction: noop,
  thresholdWarningTooltipFunction: null,
  thresholdError: 90,
  thresholdErrorLegendText: null,
  thresholdErrorLegendTextFunction: noop,
  thresholdErrorTooltipFunction: null,
  ranges: null,
  showAxis: true,
  customAxis: null,
  showLegend: false,
  customLegend: null,
  className: null
};

BulletChart.DEFAULT_PRIMARY_COLORS = defaultPrimaryColors;
BulletChart.DEFAULT_EXTENDED_COLORS = defaultExtendedColors;

BulletChart.Title = BulletChartTitle;
BulletChart.Value = BulletChartValue;
BulletChart.Range = BulletChartRange;
BulletChart.Axis = BulletChartAxis;
BulletChart.AxisTic = BulletChartAxisTic;
BulletChart.Legend = BulletChartLegend;
BulletChart.LegendItem = BulletChartLegendItem;
BulletChart.Threshold = BulletChartThreshold;

export default BulletChart;
