import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { MenuItem } from '../MenuItem';
import {
  Card,
  CardTitle,
  CardBody,
  CardContainer,
  CardHeading,
  CardFooter,
  CardLink,
  CardDropdownButton
} from './index';

test('Card Title is working properly', () => {
  const component = renderer.create(
    <Card className="some-class">
      <CardTitle>Card Title</CardTitle>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Footer is working properly', () => {
  const component = renderer.create(
    <Card>
      <CardFooter>This is a Card Footer</CardFooter>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Container is working properly', () => {
  const component = renderer.create(
    <Card>
      <CardContainer />
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Header is working properly', () => {
  const component = renderer.create(
    <Card>
      <CardHeading>
        <div className="dropdown card-pf-time-frame-filter">
          <Button>
            Button
            <span className="caret" />
          </Button>
        </div>
      </CardHeading>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Body is working properly', () => {
  const component = renderer.create(
    <Card>
      <CardBody>This is a Card Body</CardBody>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Link is working properly', () => {
  const component = renderer.create(
    <CardLink href={'https://github.com/patternfly/patternfly-react/pull/203'}>
      <Icon type="pf" name="add-circle-o" /> Add New Cluster
    </CardLink>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Drop Down Button is working properly', () => {
  const component = renderer.create(
    <Card>
      <CardDropdownButton
        id="cardDropdownButton1"
        title="Last 30 Days"
        onClick={jest.fn()}
      >
        <MenuItem eventKey="1" active>
          Last 30 Days
        </MenuItem>
        <MenuItem eventKey="2">Last 60 Days</MenuItem>
        <MenuItem eventKey="3">Last 90 Days</MenuItem>
      </CardDropdownButton>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
