import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Card } from '../Card';

describe('Card', () => {
  test('renders with PatternFly Core styles', () => {
    const view = render(<Card />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<Card className="extra-class" />);
    expect(screen.getByRole('article').className).toContain('extra-class');
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

    render(<Card component={(Component as unknown) as keyof JSX.IntrinsicElements} />);
    expect(screen.getByText('im a div')).toBeInTheDocument();
  });

  test('card with isHoverable applied ', () => {
    render(<Card isHoverable />);
    expect(screen.getByRole('article').outerHTML).toMatchSnapshot();
  });

  test('card with isCompact applied ', () => {
    render(<Card isCompact />);
    expect(screen.getByRole('article').outerHTML).toMatchSnapshot();
  });

  test('card with isSelectable applied ', () => {
    render(<Card isSelectable />);

    const card = screen.getByRole('article');
    expect(card.className).toContain('selectable');
    expect(card.getAttribute('tabindex')).toEqual('0');
  });

  test('card with isSelectable and isSelected applied ', () => {
    render(<Card isSelectable isSelected />);

    const card = screen.getByRole('article');
    expect(card.className).toContain('selectable');
    expect(card.className).toContain('selected');
    expect(card.getAttribute('tabindex')).toEqual('0');
  });

  test('card with only isSelected applied - not change', () => {
    render(<Card isSelected />);

    const card = screen.getByRole('article');
    expect(card.className).not.toContain('selected');
    expect(card.getAttribute('tabindex')).toBeNull();
  });

  test('card with isDisabledRaised applied', () => {
    render(<Card isDisabledRaised />);
    expect(screen.getByRole('article').className).toContain('non-selectable-raised');
  });

  test('card with isSelectableRaised applied - not change', () => {
    render(<Card isSelectableRaised />);

    const card = screen.getByRole('article');
    expect(card.className).toContain('selectable-raised');
    expect(card.getAttribute('tabindex')).toEqual('0');
  });

  test('card with isSelectableRaised and isSelected applied ', () => {
    render(<Card isSelected isSelectableRaised />);

    const card = screen.getByRole('article');
    expect(card.className).toContain('selectable-raised');
    expect(card.className).toContain('selected-raised');
    expect(card.getAttribute('tabindex')).toEqual('0');
  });

  test('card with isFlat applied', () => {
    render(<Card isFlat />);
    expect(screen.getByRole('article').className).toContain('m-flat');
  });

  test('card with isExpanded applied', () => {
    render(<Card isExpanded />);
    expect(screen.getByRole('article').className).toContain('m-expanded');
  });

  test('card with isRounded applied', () => {
    render(<Card isRounded />);
    expect(screen.getByRole('article').className).toContain('m-rounded');
  });

  test('card with isLarge applied', () => {
    render(<Card isLarge />);
    expect(screen.getByRole('article').className).toContain('m-display-lg');
  });

  test('card warns when isLarge and isCompact', () => {
    const consoleWarnMock = jest.fn();
    global.console = { warn: consoleWarnMock } as any;

    render(<Card isLarge isCompact />);
    expect(consoleWarnMock).toBeCalled();
  });
});
