import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBullet } from './ChartBullet';
import { ChartAxis } from '../ChartAxis';

Object.values([true, false]).forEach(() => {
  test('ChartBulletQualitativeRange', () => {
    const { asFragment } = render(<ChartBullet axisComponent={<ChartAxis axisLabelId="test" />} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{ y: 100 }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 50 }]}
      qualitativeRangeData={[
        { name: 'Range', y: 50 },
        { name: 'Range', y: 75 }
      ]}
      width={450}
      axisComponent={<ChartAxis axisLabelId="test2" />}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
