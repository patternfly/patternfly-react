import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxHeader } from '../ModalBoxHeader';
import { TitleLevel } from '../../Title';

it('ModalBoxHeader should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ModalBoxHeader
      children={<>ReactNode</>}
			className={"''"}
			hideTitle={false}
			headingLevel={'h1'}
    />);
  expect(view).toMatchSnapshot();
});

test('ModalBoxHeader Test', () => {
  const view = shallow(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});

test('ModalBoxHeader Test with H3', () => {
  const view = shallow(<ModalBoxHeader headingLevel={TitleLevel.h3}>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});

test('ModalBoxHeader Test hideTitle', () => {
  const view = shallow(<ModalBoxHeader hideTitle>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});
