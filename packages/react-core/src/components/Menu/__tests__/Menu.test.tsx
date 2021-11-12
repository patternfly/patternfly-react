import React from 'react';
import { mount } from 'enzyme';
import { Menu } from '../Menu';

test('should render Menu successfully', () => {
    const view = mount(
        <Menu activeItemId={0} onSelect={jest.fn()}>
            content
        </Menu>
    );
    expect(view).toMatchSnapshot();
});

describe('with isPlain', () => {
    test('should render Menu with plain styles applied', () => {
        const view = mount(
            <Menu activeItemId={0} onSelect={jest.fn()} isPlain>
                content
            </Menu>
        );
        expect(view.find('div.pf-m-plain')).toMatchSnapshot();
    });
});

describe('with isScrollable', () => {
    test('should render Menu with scrollable styles applied', () => {
        const view = mount(
            <Menu activeItemId={0} onSelect={jest.fn()} isScrollable>
                content
            </Menu>
        );
        expect(view.find('div.pf-m-scrollable')).toMatchSnapshot();
    });
});

describe('with isNavFlyout', () => {
    test('should render Menu with nav flyout styles applied', () => {
        const view = mount(
            <Menu activeItemId={0} onSelect={jest.fn()} isNavFlyout>
                content
            </Menu>
        );
        expect(view.find('div.pf-m-nav')).toMatchSnapshot();
    });
});