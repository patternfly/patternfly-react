import * as React from 'react';
import { mount } from 'enzyme';
import { ProgressStepper } from '../ProgressStepper';
import { ProgressStep } from '../ProgressStep';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

describe('ProgressStepper', () => {
  test('renders content', () => {
    const view = mount(
      <ProgressStepper>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view).toMatchSnapshot();
  });

  test('gets custom class and id', () => {
    const view = mount(
      <ProgressStepper className="custom-class" id="test-id">
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders vertically', () => {
    const view = mount(
      <ProgressStepper isVertical>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders compact', () => {
    const view = mount(
      <ProgressStepper isCompact>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders center aligned', () => {
    const view = mount(
      <ProgressStepper isCenterAligned>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('ProgressStep', () => {
  test('renders content', () => {
    const view = mount(<ProgressStep>Title</ProgressStep>);
    expect(view).toMatchSnapshot();
  });

  Object.values(['default', 'success', 'info', 'pending', 'warning', 'danger']).forEach(variant => {
    test(`renders ${variant} variant`, () => {
      const view = mount(
        <ProgressStep
          variant={variant as 'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger'}
          aria-label={variant}
        >
          {variant} step
        </ProgressStep>
      );
      expect(view).toMatchSnapshot();
    });
  });

  test('renders current', () => {
    const view = mount(<ProgressStep isCurrent>Title</ProgressStep>);
    expect(view).toMatchSnapshot();
  });

  test('renders help text styling', () => {
    const view = mount(<ProgressStep popover={<div></div>}>Title</ProgressStep>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom icon', () => {
    const view = mount(<ProgressStep icon={<InProgressIcon />}>Title</ProgressStep>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom null icon - removing default from variant', () => {
    const view = mount(
      <ProgressStep icon={null} variant="success">
        Title
      </ProgressStep>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders description', () => {
    const view = mount(<ProgressStep description="This is a description">Title</ProgressStep>);
    expect(view).toMatchSnapshot();
  });
});
