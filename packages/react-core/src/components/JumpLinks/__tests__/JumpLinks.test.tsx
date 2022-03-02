import * as React from 'react';
import { render } from '@testing-library/react';
import { JumpLinks } from '../JumpLinks';
import { JumpLinksItem } from '../JumpLinksItem';
import { JumpLinksList } from '../JumpLinksList';

test('simple jumplinks', () => {
  const view = render(
    <JumpLinks>
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem isActive>Active section</JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(view.container).toMatchSnapshot();
});

test('jumplinks centered', () => {
  const view = render(
    <JumpLinks isCentered>
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem isActive>Active section</JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(view.container).toMatchSnapshot();
});

test('jumplinks with label', () => {
  const view = render(
    <JumpLinks isCentered label="Jump to section">
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem isActive>Active section</JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(view.container).toMatchSnapshot();
});

test('vertical with label', () => {
  const view = render(
    <JumpLinks isVertical alwaysShowLabel label="Jump to section">
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem isActive>Active section</JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(view.container).toMatchSnapshot();
});

test('expandable vertical with subsection', () => {
  const view = render(
    <JumpLinks isVertical label="Jump to section" expandable={{ default: 'expandable' }}>
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem>
        Section with active subsection
        <JumpLinksList>
          <JumpLinksItem isActive>Active subsection</JumpLinksItem>
          <JumpLinksItem>Inactive subsection</JumpLinksItem>
          <JumpLinksItem>Inactive subsection</JumpLinksItem>
        </JumpLinksList>
      </JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
      <JumpLinksItem>Inactive section</JumpLinksItem>
    </JumpLinks>
  );
  expect(view.container).toMatchSnapshot();
});
