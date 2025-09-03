import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AnimationsProvider, useAnimationsConfig, useHasAnimations } from '../AnimationsProvider';

// Test component that uses the useAnimationsConfig hook
const TestConfigComponent = () => {
  const { hasAnimations } = useAnimationsConfig();
  return <div data-testid="config">{hasAnimations ? 'animations-enabled' : 'animations-disabled'}</div>;
};

// Test component that uses the useHasAnimations hook with a local prop
const TestHasAnimationsComponent = ({ hasAnimations: localHasAnimations }: { hasAnimations?: boolean }) => {
  const hasAnimations = useHasAnimations(localHasAnimations);
  return <div data-testid="has-animations">{hasAnimations ? 'animations-enabled' : 'animations-disabled'}</div>;
};

describe('AnimationsProvider', () => {
  test('renders children correctly', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: true }}>
        <div data-testid="child">Test Child</div>
      </AnimationsProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toHaveTextContent('Test Child');
  });

  test('provides default config when no config is passed', () => {
    render(
      <AnimationsProvider>
        <TestConfigComponent />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('config')).toHaveTextContent('animations-disabled');
  });

  test('provides animations enabled config', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: true }}>
        <TestConfigComponent />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('config')).toHaveTextContent('animations-enabled');
  });

  test('provides animations disabled config', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: false }}>
        <TestConfigComponent />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('config')).toHaveTextContent('animations-disabled');
  });

  test('useAnimationsConfig returns default config when no provider', () => {
    render(<TestConfigComponent />);

    expect(screen.getByTestId('config')).toHaveTextContent('animations-disabled');
  });

  test('useHasAnimations uses context when no local prop provided', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: true }}>
        <TestHasAnimationsComponent />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('has-animations')).toHaveTextContent('animations-enabled');
  });

  test('useHasAnimations uses local prop when provided (true)', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: false }}>
        <TestHasAnimationsComponent hasAnimations={true} />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('has-animations')).toHaveTextContent('animations-enabled');
  });

  test('useHasAnimations uses local prop when provided (false)', () => {
    render(
      <AnimationsProvider config={{ hasAnimations: true }}>
        <TestHasAnimationsComponent hasAnimations={false} />
      </AnimationsProvider>
    );

    expect(screen.getByTestId('has-animations')).toHaveTextContent('animations-disabled');
  });

  test('useHasAnimations works without provider', () => {
    render(<TestHasAnimationsComponent />);

    expect(screen.getByTestId('has-animations')).toHaveTextContent('animations-disabled');
  });

  test('useHasAnimations with local prop and no provider', () => {
    render(<TestHasAnimationsComponent hasAnimations={true} />);

    expect(screen.getByTestId('has-animations')).toHaveTextContent('animations-enabled');
  });

  test('works in app-level scenario with multiple components', () => {
    // Simulate realistic app-level usage
    const MockApp = () => (
      <div>
        <header>
          <TestConfigComponent />
        </header>
        <main>
          <TestHasAnimationsComponent />
          <TestHasAnimationsComponent hasAnimations={false} /> {/* Component override */}
        </main>
      </div>
    );

    render(
      <AnimationsProvider config={{ hasAnimations: true }}>
        <MockApp />
      </AnimationsProvider>
    );

    const configs = screen.getAllByTestId('config');
    const hasAnimationsComponents = screen.getAllByTestId('has-animations');

    expect(configs[0]).toHaveTextContent('animations-enabled'); // Header uses provider
    expect(hasAnimationsComponents[0]).toHaveTextContent('animations-enabled'); // Main uses provider
    expect(hasAnimationsComponents[1]).toHaveTextContent('animations-disabled'); // Component override
  });
});
