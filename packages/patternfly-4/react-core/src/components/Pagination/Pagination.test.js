import React from 'react';
import { mount } from 'enzyme';
import { Pagination, PaginationVariant } from './index';
import { values } from 'd3';

describe('component render', () => {
  test('should render correctly top', () => {
    const wrapper = mount(<Pagination itemCount={20} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly bottom', () => {
    const wrapper = mount(<Pagination itemCount={20} variant={PaginationVariant.bottom} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('limited number of pages', () => {
    const wrapper = mount(<Pagination itemCount={20} perPage={20} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('last page', () => {
    const wrapper = mount(<Pagination itemCount={20} perPage={10} page={2}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('custom perPageOptions', () => {
    const wrapper = mount(<Pagination itemCount={40} perPageOptions={[{ title: 'some', value: 1 }]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('no items', () => {
    const wrapper = mount(<Pagination itemCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('custom start end', () => {
    const wrapper = mount(<Pagination itemCount={40} itemsStart={5} itemsEnd={15} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('titles', () => {
    const wrapper = mount(<Pagination itemCount={40} titles={{ items: 'values', pages: 'books' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('up drop direction', () => {
    const wrapper = mount(<Pagination itemCount={40} dropDirection="up" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('API', () => {
  const onSetPage = jest.fn();
  const onFirst = jest.fn();
  const onLast = jest.fn();
  const onPrevious = jest.fn();
  const onNext = jest.fn();
  const onPerPage = jest.fn();
});
