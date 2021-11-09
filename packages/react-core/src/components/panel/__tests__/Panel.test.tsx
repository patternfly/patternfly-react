import React from 'react';
import { shallow } from 'enzyme';
import { Panel } from '../Panel';
import { PanelMain } from '../PanelMain';
import { PanelMainBody } from '../PanelMainBody';
import { PanelHeader } from '../PanelHeader';
import { PanelFooter } from '../PanelFooter';

describe('Panel', () => {
  test('renders content', () => {
    const view = shallow(<Panel>Foo</Panel>);
    expect(view).toMatchSnapshot();
  });

  test('renders content with raised styling', () => {
    const view = shallow(<Panel isRaised>Foo</Panel>);
    expect(view).toMatchSnapshot();
  });

  test('renders content with bordered styling', () => {
    const view = shallow(<Panel isBordered>Foo</Panel>);
    expect(view).toMatchSnapshot();
  });

  test('renders content with scrollable styling', () => {
    const view = shallow(<Panel isScrollable>Foo</Panel>);
    expect(view).toMatchSnapshot();
  });
});

describe('PanelMain', () => {
  test('renders content', () => {
    const view = shallow(<PanelMain>Foo</PanelMain>);
    expect(view).toMatchSnapshot();
  });
});

describe('PanelMainBody', () => {
  test('renders content', () => {
    const view = shallow(<PanelMainBody>Foo</PanelMainBody>);
    expect(view).toMatchSnapshot();
  });
});

describe('PanelHeader', () => {
  test('renders content', () => {
    const view = shallow(<PanelHeader>Foo</PanelHeader>);
    expect(view).toMatchSnapshot();
  });
});

describe('PanelFooter', () => {
  test('renders content', () => {
    const view = shallow(<PanelFooter>Foo</PanelFooter>);
    expect(view).toMatchSnapshot();
  });
});
