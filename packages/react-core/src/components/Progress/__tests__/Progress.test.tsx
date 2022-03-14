import React from 'react';
import { render } from '@testing-library/react';
import { Progress, ProgressSize } from '../Progress';
import { ProgressVariant, ProgressMeasureLocation } from '../ProgressContainer';

test('Simple progress', () => {
  const view = render(<Progress value={33} id="progress-simple-example" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('no value specified', () => {
  const view = render(<Progress id="no-value" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('additional label', () => {
  const view = render(<Progress id="additional-label" value={33} label="Additional label" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Progress with aria-valuetext', () => {
  const view = render(<Progress value={33} id="progress-aria-valuetext" valueText="Descriptive text here" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('value lower than minValue', () => {
  const view = render(<Progress value={33} id="lower-min-value" min={40} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('value higher than maxValue', () => {
  const view = render(<Progress value={77} id="higher-max-value" max={60} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('value scaled with minValue', () => {
  const view = render(<Progress min={10} value={50} id="scaled-min-value" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('value scaled with maxValue', () => {
  const view = render(<Progress value={50} id="scaled-max-value" max={80} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('value scaled between minValue and maxValue', () => {
  const view = render(<Progress min={10} value={50} id="scaled-range-value" max={80} />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

describe('Progress size', () => {
  Object.keys(ProgressSize).forEach(oneSize => {
    test(oneSize, () => {
      const view = render(<Progress id={`${oneSize}-progress`} value={33} size={oneSize as ProgressSize} />);
      expect(view.container.outerHTML).toMatchSnapshot();
    });
  });
});

describe('Progress variant', () => {
  Object.keys(ProgressVariant).forEach(oneVariant => {
    test(oneVariant, () => {
      const view = render(
        <Progress id={`${oneVariant}-progress`} value={33} variant={oneVariant as ProgressVariant} />
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });
  });
});

describe('Progress measure location', () => {
  Object.keys(ProgressMeasureLocation).forEach(oneLocation => {
    test(oneLocation, () => {
      const view = render(
        <Progress id={`${oneLocation}-progress`} value={33} measureLocation={oneLocation as ProgressMeasureLocation} />
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });
  });

  test('inside and small should render large', () => {
    const view = render(
      <Progress
        id="large-progress"
        value={33}
        measureLocation={ProgressMeasureLocation.inside}
        size={ProgressSize.sm}
      />
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test('progress component generates console warning when no accessible name is provided', () => {
  const consoleWarnMock = jest.fn();
  global.console = { warn: consoleWarnMock } as any;
  render(<Progress value={33} />);
  expect(consoleWarnMock).toBeCalled();
});
