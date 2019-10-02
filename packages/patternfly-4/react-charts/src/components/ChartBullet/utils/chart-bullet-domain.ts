import * as React from 'react';
import { ChartDomain, getDomains } from '../../ChartUtils';

interface ChartBulletDomainInterface {
  comparativeErrorMeasureComponent?: React.ReactElement<any>;
  comparativeErrorMeasureData?: any[];
  comparativeWarningMeasureComponent?: React.ReactElement<any>;
  comparativeWarningMeasureData?: any[];
  primaryDotMeasureComponent?: React.ReactElement<any>;
  primaryDotMeasureData?: any[];
  primarySegmentedMeasureComponent?: React.ReactElement<any>;
  primarySegmentedMeasureData?: any[];
  maxDomain?: any;
  minDomain?: any;
  qualitativeRangeComponent?: React.ReactElement<any>;
  qualitativeRangeData?: any[];
}

// Returns the bullet chart's min and max domain for comparative / primary measures and qualitative range data
export const getBulletDomain = ({
  comparativeErrorMeasureComponent,
  comparativeErrorMeasureData,
  comparativeWarningMeasureComponent,
  comparativeWarningMeasureData,
  primaryDotMeasureComponent,
  primaryDotMeasureData,
  primarySegmentedMeasureComponent,
  primarySegmentedMeasureData,
  maxDomain,
  minDomain,
  qualitativeRangeComponent,
  qualitativeRangeData
}: ChartBulletDomainInterface): ChartDomain => {
  const domain = getDomains({
    maxDomain,
    minDomain,
    sources: [
      {
        component: comparativeErrorMeasureComponent,
        data: comparativeErrorMeasureData
      },
      {
        component: comparativeWarningMeasureComponent,
        data: comparativeWarningMeasureData
      },
      {
        component: primaryDotMeasureComponent,
        data: primaryDotMeasureData
      },
      {
        component: primarySegmentedMeasureComponent,
        data: primarySegmentedMeasureData
      },
      {
        component: qualitativeRangeComponent,
        data: qualitativeRangeData
      }
    ]
  });
  // Note that comparative measures and qualitative range bars are currently given an x-value of 1, while the bar widths
  // fill the domain. At one point, lines were used to represent comparative warning, comparative error, and zero
  // measures. Those components had x-values of 0 and 2, which rendered the lines on top of the comparative measure and
  // qualitative range bars.
  domain.x = [0, 2];
  return domain;
};
