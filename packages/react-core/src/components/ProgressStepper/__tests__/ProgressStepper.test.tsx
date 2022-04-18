import * as React from 'react';
import { render } from '@testing-library/react';
import { ProgressStepper } from '../ProgressStepper';
import { ProgressStep } from '../ProgressStep';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

describe('ProgressStepper', () => {
  test('renders content', () => {
    const view = render(
      <ProgressStepper>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('gets custom class and id', () => {
    const view = render(
      <ProgressStepper className="custom-class" id="test-id">
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('renders vertically', () => {
    const view = render(
      <ProgressStepper isVertical>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('renders compact', () => {
    const view = render(
      <ProgressStepper isCompact>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('renders center aligned', () => {
    const view = render(
      <ProgressStepper isCenterAligned>
        <ProgressStep>First</ProgressStep>
        <ProgressStep>Second</ProgressStep>
        <ProgressStep>Third</ProgressStep>
      </ProgressStepper>
    );
    expect(view.container).toMatchSnapshot();
  });
});

describe('ProgressStep', () => {
  test('renders content', () => {
    const view = render(<ProgressStep>Title</ProgressStep>);
    expect(view.container).toMatchSnapshot();
  });

  Object.values(['default', 'success', 'info', 'pending', 'warning', 'danger']).forEach(variant => {
    test(`renders ${variant} variant`, () => {
      const view = render(
        <ProgressStep
          variant={variant as 'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger'}
          aria-label={variant}
        >
          {variant} step
        </ProgressStep>
      );
      expect(view.container).toMatchSnapshot();
    });
  });

  test('renders current', () => {
    const view = render(<ProgressStep isCurrent>Title</ProgressStep>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders help text styling', () => {
    const view = render(<ProgressStep popoverRender={({ stepRef }) => (<div></div>)}>Title</ProgressStep>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders custom icon', () => {
    const view = render(<ProgressStep icon={<InProgressIcon />}>Title</ProgressStep>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders custom null icon - removing default from variant', () => {
    const view = render(
      <ProgressStep icon={null} variant="success">
        Title
      </ProgressStep>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('renders description', () => {
    const view = render(<ProgressStep description="This is a description">Title</ProgressStep>);
    expect(view.container).toMatchSnapshot();
  });
});
