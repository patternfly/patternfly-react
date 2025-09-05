import { render, screen } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

test('Does not render with aria-describedby by default', () => {
  render(<ProgressBar value={33} />);

  expect(screen.getByRole('progressbar')).not.toHaveAccessibleDescription();
});

test('Renders with aria-describedby when progressBarAriaProps is passed in', () => {
  render(
    <>
      <div id="test-id">Test description</div>
      <ProgressBar value={33} progressBarAriaProps={{ 'aria-describedby': 'test-id' }} />
    </>
  );

  expect(screen.getByRole('progressbar')).toHaveAccessibleDescription('Test description');
});
