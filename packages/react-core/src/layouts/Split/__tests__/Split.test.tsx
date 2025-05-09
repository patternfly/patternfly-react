import { render } from '@testing-library/react';
import { Split } from '../Split';
import { SplitItem } from '../SplitItem';

test('isFilled', () => {
  const { asFragment } = render(
    <Split>
      <SplitItem isFilled>Main content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('isFilled defaults to false', () => {
  const { asFragment } = render(
    <Split>
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Gutter', () => {
  const { asFragment } = render(
    <Split hasGutter>
      <SplitItem>Basic Content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Wrappable', () => {
  const { asFragment } = render(
    <Split isWrappable>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('component on Split', () => {
  const { asFragment } = render(
    <Split component="span">
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('component on SplitItem', () => {
  const { asFragment } = render(
    <Split>
      <SplitItem component="span">Basic content</SplitItem>
    </Split>
  );
  expect(asFragment()).toMatchSnapshot();
});
