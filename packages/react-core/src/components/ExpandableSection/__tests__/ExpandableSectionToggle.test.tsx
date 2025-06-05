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
