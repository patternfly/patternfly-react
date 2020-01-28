import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Split } from '../Split';
import { SplitItem } from '../SplitItem';
import { GutterSize } from '../../../styles/gutters';

it('Split should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Split
      gutter={null}
			children={<>ReactNode</>}
			className={"''"}
			component={'div'}
    />);
  expect(view).toMatchSnapshot();
});

test('isFilled', () => {
  const view = mount(
    <Split>
      <SplitItem isFilled>Main content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

test('isFilled defaults to false', () => {
  const view = mount(
    <Split>
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(
      <Split gutter={gutter}>
        <SplitItem>Basic Content</SplitItem>
      </Split>
    );
    expect(view).toMatchSnapshot();
  });
});
