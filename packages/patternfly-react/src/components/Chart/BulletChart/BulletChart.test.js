import React from 'react';
import { shallow } from 'enzyme';

import { BulletChart } from '../index';
import { Tooltip } from '../../Tooltip/index';

const customTooltipFunction = (value, title) => <Tooltip id="bullet-tip-1">{`${title}: ${value}%`}</Tooltip>;

const customTooltipFunction2 = (value, title) => <Tooltip id="bullet-tip-2">{`${title} - ${value}%`}</Tooltip>;

const goodRanges = [
  { value: 50, title: 'Range 1', tooltipFunction: customTooltipFunction },
  { value: 70, title: 'Range 2', tooltipFunction: customTooltipFunction },
  { value: 100, title: 'Range 3', tooltipFunction: customTooltipFunction }
];

const invalidRanges = [
  { value: -50, title: 'Range 1', tooltipFunction: customTooltipFunction },
  { value: -70, title: 'Range 2', tooltipFunction: customTooltipFunction },
  { value: -100, title: 'Range 3', tooltipFunction: customTooltipFunction }
];

const unsortedRanges = [
  { value: 70, title: 'Range 1', tooltipFunction: customTooltipFunction },
  { value: 100, title: 'Range 2', tooltipFunction: customTooltipFunction },
  { value: 50, title: 'Range 3', tooltipFunction: customTooltipFunction }
];

const singleRange = [{ value: 50, title: 'Range 1' }];

const doubleRange = [
  { value: 50, title: 'Range 1', tooltipFunction: customTooltipFunction },
  { value: 100, title: 'Range 2', tooltipFunction: customTooltipFunction }
];

const titleLessRanges = [
  { value: 50, tooltipFunction: customTooltipFunction },
  { value: 70, tooltipFunction: customTooltipFunction },
  { value: 100, tooltipFunction: customTooltipFunction }
];

const values = [
  {
    value: 10,
    title: 'data1',
    tooltipFunction: customTooltipFunction
  },
  {
    value: 20,
    title: 'data2',
    tooltipId: 'data2-tooltip'
  }
];

const invalidValues = [
  {
    value: -10,
    title: 'data1',
    tooltipFunction: customTooltipFunction
  },
  {
    value: -20,
    title: 'data2',
    tooltipFunction: customTooltipFunction2
  }
];

const singleValue = [
  {
    value: 10,
    title: 'data1',
    tooltipFunction: customTooltipFunction
  }
];

test('BulletChart renders properly with defaults', () => {
  expect(shallow(<BulletChart id="bullet-all" values={values} />).getElement()).toMatchSnapshot();
});

test('BulletChart renders properly with all fields', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-all"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with a single value', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-single-value"
        label="Test Label"
        details="Test Details"
        values={singleValue}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly handling invalid data', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-invalid"
        label="Test Label"
        details="Test Details"
        values={invalidValues}
        thresholdError={110}
        thresholdWarning={-10}
        ranges={invalidRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with unsorted ranges', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-unsorted-ranges"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={unsortedRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with a single range', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-single-range"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={singleRange}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with two ranges', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-two-ranges"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={doubleRange}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with no thresholds', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-no-thresholds"
        label="Test Label"
        details="Test Details"
        values={values}
        ranges={goodRanges}
        range2={70}
        range3={90}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with only warning threshold', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-warning-treshold"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdWarning={20}
        ranges={goodRanges}
        tooltipFunction={customTooltipFunction}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with only error threshold', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-error-threshold"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={100}
        ranges={goodRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly with only value in the legend', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-one-legend"
        label="Test Label"
        details="Test Details"
        values={singleValue}
        thresholdWarning={20}
        thresholdError={100}
        showLegend
        ranges={titleLessRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders properly without axis', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-no-axis"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        showAxis={false}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders vertical chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-vertical"
        vertical
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders stacked chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-stacked"
        stacked
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders vertical stacked chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-vertical-stacked"
        vertical
        stacked
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders vertical dots chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-vertical"
        vertical
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        useDots
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders stacked dots chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-stacked"
        stacked
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        useDots
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders vertical stacked dots chart properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-vertical-stacked"
        vertical
        stacked
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        useDots
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders default colors properly', () => {
  const defaultColorValues = [
    {
      value: 10,
      title: 'data1',
      tooltipFunction: customTooltipFunction
    },
    {
      value: 20,
      title: 'data2',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 30,
      title: 'data3',
      tooltipId: 'data3-tooltip'
    },
    {
      value: 40,
      title: 'data4',
      tooltipId: 'data4-tooltip'
    }
  ];

  expect(
    shallow(
      <BulletChart
        id="bullet-default-colors"
        vertical
        label="Test Label"
        details="Test Details"
        values={defaultColorValues}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders extended colors properly', () => {
  const extendedColorValues = [
    {
      value: 10,
      title: 'data1',
      tooltipFunction: customTooltipFunction
    },
    {
      value: 10,
      title: 'data2',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data3',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data4',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data5',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data6',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data7',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data8',
      tooltipFunction: customTooltipFunction2
    },
    {
      value: 10,
      title: 'data9',
      tooltipFunction: customTooltipFunction2
    }
  ];

  expect(
    shallow(
      <BulletChart
        id="bullet-extended-colors"
        vertical
        stacked
        label="Test Label"
        details="Test Details"
        values={extendedColorValues}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders custom Axis properly', () => {
  const customAxis = (
    <BulletChart.Axis>
      <BulletChart.AxisTic value={33} text="One Third" />
      <BulletChart.AxisTic value={66} text="Two Thirds" />
    </BulletChart.Axis>
  );

  expect(
    shallow(
      <BulletChart
        id="bullet-custom-legend"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        customAxis={customAxis}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChart renders custom legend properly', () => {
  expect(
    shallow(
      <BulletChart
        id="bullet-custom-legend"
        label="Test Label"
        details="Test Details"
        values={values}
        thresholdError={10}
        thresholdWarning={20}
        ranges={goodRanges}
        showLegend
        customLegend={<div>Custom Legend</div>}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartTitle renders properly', () => {
  expect(
    shallow(
      <BulletChart.Title id="my-bullet-title" className="my-bullet-title" label="test label" details="test details" />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartThreshold renders properly', () => {
  expect(
    shallow(
      <BulletChart.Threshold id="my-bullet-threshold" className="my-bullet-threshold" threshold={40} />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Threshold
        id="my-bullet-threshold-vertical"
        className="my-bullet-threshold-vertical"
        threshold={60}
        vertical
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Threshold
        id="my-bullet-threshold-invalid-zero"
        className="my-bullet-threshold-invalid-zero"
        threshold={0}
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Threshold
        id="my-bullet-threshold-vertical-invalid-greater-than-100"
        className="my-bullet-threshold-vertical-invalid-greater-than-100"
        threshold={160}
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartValue renders properly', () => {
  expect(
    shallow(<BulletChart.Value id="my-bullet-value" className="my-bullet-value" value={values[0]} />).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Value
        id="my-bullet-value-stacked"
        className="my-bullet-value-stacked"
        value={values[1]}
        prevValue={10}
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Value
        id="my-bullet-value-vertical"
        className="my-bullet-value-vertical"
        value={values[0]}
        prevValue={10}
        vertical
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Value id="my-bullet-value-dot" className="my-bullet-value-dot" value={values[1]} dot />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Value
        id="my-bullet-value-stacked-dot"
        className="my-bullet-value-stacked-dot"
        value={values[1]}
        prevValue={10}
        dot
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Value
        id="my-bullet-value-vertical-dot"
        className="my-bullet-value-vertical-dot"
        value={values[0]}
        prevValue={10}
        vertical
        dot
      />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartRange renders properly', () => {
  expect(
    shallow(<BulletChart.Range id="my-bullet-range" className="my-bullet-range" value={20} index={1} />).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Range
        id="my-bullet-range-vertical"
        className="my-bullet-range-vertical"
        value={60}
        index={2}
        vertical
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Range id="my-bullet-range-negative" className="my-bullet-range-negative" value={-10} index={1} />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.Range id="my-bullet-range-invalid" className="my-bullet-range-invalid" value={160} index={1} />
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxis renders properly', () => {
  expect(
    shallow(
      <BulletChart.Axis id="my-bullet-axis" className="my-bullet-axis">
        <BulletChart.AxisTic value={0} />
        <BulletChart.AxisTic value={25} />
        <BulletChart.AxisTic value={50} />
        <BulletChart.AxisTic value={75} />
        <BulletChart.AxisTic value={100} />
      </BulletChart.Axis>
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxis renders vertical properly', () => {
  expect(
    shallow(
      <BulletChart.Axis id="my-bullet-vertical-axis" className="my-bullet-vertical-axis">
        <BulletChart.AxisTic value={0} vertical />
        <BulletChart.AxisTic value={25} vertical />
        <BulletChart.AxisTic value={50} vertical />
        <BulletChart.AxisTic value={75} vertical />
        <BulletChart.AxisTic value={1000} vertical />
      </BulletChart.Axis>
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxis renders properly with custom text', () => {
  expect(
    shallow(
      <BulletChart.Axis id="my-bullet-axis" className="my-bullet-axis">
        <BulletChart.AxisTic value={10} text="ten" />
        <BulletChart.AxisTic value={20} text="twenty" />
        <BulletChart.AxisTic value={30} text="thirty" />
        <BulletChart.AxisTic value={40} text="forty" />
        <BulletChart.AxisTic value={50} text="fifty" />
      </BulletChart.Axis>
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxisTic renders properly', () => {
  expect(
    shallow(<BulletChart.AxisTic id="my-bullet-axis-tic" className="my-bullet-axis-tic" value={25} />).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxisTic renders vertical properly', () => {
  expect(
    shallow(
      shallow(
        <BulletChart.AxisTic
          id="my-bullet-axis-tic-vertical"
          className="my-bullet-axis-tic-vertical"
          value={25}
          vertical
        />
      ).getElement()
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartAxisTic renders text properly', () => {
  expect(
    shallow(
      shallow(
        <BulletChart.AxisTic
          id="my-bullet-axis-tic-text"
          className="my-bullet-axis-tic-text"
          value={25}
          text="my-bullet-axis-tic-text"
        />
      ).getElement()
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartLegend renders properly', () => {
  expect(
    shallow(
      <BulletChart.Legend id="my-bullet-legend" className="my-bullet-legend">
        <BulletChart.LegendItem title={values[0].title} value={values[0].value} color={values[0].color} />
        <BulletChart.LegendItem title={values[1].title} value={values[1].value} color={values[1].color} />
      </BulletChart.Legend>
    ).getElement()
  ).toMatchSnapshot();
});

test('BulletChartLegendItem renders properly', () => {
  expect(
    shallow(
      <BulletChart.LegendItem
        id="my-bullet-legend-item"
        className="my-bullet-legend-item"
        title={values[0].title}
        value={values[0].value}
        color={values[0].color}
        tooltipId="my-bullet-legend-item-tooltip-id"
      />
    ).getElement()
  ).toMatchSnapshot();
  expect(
    shallow(
      <BulletChart.LegendItem
        id="my-bullet-legend-item"
        className="my-bullet-legend-item"
        title={values[0].title}
        value={values[0].value}
        color={values[0].color}
        tooltipFunction={customTooltipFunction}
      />
    ).getElement()
  ).toMatchSnapshot();
});
