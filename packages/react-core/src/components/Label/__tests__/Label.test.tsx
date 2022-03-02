import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { Label } from '../Label';

test('label', () => {
  const view = render(<Label>Something</Label>);
  expect(view.container).toMatchSnapshot();
  const outline = render(<Label variant="outline">Something</Label>);
  expect(outline).toMatchSnapshot();
  const compact = render(<Label isCompact>Something</Label>);
  expect(compact).toMatchSnapshot();
});

test('label with href', () => {
  const view = render(<Label href="#">Something</Label>);
  expect(view.container).toMatchSnapshot();
  const outline = render(
    <Label href="#" variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

test('label with close button', () => {
  const view = render(<Label onClose={jest.fn()}>Something</Label>);
  expect(view.container).toMatchSnapshot();
  const outline = render(
    <Label onClose={jest.fn()} variant="outline">
      Something
    </Label>
  );
  expect(outline).toMatchSnapshot();
});

['blue', 'cyan', 'green', 'orange', 'purple', 'red', 'grey'].forEach(
  (color: string) =>
    test(`label with ${color} color`, () => {
      const view = render(<Label color={color as any}>Something</Label>);
      expect(view.container).toMatchSnapshot();
      const outline = render(
        <Label color={color as any} variant="outline">
          Something
        </Label>
      );
      expect(outline.container).toMatchSnapshot();
    })
);

test('label with additional class name', () => {
  const view = render(<Label className="klass1">Something</Label>);
  expect(view.container).toMatchSnapshot();
});

test('label with additional class name and props', () => {
  const view = render(
    <Label className="class-1" id="label-1" data-label-name="something">
      Something
    </Label>
  );
  expect(view.container).toMatchSnapshot();
});

test('label with truncation', () => {
  const view = render(<Label isTruncated>Something very very very very very long that should be truncated</Label>);
  expect(view.container).toMatchSnapshot();
});

test('editable label', () => {
  const view = mount(
    <Label onClose={jest.fn()}
           onEditCancel={jest.fn()}
           onEditComplete={jest.fn()}
           isEditable>Something</Label>);
  const button = view.find('button.pf-c-label__content');
  expect(button.length).toBe(1);
  expect(view).toMatchSnapshot();

  button.simulate('click');
  const clickedButton = view.find('button.pf-c-label__content');
  expect(clickedButton.length).toBe(0);
  expect(view).toMatchSnapshot();
});
