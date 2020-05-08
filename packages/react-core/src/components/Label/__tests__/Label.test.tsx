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

['blue', 'cyan', 'green', 'orange', 'purple', 'red', 'grey'].forEach(
  (color: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey') =>
    test(`label with ${color} color`, () => {
      const view = shallow(<Label color={color}>Something</Label>);
      expect(view).toMatchSnapshot();
      const outline = shallow(
        <Label color={color} variant="outline">
          Something
        </Label>
      );
      expect(outline).toMatchSnapshot();
    })
);

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
