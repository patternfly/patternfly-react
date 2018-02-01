import React from 'react';
import renderer from 'react-test-renderer';
import { Card, CardLinkWithIcon } from './index';
import { Button } from '../Button';
import { Icon } from '../Icon';

test('Card Title is working properly', () => {
  const component = renderer.create(
    <Card className="some-class">
      <Card.Title>Card Title</Card.Title>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Footer is working properly', () => {
  const component = renderer.create(
    <Card>
      <Card.Footer>This is a Card Footer</Card.Footer>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Container is working properly', () => {
  const component = renderer.create(
    <Card>
      <Card.Container />
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Header is working properly', () => {
  const component = renderer.create(
    <Card>
      <Card.Heading>
        <div className="dropdown card-pf-time-frame-filter">
          <Button>
            Button
            <span className="caret" />
          </Button>
        </div>
      </Card.Heading>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Body is working properly', () => {
  const component = renderer.create(
    <Card>
      <Card.Body>This is a Card Body</Card.Body>
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Link with Icon is working properly', () => {
  const component = renderer.create(
    <CardLinkWithIcon
      href={'https://github.com/patternfly/patternfly-react/pull/203'}
    >
      <Icon type="pf" name="add-circle-o" /> Add New Cluster
    </CardLinkWithIcon>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Card Time Frame Filter is working properly', () => {
  const component = renderer.create(
    <Card>
      <Card.TimeFrameFilter />
    </Card>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
