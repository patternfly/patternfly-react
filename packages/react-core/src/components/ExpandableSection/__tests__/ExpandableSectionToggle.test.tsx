import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExpandableSectionToggle } from '../ExpandableSectionToggle';
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';

test('Renders without children', () => {
  render(<ExpandableSectionToggle></ExpandableSectionToggle>);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Renders with children', () => {
  render(<ExpandableSectionToggle>Toggle test</ExpandableSectionToggle>);

  expect(screen.getByRole('button')).toHaveTextContent('Toggle test');
});

test('Does not render with class pf-m-detached by default', () => {
  render(<ExpandableSectionToggle data-testid="test-id">Toggle test</ExpandableSectionToggle>);

  expect(screen.getByTestId('test-id')).not.toHaveClass('pf-m-detached');
});

test('Renders with class pf-m-detached when isDetached is true', () => {
  render(
    <ExpandableSectionToggle data-testid="test-id" isDetached>
      Toggle test
    </ExpandableSectionToggle>
  );

  expect(screen.getByTestId('test-id')).toHaveClass('pf-m-detached');
});

test('Renders with aria-label when toggleAriaLabel is passed', () => {
  render(<ExpandableSectionToggle toggleAriaLabel="Test label"></ExpandableSectionToggle>);

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Renders with aria-labelledby when toggleAriaLabelledBy is passed', () => {
  render(
    <>
      <div id="test-id">Test label</div>
      <ExpandableSectionToggle toggleAriaLabelledBy="test-id"></ExpandableSectionToggle>
    </>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});
