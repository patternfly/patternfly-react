import React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../Label';

test('label', () => {
  const view = shallow(<Label>Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(<Label variant="outline">Something</Label>);
  expect(outline).toMatchSnapshot();
});

test('label with href', () => {
  const view = shallow(<Label href="#">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label href="#" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with close button', () => {
  const view = shallow(<Label onClose={jest.fn()}>Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label onClose={jest.fn()} variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with blue color', () => {
  const view = shallow(<Label color="blue">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="blue" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with green color', () => {
  const view = shallow(<Label color="green">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="green" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with orange color', () => {
  const view = shallow(<Label color="orange">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="orange" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with red color', () => {
  const view = shallow(<Label color="red">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="red" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with purple color', () => {
  const view = shallow(<Label color="purple">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="purple" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with cyan color', () => {
  const view = shallow(<Label color="cyan">Something</Label>);
  expect(view).toMatchSnapshot();
  const outline = shallow(
    <Label color="cyan" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with additional class name', () => {
  const view = shallow(<Label className="klass1">Something</Label>);
  expect(view).toMatchSnapshot();
});

test('label with additional class name and props', () => {
  const view = shallow(
    <Label className="class-1" id="label-1" data-label-name="something">
      Something
    </Label>
  );
  expect(view).toMatchSnapshot();
});
