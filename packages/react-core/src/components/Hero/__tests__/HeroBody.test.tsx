import { render, screen } from '@testing-library/react';
import { HeroBody } from '../HeroBody';
import styles from '@patternfly/react-styles/css/components/Hero/hero';

test('Renders without children', () => {
  render(
    <div data-testid="test-hero">
      <HeroBody />
    </div>
  );
  expect(screen.getByTestId('test-hero').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<HeroBody>Test content</HeroBody>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test(`Renders with ${styles.heroBody} class by defaulty`, () => {
  render(<HeroBody>Test</HeroBody>);

  expect(screen.getByText('Test')).toHaveClass(`${styles.heroBody}`, { exact: true });
});

test('Renders with custom class name when className prop is provided', () => {
  render(<HeroBody className="custom-class">Test</HeroBody>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<HeroBody id="custom-id">Test</HeroBody>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<HeroBody>Hero body content</HeroBody>);

  expect(asFragment()).toMatchSnapshot();
});
