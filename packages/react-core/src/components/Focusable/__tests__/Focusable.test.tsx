import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../../Card/Card';
import { Button } from '../../Button/Button';
import { Focusable } from '../Focusable';

test('Focusable', () => {
  const view = shallow(<Focusable>test</Focusable>);
  expect(view).toMatchSnapshot();
});

test('Focus non-interactive html', () => {
  const view = shallow(
    <Focusable aria-label="Example focusable article">
      <article>Article element</article>
    </Focusable>
  );
  expect(view).toMatchSnapshot();
});

test('Focus non-interactive component', () => {
  const view = shallow(
    <Focusable aria-label="Example focusable Card with positive tabIndex" tabIndex={2}>
      <Card>Card element</Card>
    </Focusable>
  );
  expect(view).toMatchSnapshot();
});

test('Focus disabled button', () => {
  const view = shallow(
    <Focusable withContainer component="span">
      <Button isDisabled>Button text</Button>
    </Focusable>
  );
  expect(view).toMatchSnapshot();
});
