import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Stack } from '../Stack';
import { StackItem } from '../StackItem';
import { GutterSize } from '../../../styles/gutters';

it('Stack should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Stack
      gutter={null}
			children={<>ReactNode</>}
			className={"''"}
			component={'div'}
    />);
  expect(view).toMatchSnapshot();
});

test('isMain set to true', () => {
  const view = mount(
    <Stack>
      <StackItem isFilled>Filled content</StackItem>
    </Stack>
  );
  expect(view).toMatchSnapshot();
});

test('isMain defaults to false', () => {
  const view = mount(
    <Stack>
      <StackItem>Basic content</StackItem>
    </Stack>
  );
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(
      <Stack gutter={gutter}>
        <StackItem>Basic content</StackItem>
      </Stack>
    );
    expect(view).toMatchSnapshot();
  });
});
