import React from 'react';
import { mount } from 'enzyme';
import Progress, { ProgressSize } from './Progress';
import { ProgressVariant, ProgressMeasureLocation } from './ProgressContainer';

test('Simple progress', () => {
  const view = mount(<Progress value={33} id="progress-simple-example" />);
  expect(view).toMatchSnapshot();
});

test('no value specified', () => {
  const view = mount(<Progress id="no-value" />);
  expect(view).toMatchSnapshot();
});

test('additional label', () => {
  const view = mount(<Progress id="additional-label" value={33} label="Additional label" />);
  expect(view).toMatchSnapshot();
});

test('Progress with aria-valuetext', () => {
  const view = mount(<Progress value={33} id="progress-aria-valuetext" valueText="Descriptive text here" />);
  expect(view).toMatchSnapshot();
});

test('value lower than minValue', () => {
  const view = mount(<Progress value={33} id="lower-min-value" min={40} />);
  expect(view).toMatchSnapshot();
});

test('value higher than maxValue', () => {
  const view = mount(<Progress value={77} id="higher-max-value" max={60} />);
  expect(view).toMatchSnapshot();
});

describe('Progress size', () => {
  Object.keys(ProgressSize).forEach(oneSize => {
    test(oneSize, () => {
      const view = mount(<Progress id={`${oneSize}-progress`} value={33} size={oneSize} />);
      expect(view).toMatchSnapshot();
    });
  });
});

describe('Progress variant', () => {
  Object.keys(ProgressVariant).forEach(oneVariant => {
    test(oneVariant, () => {
      const view = mount(<Progress id={`${oneVariant}-progress`} value={33} variant={oneVariant} />);
      expect(view).toMatchSnapshot();
    });
  });
});

describe('Progress measure location', () => {
  Object.keys(ProgressMeasureLocation).forEach(oneLocation => {
    test(oneLocation, () => {
      const view = mount(<Progress id={`${oneLocation}-progress`} value={33} measureLocation={oneLocation} />);
      expect(view).toMatchSnapshot();
    });
  });

  test('inside and small should render large', () => {
    const view = mount(
      <Progress
        id="large-progress"
        value={33}
        measureLocation={ProgressMeasureLocation.inside}
        size={ProgressSize.sm}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
