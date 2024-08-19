import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardHeader } from '../CardHeader';
import { CardContext } from '../Card';

describe('CardHeader', () => {
  test('onExpand adds the toggle button', () => {
    const { asFragment } = render(<CardHeader onExpand={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('actions are rendered', () => {
    const { asFragment } = render(<CardHeader actions="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// TODO: check if hasNoOffset for actions/selectableActions and className for selectableActions render
describe('Card with actions and selectableActions', () => {
  test('Does not render selectable or clickable actions by default', () => {
    render(<CardHeader>Test</CardHeader>);

    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  test('Renders checkbox input when Card has isSelectable and selectableActions.variant = "multiple"', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('Renders checkbox input by default when Card has isSelectable and selectableActions is passed with any props', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ className: 'test' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  test('Renders radio input when Card has isSelectable and selectableActions.variant = "single"', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'single' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
  test('Renders default ID for selectable card input when selectableActions.selectableActionId is not passed', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox').getAttribute('id')).toMatch(/^card-selectable/);
  });
  test('Renders custom ID for selectable card input when selectableActions.selectableActionId is passed', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', selectableActionId: 'custom-id' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'custom-id');
  });
  test('Renders name on a selectable card input', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'single', name: 'test' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('radio')).toHaveAttribute('name', 'test');
  });
  test('Renders a selectable card input as not checked by default', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
  test('Renders a selectable card input as checked when Card has isSelected = true', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true, isSelected: true }}>
        <CardHeader selectableActions={{ variant: 'multiple' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  test('Renders a selectable card input as checked when deprecated selectableActions.isChecked is true', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', isChecked: true }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });
  test('Renders additional props on selectable card input when selectableActions.selectableActionProps is passed', () => {
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', selectableActionProps: { style: { color: 'red' } } }}>
          Test
        </CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toHaveAttribute('style');
  });

  test('Does not call onChange for selectable card when card is not clicked', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <>
        <button>Test click</button>
        <CardContext.Provider value={{ isSelectable: true }}>
          <CardHeader selectableActions={{ variant: 'multiple', onChange: onChangeMock }}>Test</CardHeader>
        </CardContext.Provider>
      </>
    );

    await user.click(screen.getByRole('button', { name: 'Test click' }));
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  test('Calls onChange for selectable card when card is clicked', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();

    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', onChange: onChangeMock }}>Test</CardHeader>
      </CardContext.Provider>
    );

    const labelElement = document.querySelector('label');
    await user.click(labelElement as HTMLElement);
    expect(onChangeMock).toHaveBeenCalled();
  });

  test('Renders button element when Card has isClickable and selectableActions.onClickAction is passed"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ onClickAction: () => {} }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Renders anchor element when Card has isClickable and selectableActions.to is passed"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  test('Renders href when Card has isClickable and selectableActions.to is passed"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#some-id' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '#some-id');
  });
  test('Does not render ID on clickable element when selectableActions.selectableActionId is not passed"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).not.toHaveAttribute('id');
  });
  test('Renders ID on clickable element when selectableActions.selectableActionId is passed"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#', selectableActionId: 'custom-id' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAttribute('id', 'custom-id');
  });
  test('Renders additional props on clickable element when selectableActions.selectableActionProps is passed', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#', selectableActionProps: { style: { color: 'red' } } }}>
          Test
        </CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAttribute('style');
  });
  test('Does not render target="_blank" on clickable card anchor element by default"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });
  test('Renders target="_blank" on clickable card anchor element when selectableActions.isExternalLink is true"', () => {
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#', isExternalLink: true }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
  test('Calls onClickAction for clickable card when card is clicked', async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ onClickAction: onClickMock }}>Test</CardHeader>
      </CardContext.Provider>
    );

    await user.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
  });

  test('Throws error when Card is either clickable or selectable only and has actions prop passed"', () => {
    const errorMock = jest.fn() as any;
    global.console = { error: errorMock } as any;
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader
          actions={{ actions: <button>Toggle</button> }}
          selectableActions={{ to: '#', selectableActionAriaLabel: 'Link' }}
        >
          Test
        </CardHeader>
      </CardContext.Provider>
    );

    expect(errorMock).toHaveBeenCalled();
  });
  test('Does not throw error when Card is both clickable and selectable and has actions prop passed"', () => {
    const errorMock = jest.fn() as any;
    global.console = { error: errorMock } as any;
    render(
      <CardContext.Provider value={{ isClickable: true, isSelectable: true }}>
        <CardHeader
          actions={{ actions: <button>Toggle</button> }}
          selectableActions={{ to: '#', selectableActionAriaLabel: 'Link' }}
        >
          Test
        </CardHeader>
      </CardContext.Provider>
    );

    expect(errorMock).not.toHaveBeenCalled();
  });
  test('Throws error when Card has isClickable and selectableActions.selectableActionAriaLabel or selectableActions.selectableActionAriaLabelledby is not passed"', () => {
    const errorMock = jest.fn() as any;
    global.console = { error: errorMock } as any;
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(errorMock).toHaveBeenCalled();
  });
  test('Throws error when Card has isSelectable and selectableActions.selectableActionAriaLabel or selectableActions.selectableActionAriaLabelledby is not passed"', () => {
    const errorMock = jest.fn() as any;
    global.console = { error: errorMock } as any;
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple' }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(errorMock).toHaveBeenCalled();
  });

  test('Renders accessible name on selectable card input when selectableActions.selectableActionAriaLabel is passed', () => {
    const accessibleName = 'Accessible name';
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', selectableActionAriaLabel: accessibleName }}>
          Test
        </CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toHaveAccessibleName(accessibleName);
  });
  test('Renders accessible name on selectable card input when selectableActions.selectableActionAriaLabelledby is passed', () => {
    const labelingId = 'labelling-id';
    const accessibleName = 'Accessible name';
    render(
      <CardContext.Provider value={{ isSelectable: true }}>
        <CardHeader selectableActions={{ variant: 'multiple', selectableActionAriaLabelledby: labelingId }}>
          <div id={labelingId}>{accessibleName}</div>
        </CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('checkbox')).toHaveAccessibleName(accessibleName);
  });
  test('Renders accessible name on clickable card clickable element when selectableActions.selectableActionAriaLabel is passed', () => {
    const accessibleName = 'Accessible name';
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#', selectableActionAriaLabel: accessibleName }}>Test</CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAccessibleName(accessibleName);
  });
  test('Renders accessible name on clickable card clickable element when selectableActions.selectableActionAriaLabelledby is passed', () => {
    const labelingId = 'labelling-id';
    const accessibleName = 'Accessible name';
    render(
      <CardContext.Provider value={{ isClickable: true }}>
        <CardHeader selectableActions={{ to: '#', selectableActionAriaLabelledby: labelingId }}>
          <div id={labelingId}>{accessibleName}</div>
        </CardHeader>
      </CardContext.Provider>
    );

    expect(screen.getByRole('link')).toHaveAccessibleName(accessibleName);
  });
});
