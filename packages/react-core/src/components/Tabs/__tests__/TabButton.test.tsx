import { render, screen } from '@testing-library/react';
import { TabButton } from '../TabButton';

test('should render tab button', () => {
  const { asFragment } = render(<TabButton>Tab button</TabButton>);
  expect(asFragment()).toMatchSnapshot();
});

test('renders an anchor by default when href is supplied', () => {
  render(<TabButton href="#tab">Tab link</TabButton>);
  expect(screen.getByRole('link')).toHaveAttribute('href', '#tab');
  expect(screen.getByRole('link')).not.toHaveAttribute('type');
});

test('uses the explicit component instead of the href-based default', () => {
  render(
    <TabButton component="button" href="#tab">
      Tab button
    </TabButton>
  );
  expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
});

test('renders an explicit anchor without button-specific attributes', () => {
  render(
    <TabButton component="a" role="tab">
      Tab link
    </TabButton>
  );
  expect(screen.getByRole('tab').tagName).toBe('A');
  expect(screen.getByRole('tab')).not.toHaveAttribute('type');
});
