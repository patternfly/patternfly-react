import { render, screen } from '@testing-library/react';
import { CompassHero } from '../CompassHero';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders without children', () => {
  render(
    <div data-testid="test-hero">
      <CompassHero />
    </div>
  );
  expect(screen.getByTestId('test-hero').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<CompassHero>Test content</CompassHero>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassHero className="custom-class">Test</CompassHero>);
  expect(screen.getByText('Test').parentElement).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassPanel} and ${styles.compassHero} classes on the hero and ${styles.compassHeroBody} class on the hero body`, () => {
  render(<CompassHero>Test</CompassHero>);
  const heroBodyElement = screen.getByText('Test');
  expect(heroBodyElement).toHaveClass(styles.compassHeroBody);

  const heroElement = heroBodyElement.parentElement;
  expect(heroElement).toHaveClass(styles.compassPanel);
  expect(heroElement).toHaveClass(styles.compassHero);
});

test('Renders with light background image style when backgroundSrcLight is provided', () => {
  const backgroundSrc = 'light-bg.jpg';
  render(<CompassHero backgroundSrcLight={backgroundSrc}>Test</CompassHero>);
  expect(screen.getByText('Test').parentElement).toHaveStyle(
    `--pf-v6-c-compass__hero--BackgroundImage--light: url(${backgroundSrc})`
  );
});

test('Renders with dark background image style when backgroundSrcDark is provided', () => {
  const backgroundSrc = 'dark-bg.jpg';
  render(<CompassHero backgroundSrcDark={backgroundSrc}>Test</CompassHero>);
  expect(screen.getByText('Test').parentElement).toHaveStyle(
    `--pf-v6-c-compass__hero--BackgroundImage--dark: url(${backgroundSrc})`
  );
});

test('Renders with both light and dark background image styles when both are provided', () => {
  const lightSrc = 'light-bg.jpg';
  const darkSrc = 'dark-bg.jpg';
  render(
    <CompassHero backgroundSrcLight={lightSrc} backgroundSrcDark={darkSrc}>
      Test
    </CompassHero>
  );
  const heroElement = screen.getByText('Test').parentElement;
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--BackgroundImage--light: url(${lightSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--BackgroundImage--dark: url(${darkSrc})`);
});

test('Renders with light gradient styles when gradientLight is provided', () => {
  const gradient = {
    stop1: '#ff0000',
    stop2: '#00ff00',
    stop3: '#0000ff'
  };
  render(<CompassHero gradientLight={gradient}>Test</CompassHero>);
  const heroElement = screen.getByText('Test').parentElement;
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--light: ${gradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-2--light: ${gradient.stop2}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-3--light: ${gradient.stop3}`);
});

test('Renders with dark gradient styles when gradientDark is provided', () => {
  const gradient = {
    stop1: '#ff0000',
    stop2: '#00ff00',
    stop3: '#0000ff'
  };
  render(<CompassHero gradientDark={gradient}>Test</CompassHero>);
  const heroElement = screen.getByText('Test').parentElement;
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--dark: ${gradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-2--dark: ${gradient.stop2}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-3--dark: ${gradient.stop3}`);
});

test('Renders with both light and dark gradient styles when both are provided', () => {
  const lightGradient = {
    stop1: '#ff0000',
    stop2: '#00ff00',
    stop3: '#0000ff'
  };
  const darkGradient = {
    stop1: '#000000',
    stop2: '#ffffff',
    stop3: '#808080'
  };
  render(
    <CompassHero gradientLight={lightGradient} gradientDark={darkGradient}>
      Test
    </CompassHero>
  );
  const heroElement = screen.getByText('Test').parentElement;
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--light: ${lightGradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--dark: ${darkGradient.stop1}`);
});

test('Renders with both background images and gradient styles when both are provided', () => {
  const lightSrc = 'light-bg.jpg';
  const darkSrc = 'dark-bg.jpg';
  const lightGradient = { stop1: '#ff0000' };
  const darkGradient = { stop1: '#000000' };

  render(
    <CompassHero
      backgroundSrcLight={lightSrc}
      backgroundSrcDark={darkSrc}
      gradientLight={lightGradient}
      gradientDark={darkGradient}
    >
      Test
    </CompassHero>
  );
  const heroElement = screen.getByText('Test').parentElement;
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--BackgroundImage--light: url(${lightSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--BackgroundImage--dark: url(${darkSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--light: ${lightGradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-compass__hero--gradient--stop-1--dark: ${darkGradient.stop1}`);
});

test('Renders with additional props spread to the component', () => {
  render(<CompassHero aria-label="Test label">Test</CompassHero>);
  expect(screen.getByText('Test').parentElement).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <CompassHero
      backgroundSrcLight="light.jpg"
      backgroundSrcDark="dark.jpg"
      gradientLight={{ stop1: '#ff0000', stop2: '#00ff00', stop3: '#0000ff' }}
      gradientDark={{ stop1: '#000000', stop2: '#ffffff', stop3: '#808080' }}
    >
      <div>Hero content</div>
    </CompassHero>
  );
  expect(asFragment()).toMatchSnapshot();
});
