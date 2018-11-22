import React from 'react';
import { mount } from 'enzyme';
import {
  selectable, sortable, cellActions, cellWidth, collapsible, scopeColTransformer, headerCol, emptyCol, mapProps
} from './transformers';

describe('Transformer functions', () => {
  describe('selectable', () => {
    test('main select', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      }
      const returnedData = selectable('', { column, rowData: {} })
      expect(returnedData).toMatchObject({ className: 'pf-c-table__check' });
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls.length).toBe(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: -1, selected: false });
    });

    test('selected', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      }
      const returnedData = selectable('', { column, rowIndex: 0, rowData: { selected: true } });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__check' });
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls.length).toBe(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: 0, selected: false });
    });

    test('unselected', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      }
      const returnedData = selectable('', { column, rowIndex: 0, rowData: { selected: false } })
      expect(returnedData).toMatchObject({ className: 'pf-c-table__check' });
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls.length).toBe(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: 0, selected: true });
    });
  });

  describe('sortable', () => {
    test('unsorted', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: {}, onSort: onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__sort' });
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls.length).toBe(1);
    });

    test('asc', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: { index: 0, direction: 'asc' }, onSort: onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__sort pf-m-ascending' });
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls.length).toBe(1);
    });

    test('desc', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: { index: 0, direction: 'desc' }, onSort: onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__sort pf-m-descending' });
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls.length).toBe(1);
    });
  })

  test('cellActions', () => {
    const actions = [{
      title: '',
      onClick: jest.fn()
    }];
    const returnedData = cellActions(actions)('', { rowIndex: 0 });
    expect(returnedData).toMatchObject({ className: 'pf-c-table__action' });
    const view = mount(returnedData.children);
    view.find('.pf-c-dropdown button').first().simulate('click');
    expect(view.find('.pf-c-dropdown__menu li a').length).toBe(1);
    view.find('.pf-c-dropdown__menu li a').simulate('click');
    expect(actions[0].onClick.mock.calls.length).toBe(1);
  });
  describe('cellWidth', () => {
    const widths = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 'max']
    widths.forEach((width) => test(`${width}`, () => {
      expect(cellWidth(width)()).toEqual({ className: `pf-m-width-${width}` });
    }))
  })
  test('collapsible', () => {
    const onCollapse = jest.fn();
    const rowData = {
      isOpen: true
    };
    const column = {
      extraParams: { onCollapse: onCollapse }
    }
    const returnedData = collapsible('', { rowIndex: 0, rowData, column });
    expect(returnedData).toMatchObject({ className: 'pf-c-table__toggle' });
    const view = mount(returnedData.children);
    view.find('button').simulate('click');
    expect(onCollapse.mock.calls.length).toBe(1);
  });
  test('scopeColTransformer', () => {
    expect(scopeColTransformer()).toEqual({ scope: 'col' });
  });

  test('headerCol', () => {
    expect(headerCol()).toEqual({ component: 'th' });
  });

  test('emptyCol', () => {
    expect(emptyCol('')).toEqual({ scope: '' });
    expect(emptyCol('some')).toEqual({});
  });

  test('mapProps', () => {
    const rowData = {
      some: { props: { one: 1 } }
    };
    expect(mapProps(undefined, { property: 'some', rowData })).toEqual({ one: 1 });
    expect(mapProps(undefined, { property: 'wrong', rowData })).toEqual({});
  });
});
