import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Card } from '../Card';

describe('Card', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<Card className="extra-class">card</Card>);
    expect(screen.getByText('card')).toHaveClass('extra-class');
  });

  test('extra props are spread to the root element', () => {
    const testId = 'card';

    render(<Card data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('allows passing in a string as the component', () => {
    const component = 'section';

    render(<Card component={component}>section content</Card>);
    expect(screen.getByText('section content')).toBeInTheDocument();
  });

  test('allows passing in a React Component as the component', () => {
    const Component = () => <div>im a div</div>;

    render(<Card component={Component as unknown as keyof JSX.IntrinsicElements} />);
    expect(screen.getByText('im a div')).toBeInTheDocument();
  });

  test('card with isCompact applied ', () => {
    const { asFragment } = render(<Card isCompact />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('card with isSelectable applied ', () => {
    render(<Card isSelectable>selectable card</Card>);

    const card = screen.getByText('selectable card');
    expect(card).toHaveClass('pf-m-selectable');
  });

  test('card with isSelectable and isSelected applied ', () => {
    render(
      <Card isSelectable isSelected>
        selected and selectable card
      </Card>
    );

    const card = screen.getByText('selected and selectable card');
    expect(card).toHaveClass('pf-m-selectable');
    expect(card).toHaveClass('pf-m-selected');
  });

  test('card with only isSelected applied - not change', () => {
    render(<Card isSelected>selected card</Card>);

    const card = screen.getByText('selected card');
    expect(card).not.toHaveClass('pf-m-selected');
    expect(card.getAttribute('tabindex')).toBeNull();
  });

  test('card with isExpanded applied', () => {
    render(<Card isExpanded>expanded card</Card>);
    expect(screen.getByText('expanded card')).toHaveClass('pf-m-expanded');
  });

  test('card with isLarge applied', () => {
    render(<Card isLarge>large card</Card>);
    expect(screen.getByText('large card')).toHaveClass('pf-m-display-lg');
  });

  test('card warns when isLarge and isCompact', () => {
    const consoleWarnMock = jest.fn();
    global.console = { warn: consoleWarnMock } as any;

    render(<Card isLarge isCompact />);
    expect(consoleWarnMock).toHaveBeenCalled();
  });

  test('card with variant set to secondary ', () => {
    render(<Card variant="secondary">secondary card</Card>);

    const card = screen.getByText('secondary card');
    expect(card).toHaveClass('pf-m-secondary');
  });
});
