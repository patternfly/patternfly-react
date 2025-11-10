import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';
import styles from '@patternfly/react-styles/css/components/Hero/hero';

test('Renders without children', () => {
  render(
    <div data-testid="test-hero">
      <Hero />
    </div>
  );
  expect(screen.getByTestId('test-hero').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<Hero>Test content</Hero>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test(`Renders with ${styles.hero} class by defaulty`, () => {
  render(<Hero>Test</Hero>);

  expect(screen.getByText('Test')).toHaveClass(`${styles.hero}`, { exact: true });
});

test('Renders with custom class name when className prop is provided', () => {
  render(<Hero className="custom-class">Test</Hero>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with additional props spread to the component', () => {
  render(<Hero id="custom-id">Test</Hero>);
  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});

test('Renders with light background image style when backgroundSrcLight is provided', () => {
  const backgroundSrc = 'light-bg.jpg';
  render(<Hero backgroundSrcLight={backgroundSrc}>Test</Hero>);
  expect(screen.getByText('Test')).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--light: url(${backgroundSrc})`);
});

test('Renders with dark background image style when backgroundSrcDark is provided', () => {
  const backgroundSrc = 'dark-bg.jpg';
  render(<Hero backgroundSrcDark={backgroundSrc}>Test</Hero>);
  expect(screen.getByText('Test')).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--dark: url(${backgroundSrc})`);
});

test('Renders with both light and dark background image styles when both are provided', () => {
  const lightSrc = 'light-bg.jpg';
  const darkSrc = 'dark-bg.jpg';
  render(
    <Hero backgroundSrcLight={lightSrc} backgroundSrcDark={darkSrc}>
      Test
    </Hero>
  );
  const heroElement = screen.getByText('Test');
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--light: url(${lightSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--dark: url(${darkSrc})`);
});

test('Renders with light gradient styles when gradientLight is provided', () => {
  const gradient = {
    stop1: '#ff0000',
    stop2: '#00ff00',
    stop3: '#0000ff'
  };
  render(<Hero gradientLight={gradient}>Test</Hero>);
  const heroElement = screen.getByText('Test');
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--light: ${gradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-2--light: ${gradient.stop2}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-3--light: ${gradient.stop3}`);
});

test('Renders with dark gradient styles when gradientDark is provided', () => {
  const gradient = {
    stop1: '#ff0000',
    stop2: '#00ff00',
    stop3: '#0000ff'
  };
  render(<Hero gradientDark={gradient}>Test</Hero>);
  const heroElement = screen.getByText('Test');
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--dark: ${gradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-2--dark: ${gradient.stop2}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-3--dark: ${gradient.stop3}`);
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
    <Hero gradientLight={lightGradient} gradientDark={darkGradient}>
      Test
    </Hero>
  );
  const heroElement = screen.getByText('Test');
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--light: ${lightGradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--dark: ${darkGradient.stop1}`);
});

test('Renders with both background images and gradient styles when both are provided', () => {
  const lightSrc = 'light-bg.jpg';
  const darkSrc = 'dark-bg.jpg';
  const lightGradient = { stop1: '#ff0000' };
  const darkGradient = { stop1: '#000000' };

  render(
    <Hero
      backgroundSrcLight={lightSrc}
      backgroundSrcDark={darkSrc}
      gradientLight={lightGradient}
      gradientDark={darkGradient}
    >
      Test
    </Hero>
  );
  const heroElement = screen.getByText('Test');
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--light: url(${lightSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--BackgroundImage--dark: url(${darkSrc})`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--light: ${lightGradient.stop1}`);
  expect(heroElement).toHaveStyle(`--pf-v6-c-hero--gradient--stop-1--dark: ${darkGradient.stop1}`);
});

test('Matches the snapshot without backgroundSrc and gradient props', () => {
  const { asFragment } = render(<Hero>Hero content</Hero>);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with backgroundSrc and gradient props', () => {
  const { asFragment } = render(
    <Hero
      backgroundSrcLight="light.jpg"
      backgroundSrcDark="dark.jpg"
      gradientLight={{ stop1: '#ff0000', stop2: '#00ff00', stop3: '#0000ff' }}
      gradientDark={{ stop1: '#000000', stop2: '#ffffff', stop3: '#808080' }}
    >
      Hero content
    </Hero>
  );

  expect(asFragment()).toMatchSnapshot();
});
