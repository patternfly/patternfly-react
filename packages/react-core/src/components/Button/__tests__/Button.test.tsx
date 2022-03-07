import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CartArrowDownIcon from '@patternfly/react-icons/dist/esm/icons/cart-arrow-down-icon';
import { Button, ButtonVariant } from '../Button';

describe('Button', () => {
  Object.values(ButtonVariant).forEach(variant => {
    test(`${variant} button`, () => {
      const view = render(
        <Button variant={variant} aria-label={variant}>
          {variant} Button
        </Button>
      );
      expect(view.container).toMatchSnapshot();
    });
  });

  test('it adds an aria-label to plain buttons', () => {
    const label = 'aria-label test';
    render(<Button aria-label={label} />);

    expect(screen.getByLabelText(label)).toBeTruthy();
  });

  test('link with icon', () => {
    const view = render(
      <Button variant={ButtonVariant.link} icon={<CartArrowDownIcon />}>
        Block Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isBlock', () => {
    const view = render(<Button isBlock>Block Button</Button>);
    expect(view.container).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const view = render(<Button isDisabled>Disabled Button</Button>);
    expect(view.container).toMatchSnapshot();
  });

  test('isDanger secondary', () => {
    const view = render(
      <Button variant="secondary" isDanger>
        Disabled Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isDanger link', () => {
    const view = render(
      <Button variant="link" isDanger>
        Disabled Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isAriaDisabled button', () => {
    const view = render(<Button isAriaDisabled>Disabled yet focusable button</Button>);
    expect(view.container).toMatchSnapshot();
  });

  test('isAriaDisabled link button', () => {
    const view = render(
      <Button isAriaDisabled component="a">
        Disabled yet focusable button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isInline', () => {
    const view = render(
      <Button variant={ButtonVariant.link} isInline>
        Hovered Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isSmall', () => {
    const view = render(<Button isSmall>Small Button</Button>);
    expect(view.container).toMatchSnapshot();
  });

  test('isLarge', () => {
    const view = render(<Button isLarge>Large Button</Button>);
    expect(view.container).toMatchSnapshot();
  });

  test('isLoading', () => {
    const view = render(
      <Button isLoading spinnerAriaValueText="Loading">
        Loading Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('allows passing in a string as the component', () => {
    const component = 'a';
    render(<Button component={component}>anchor button</Button>);

    expect(screen.getByText('anchor button')).toBeInTheDocument();
  });

  test('allows passing in a React Component as the component', () => {
    const Component = () => <div>im a div</div>;
    render(<Button component={Component} />);

    expect(screen.getByText('im a div')).toBeInTheDocument();
  });

  test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
    const view = render(
      <Button component="a" isDisabled>
        Disabled Anchor Button
      </Button>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('setting tab index through props', () => {
    render(<Button tabIndex={0}>TabIndex 0 Button</Button>);
    expect(screen.getByRole('button').getAttribute('tabindex')).toEqual('0');
  });

  test('isLoading icon only', () => {
    const view = render(
      <Button variant="plain" isLoading aria-label="Upload" spinnerAriaValueText="Loading" icon={<div>ICON</div>} />
    );
    expect(view.container).toMatchSnapshot();
  });
});
