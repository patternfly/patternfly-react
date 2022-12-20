import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { List, ListComponent, ListVariant, OrderType } from '../List';
import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';

test('Renders without children', () => {
  render(
    <div data-testid="list">
      <List />
    </div>
  );
  expect(screen.getByTestId('list').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).toBeVisible();
});

test('Renders with the class pf-c-list', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-c-list');
});

test('Renders with only the class pf-c-list by default', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-c-list', { exact: true });
});

test('Renders with custom class name when className prop is passed', () => {
  render(<List className="test-class">Test</List>);
  expect(screen.getByRole('list')).toHaveClass('test-class');
});

test('Renders List as a "ul" by default', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).toHaveProperty('nodeName', 'UL');
});

test('Renders List as a "ul" when component prop passed as "ul"', () => {
  render(<List component={ListComponent.ul}>Test</List>);
  expect(screen.getByRole('list')).toHaveProperty('nodeName', 'UL');
});

test('Renders List as a "ol" when component prop passed as "ol"', () => {
  render(<List component={ListComponent.ol}>Test</List>);
  expect(screen.getByRole('list')).toHaveProperty('nodeName', 'OL');
});

test('Renders with class name pf-m-icon-lg when iconSize is large', () => {
  render(<List iconSize="large">Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-icon-lg');
});

test('Renders with only class name pf-c-list when iconSize is default', () => {
  render(<List iconSize="default">Test</List>);
  expect(screen.getByRole('list')).not.toHaveClass('pf-m-icon-lg');
});

test('Renders with class name pf-m-bordered when isBordered is true', () => {
  render(<List isBordered>Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-bordered');
});

test('Renders without class name pf-m-bordered by default', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).not.toHaveClass('pf-m-bordered');
});

test('Renders with class name pf-m-plain when isPlain is true', () => {
  render(<List isPlain>Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-plain');
});

test('Renders without class name pf-m-plain by default', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).not.toHaveClass('pf-m-plain');
});

test.skip('Renders with ref', async () => {
  const user = userEvent.setup();
  const listRef: React.RefObject<HTMLUListElement> = React.createRef();

  const BasicList = () => {
    const [lastClickWasInList, setLastClickWasInList] = React.useState(false);

    const handleClick = event => {
      if (listRef.current && listRef.current.contains(event.target)) {
        setLastClickWasInList(true);
      } else {
        setLastClickWasInList(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClick);
    }, []);

    return (
      <div>
        <List ref={listRef}>main content</List>
        <p>Last click was a list item: {lastClickWasInList ? 'true' : 'false'}</p>
      </div>
    );
  };

  render(<BasicList />);

  await user.click(document.body);
  expect(screen.getByText('Last click was a list item: false')).toBeVisible;
  await user.click(screen.getByText('main content'));
  expect(screen.getByText('Last click was a list item: true')).toBeVisible;
});

test('Renders List as a numbered when OrderType prop passed as number', () => {
  render(
    <List component={ListComponent.ol} type={OrderType.number}>
      Test
    </List>
  );
  expect(screen.getByRole('list')).toHaveProperty('type', '1');
});

test('Renders List as a lowercaseLetter when OrderType prop passed as lowercaseLetter', () => {
  render(
    <List component={ListComponent.ol} type={OrderType.lowercaseLetter}>
      Test
    </List>
  );
  expect(screen.getByRole('list')).toHaveProperty('type', 'a');
});

test('Renders List as a uppercaseLetter when OrderType prop passed as uppercaseLetter', () => {
  render(
    <List component={ListComponent.ol} type={OrderType.uppercaseLetter}>
      Test
    </List>
  );
  expect(screen.getByRole('list')).toHaveProperty('type', 'A');
});

test('Renders List as a lowercaseRomanNumber when OrderType prop passed as lowercaseRomanNumber', () => {
  render(
    <List component={ListComponent.ol} type={OrderType.lowercaseRomanNumber}>
      Test
    </List>
  );
  expect(screen.getByRole('list')).toHaveProperty('type', 'i');
});

test('Renders List as a uppercaseRomanNumber when OrderType prop passed as uppercaseRomanNumber', () => {
  render(
    <List component={ListComponent.ol} type={OrderType.uppercaseRomanNumber}>
      Test
    </List>
  );
  expect(screen.getByRole('list')).toHaveProperty('type', 'I');
});

test('Renders with class name pf-m-inline when variant is inline', () => {
  render(<List variant={ListVariant.inline}>Test</List>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-inline');
});

test('Renders without class name pf-m-inline when variant prop is not passed', () => {
  render(<List>Test</List>);
  expect(screen.getByRole('list')).not.toHaveClass('pf-m-inline');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<List>Test</List>);
  expect(asFragment()).toMatchSnapshot();
});
