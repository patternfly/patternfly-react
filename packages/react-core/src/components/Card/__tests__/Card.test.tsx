import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Card, CardContext } from '../Card';

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

  test('card with isDisabledRaised applied', () => {
    render(<Card isDisabledRaised>disabled raised card</Card>);
    expect(screen.getByText('disabled raised card')).toHaveClass('pf-m-non-selectable-raised');
  });

  test('card with isSelectableRaised applied - not change', () => {
    render(<Card isSelectableRaised>raised selectable card</Card>);

    const card = screen.getByText('raised selectable card');
    expect(card).toHaveClass('pf-m-selectable-raised');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  test('card with isSelectableRaised and isSelected applied ', () => {
    render(
      <Card isSelected isSelectableRaised>
        raised selected card
      </Card>
    );

    const card = screen.getByText('raised selected card');
    expect(card).toHaveClass('pf-m-selectable-raised');
    expect(card).toHaveClass('pf-m-selected-raised');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  test('card with isFlat applied', () => {
    render(<Card isFlat>flat card</Card>);
    expect(screen.getByText('flat card')).toHaveClass('pf-m-flat');
  });

  test('card with isExpanded applied', () => {
    render(<Card isExpanded>expanded card</Card>);
    expect(screen.getByText('expanded card')).toHaveClass('pf-m-expanded');
  });

  test('card with isRounded applied', () => {
    render(<Card isRounded>rounded card</Card>);
    expect(screen.getByText('rounded card')).toHaveClass('pf-m-rounded');
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

  test('card renders with a hidden input to improve a11y when hasSelectableInput is passed', () => {
    render(<Card isSelectable hasSelectableInput />);

    const selectableInput = screen.getByRole('checkbox', { hidden: true });

    expect(selectableInput).toBeInTheDocument();
  });

  test('card does not render the hidden input when hasSelectableInput is not passed', () => {
    render(<Card isSelectable />);

    const selectableInput = screen.queryByRole('checkbox', { hidden: true });

    expect(selectableInput).not.toBeInTheDocument();
  });

  test('card warns when hasSelectableInput is passed without selectableInputAriaLabel or a card title', () => {
    const consoleWarnMock = jest.fn();
    global.console = { warn: consoleWarnMock } as any;

    render(<Card isSelectable hasSelectableInput />);

    const selectableInput = screen.getByRole('checkbox', { hidden: true });

    expect(consoleWarnMock).toBeCalled();
    expect(selectableInput).toHaveAccessibleName('');
  });

  test('card applies selectableInputAriaLabel to the hidden input', () => {
    render(<Card isSelectable hasSelectableInput selectableInputAriaLabel="Input label test" />);

    const selectableInput = screen.getByRole('checkbox', { hidden: true });

    expect(selectableInput).toHaveAccessibleName('Input label test');
  });

  test('card applies the supplied card title as the aria label of the hidden input', () => {
    // this component is used to mock the CardTitle's title registry behavior to keep this a pure unit test
    const MockCardTitle = ({ children }) => {
      const { registerTitleId } = React.useContext(CardContext);
      const id = 'card-title-id';

      React.useEffect(() => {
        registerTitleId(id);
      });

      return <div id={id}>{children}</div>;
    };

    render(
      <Card id="card" isSelectable hasSelectableInput>
        <MockCardTitle>Card title from title component</MockCardTitle>
      </Card>
    );

    const selectableInput = screen.getByRole('checkbox', { hidden: true });

    expect(selectableInput).toHaveAccessibleName('Card title from title component');
  });

  test('card prioritizes selectableInputAriaLabel over card title labelling via card title', () => {
    // this component is used to mock the CardTitle's title registry behavior to keep this a pure unit test
    const MockCardTitle = ({ children }) => {
      const { registerTitleId } = React.useContext(CardContext);
      const id = 'card-title-id';

      React.useEffect(() => {
        registerTitleId(id);
      });

      return <div id={id}>{children}</div>;
    };

    render(
      <Card id="card" isSelectable hasSelectableInput selectableInputAriaLabel="Input label test">
        <MockCardTitle>Card title from title component</MockCardTitle>
      </Card>
    );

    const selectableInput = screen.getByRole('checkbox', { hidden: true });

    expect(selectableInput).toHaveAccessibleName('Input label test');
  });
});
