import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertToggleExpandButton } from '../AlertToggleExpandButton';
import { AlertContext } from '../AlertContext';

jest.mock('../../Button');

jest.mock('@patternfly/react-icons/dist/esm/icons/angle-right-icon', () => () => 'Icon mock');

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
        <AlertToggleExpandButton />
      </AlertContext.Provider>
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with an aria label composed with the title and variantLabel provided via a context by default', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Toggle variantLabel alert: title');
});

test('Renders with the aria label provided via prop when one is provided', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton aria-label="Aria label prop" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Aria label prop');
});

test('Does not call the callback provided via onToggleExpand when it is not clicked', () => {
  const onToggleExpandMock = jest.fn();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton onToggleExpand={onToggleExpandMock} />
    </AlertContext.Provider>
  );

  expect(onToggleExpandMock).not.toHaveBeenCalled();
});

test('Calls the callback provided via onToggleExpand when clicked', async () => {
  const onToggleExpandMock = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton onToggleExpand={onToggleExpandMock} />
    </AlertContext.Provider>
  );

  await user.click(screen.getByRole('button'));

  expect(onToggleExpandMock).toHaveBeenCalledTimes(1);
});

test('Does not render the button as aria-expanded by default', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('Renders the button as aria-expanded when isExpanded = true', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton isExpanded />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('Renders with an aria label composed with the title provided via a context and variantLabel provided via prop', () => {
    render(
      <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
        <AlertToggleExpandButton variantLabel='variantLabelProp'/>
      </AlertContext.Provider>
    );
  
    expect(screen.getByRole('button')).toHaveAccessibleName('Toggle variantLabelProp alert: title');
  });

test('Renders a Button with variant: ButtonVariant.plain', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByText('variant: plain')).toBeVisible();
});

test('Renders with the toggle icon inside class pf-c-alert__toggle-icon', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByText('Icon mock')).toHaveClass('pf-c-alert__toggle-icon');
});

test('Renders with inherited element props spread to the component', () => {
    render(
      <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
        <AlertToggleExpandButton aria-labelledby="labelling-id" />
      </AlertContext.Provider>
    );
  
    expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
  });

test('Matches snapshot', () => {
  const { asFragment } = render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
