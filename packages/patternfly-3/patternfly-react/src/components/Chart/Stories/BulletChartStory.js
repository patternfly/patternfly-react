import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from 'storybook/constants/siteConstants';
import { patternfly } from '../../../common/patternfly';

import { BulletChart } from '../index';

/**
 * BarChart constants
 */

/**
 * BulletChart stories
 */

const bulletChart = stories => {
  stories.addDecorator(withKnobs);
  stories.add(
    'Bullet Charts',
    withInfo({
      propTables: [
        BulletChart,
        BulletChart.Title,
        BulletChart.Value,
        BulletChart.Axis,
        BulletChart.AxisTic,
        BulletChart.Legend,
        BulletChart.LegendItem,
        BulletChart.Range,
        BulletChart.Threshold
      ]
    })(() => {
      const colorOptions = {};
      colorOptions[patternfly.pfPaletteColors.blue] = 'Blue';
      colorOptions[patternfly.pfPaletteColors.green] = 'Green';
      colorOptions[patternfly.pfPaletteColors.gold] = 'Gold';
      colorOptions[patternfly.pfPaletteColors.red] = 'Red';
      colorOptions[patternfly.pfPaletteColors.orange] = 'Orange';

      const vertical = boolean('Vertical', false, 'Value');

      const stacked = boolean('Stacked', false, 'Value');
      const usePercent = boolean('Percentage', true, 'Value');
      let maxValue;
      if (!usePercent) {
        maxValue = number(
          'Maximum',
          150,
          {
            range: true,
            min: 100,
            max: 500,
            step: 50
          },
          'Value'
        );
      }

      const legendTextFunction = value => `${value.title} - ${value.value}${usePercent ? '%' : ' hours'}`;
      const rangeTextFunction = range => `${range.title} - ${range.value}${usePercent ? '%' : ' hours'}`;
      const useColors = select(
        'Use Colors',
        {
          Primary: 'Primary',
          Extended: 'Extended',
          Custom: 'Custom'
        },
        'Primary',
        'Value'
      );

      const value = number(
        'Value',
        35,
        {
          range: true,
          min: 0,
          max: maxValue ? maxValue * 1.2 : 120,
          step: 1
        },
        'Value'
      );
      const valueTitle = text('Value Title', 'Data1', 'Legend');
      const valueColor = select('Value Color', colorOptions, patternfly.pfPaletteColors.blue, 'Value');
      const valueLegendText = text('Value Legend Text', '', 'Legend');

      const showValue2 = boolean('Show Value 2', true, 'Value');
      const value2 = number(
        'Value2',
        75,
        {
          range: true,
          min: 0,
          max: maxValue ? maxValue * 1.2 : 120,
          step: 1
        },
        'Value'
      );
      const valueTitle2 = text('Value 2 Title', 'Data2', 'Legend');
      const valueColor2 = select('Value Color 2', colorOptions, patternfly.pfPaletteColors.green, 'Value');
      const valueLegendText2 = text('Value 2 Legend Text', '', 'Legend');

      const showValue3 = boolean('Show Value 3', false, 'Value');
      const value3 = number(
        'Value3',
        25,
        {
          range: true,
          min: 0,
          max: maxValue ? maxValue * 1.2 : 120,
          step: 1
        },
        'Value'
      );
      const valueTitle3 = text('Value 3 Title', 'Data3', 'Legend');
      const valueColor3 = select('Value Color 3', colorOptions, patternfly.pfPaletteColors.gold, 'Value');
      const valueLegendText3 = text('Value 3 Legend Text', '', 'Legend');

      const showValue4 = boolean('Show Value 4', false, 'Value');
      const value4 = number(
        'Value4',
        25,
        {
          range: true,
          min: 0,
          max: maxValue ? maxValue * 1.2 : 120,
          step: 1
        },
        'Value'
      );
      const valueTitle4 = text('Value 4 Title', 'Data4', 'Legend');
      const valueColor4 = select('Value Color 4', colorOptions, patternfly.pfPaletteColors.red, 'Value');
      const valueLegendText4 = text('Value 4 Legend Text', '', 'Legend');

      const showValue5 = boolean('Show Value 5', false, 'Value');
      const value5 = number(
        'Value5',
        25,
        {
          range: true,
          min: 0,
          max: maxValue ? maxValue * 1.2 : 120,
          step: 1
        },
        'Value'
      );
      const valueTitle5 = text('Value 5 Title', 'Data5', 'Legend');
      const valueColor5 = select('Value Color 5', colorOptions, patternfly.pfPaletteColors.orange, 'Value');
      const valueLegendText5 = text('Value 5 Legend Text', '', 'Legend');

      const useDots = boolean('Use Dots', false, 'Value');

      const showWarnThreshold = boolean('Show Warning Threshold', true, 'Thresholds');
      const thresholdWarning = number(
        'Warning Threshold',
        70,
        {
          range: true,
          min: 0,
          max: 100,
          step: 1
        },
        'Thresholds'
      );
      const thresholdWarningText = text('Warning Threshold Text', '', 'Legend');

      const showErrorThreshold = boolean('Show Error Threshold', true, 'Thresholds');
      const thresholdError = number(
        'Error Threshold',
        90,
        {
          range: true,
          min: 0,
          max: 100,
          step: 1
        },
        'Thresholds'
      );
      const thresholdErrorText = text('Error Threshold Text', '', 'Legend');

      const showRange1 = boolean('Show Range 1', true, 'Ranges');
      const range1 = number(
        'Range 1',
        50,
        {
          range: true,
          min: 0,
          max: maxValue || 100,
          step: 1
        },
        'Ranges'
      );
      const range1Title = text('Range 1 Title', 'Range 1', 'Legend');
      const range1Legend = text('Range 1 Legend', '', 'Legend');

      const showRange2 = boolean('Show Range 2', true, 'Ranges');
      const range2 = number(
        'Range 2',
        75,
        {
          range: true,
          min: 0,
          max: maxValue || 100,
          step: 1
        },
        'Ranges'
      );
      const range2Title = text('Range 2 Title', 'Range 2', 'Legend');
      const range2Legend = text('Range 2 Legend', '', 'Legend');

      const showRange3 = boolean('Show Range 3', true, 'Ranges');
      const range3 = number(
        'Range 3',
        100,
        {
          range: true,
          min: 0,
          max: maxValue || 100,
          step: 1
        },
        'Ranges'
      );
      const range3Title = text('Range 3 Title', 'Range 3', 'Legend');
      const range3Legend = text('Range 3 Legend', '', 'Legend');

      const showRange4 = boolean('Show Range 4', false, 'Ranges');
      const range4 = number(
        'Range 4',
        100,
        {
          range: true,
          min: 0,
          max: maxValue || 100,
          step: 1
        },
        'Ranges'
      );
      const range4Title = text('Range 4 Title', 'Range 4', 'Legend');
      const range4Legend = text('Range 4 Legend', '', 'Legend');
      const range4Color = select('Range 4 Color', colorOptions, patternfly.pfPaletteColors.blue, 'Ranges');

      const showLegend = boolean('Show Legend', false, 'Legend');
      const useCustomLegendText = boolean('Custom Legend', false, 'Legend');

      const useCustomRangeText = boolean('Custom Range', false, 'Legend');

      const showAxis = boolean('Show Axis', true, 'Legend');

      const ranges = [];
      if (showRange1) {
        ranges.push({
          value: range1,
          title: range1Title,
          legendText: range1Legend,
          legendTextFunction: useCustomRangeText ? rangeTextFunction : undefined
        });
      }
      if (showRange2) {
        ranges.push({
          value: range2,
          title: range2Title,
          legendText: range2Legend,
          legendTextFunction: useCustomRangeText ? rangeTextFunction : undefined
        });
      }
      if (showRange3) {
        ranges.push({
          value: range3,
          title: range3Title,
          legendText: range3Legend,
          legendTextFunction: useCustomRangeText ? rangeTextFunction : undefined
        });
      }
      if (showRange4) {
        ranges.push({
          value: range4,
          title: range4Title,
          legendText: range4Legend,
          color: range4Color,
          legendTextFunction: useCustomRangeText ? rangeTextFunction : undefined
        });
      }
      const containerStyle = {
        width: '400px',
        height: vertical ? '400px' : ''
      };

      const values = [
        {
          value,
          color: useColors === 'Custom' ? valueColor : undefined,
          title: valueTitle,
          legendText: valueLegendText,
          legendTextFunction: useCustomLegendText ? legendTextFunction : undefined
        }
      ];

      if (showValue2) {
        values.push({
          value: value2,
          color: useColors === 'Custom' ? valueColor2 : undefined,
          title: valueTitle2,
          legendText: valueLegendText2,
          legendTextFunction: useCustomLegendText ? legendTextFunction : undefined
        });
      }
      if (showValue3) {
        values.push({
          value: value3,
          color: useColors === 'Custom' ? valueColor3 : undefined,
          title: valueTitle3,
          legendText: valueLegendText3,
          legendTextFunction: useCustomLegendText ? legendTextFunction : undefined
        });
      }
      if (showValue4) {
        values.push({
          value: value4,
          color: useColors === 'Custom' ? valueColor4 : undefined,
          title: valueTitle4,
          legendText: valueLegendText4,
          legendTextFunction: useCustomLegendText ? legendTextFunction : undefined
        });
      }
      if (showValue5) {
        values.push({
          value: value5,
          color: useColors === 'Custom' ? valueColor5 : undefined,
          title: valueTitle5,
          legendText: valueLegendText5,
          legendTextFunction: useCustomLegendText ? legendTextFunction : undefined
        });
      }
      const story = (
        <div>
          <h2>Bullet Chart</h2>
          <div style={containerStyle}>
            <BulletChart
              id="bar-chart-1"
              vertical={vertical}
              stacked={stacked}
              label="Text Label"
              percents={usePercent}
              maxValue={maxValue}
              details="Measure Details"
              useExtendedColors={useColors === 'Extended'}
              values={values}
              useDots={useDots}
              thresholdError={showErrorThreshold ? thresholdError : 0}
              thresholdErrorLegendText={thresholdErrorText}
              thresholdWarning={showWarnThreshold ? thresholdWarning : 0}
              thresholdWarningLegendText={thresholdWarningText}
              ranges={ranges}
              showAxis={showAxis}
              showLegend={showLegend}
            />
          </div>
        </div>
      );
      return inlineTemplate({
        title: 'Bullet Chart',
        documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_DATA_VISUALIZATION}bullet-chart/`,
        story
      });
    })
  );
};

export default bulletChart;
