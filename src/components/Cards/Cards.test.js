import React from 'react';
import renderer from 'react-test-renderer';
import { MenuItem } from '../MenuItem';
import {
  Card,
  CardTitle,
  CardBody,
  CardGrid,
  CardHeading,
  CardFooter,
  CardLink,
  CardDropdownButton
} from './index';

test('Card is working properly', () => {
  const component = renderer.create(
    <Card accented aggregatedMini>
      Card Content
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Title is working properly', () => {
  const component = renderer.create(<CardTitle>Card Title</CardTitle>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Footer is working properly', () => {
  const component = renderer.create(
    <CardFooter>This is a Card Footer</CardFooter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Grid is working properly', () => {
  const component = renderer.create(<CardGrid>Grid Content</CardGrid>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Header is working properly', () => {
  const component = renderer.create(<CardHeading>Card Content</CardHeading>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Body is working properly', () => {
  const component = renderer.create(<CardBody>This is a Card Body</CardBody>);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Link is working properly', () => {
  const component = renderer.create(
    <CardLink
      disabled
      href="https://github.com/patternfly/patternfly-react/pull/203"
    >
      Card Content
    </CardLink>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Drop Down Button is working properly', () => {
  const component = renderer.create(
    <CardDropdownButton
      id="cardDropdownButton1"
      title="Last 30 Days"
      onClick={jest.fn()}
    >
      <MenuItem eventKey="1" active>
        Last 30 Days
      </MenuItem>
    </CardDropdownButton>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
