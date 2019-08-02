import { mount } from 'enzyme';
import {
  selectable,
  sortable,
  cellActions,
  cellWidth,
  collapsible,
  scopeColTransformer,
  headerCol,
  emptyCol,
  mapProps,
  expandable,
  expandedRow,
  wrappable,
  textCenter
} from './transformers';
import { DropdownDirection, DropdownPosition } from '@patternfly/react-core';

const testCellActions = ({ actions, actionResolver, areActionsDisabled, rowData, expectDisabled }) => {
  const returnedData = cellActions(actions, actionResolver, areActionsDisabled)('', {
    rowIndex: 0,
    rowData,
    column: {
      extraParams: {
        dropdownPosition: DropdownPosition.right,
        dropdownDirection: DropdownDirection.down
      }
    }
  });

  if (actionResolver) {
    actions = actionResolver(rowData);
  }

  expect(returnedData).toMatchObject({ className: 'pf-c-table__action' });

  if (!actions || actions.length === 0) {
    expect(returnedData.children).toBeUndefined();
  } else {
    const view = mount(returnedData.children);
    view
      .find('.pf-c-dropdown button')
      .first()
      .simulate('click');
    expect(view.find('.pf-c-dropdown__menu li a')).toHaveLength(expectDisabled ? 0 : 1);
  }
};

describe('Transformer functions', () => {
  describe('selectable', () => {
    test('main select', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      };
      const returnedData = selectable('', { column, rowData: {} });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__check' });
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: -1, selected: false });
    });

    test('selected', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      };
      const returnedData = selectable('', { column, rowIndex: 0, rowData: { selected: true } });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__check' });
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: 0, selected: false });
    });

    test('unselected', () => {
      const onSelect = jest.fn((_event, selected, rowId) => ({ selected, rowId }));
      const column = {
        extraParams: { onSelect }
      };
      const returnedData = selectable('', { column, rowIndex: 0, rowData: { selected: false } });
      expect(returnedData).toMatchSnapshot();
      const view = mount(returnedData.children);
      view.find('input').simulate('change');
      expect(onSelect.mock.calls).toHaveLength(1);
      expect(onSelect.mock.results[0].value).toMatchObject({ rowId: 0, selected: true });
    });
  });

  describe('sortable', () => {
    test('unsorted', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: {}, onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__sort' });
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });

    test('asc', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: { index: 0, direction: 'asc' }, onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchSnapshot();
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });

    test('desc', () => {
      const onSort = jest.fn();
      const column = { extraParams: { sortBy: { index: 0, direction: 'desc' }, onSort } };
      const returnedData = sortable('', { column, columnIndex: 0 });
      expect(returnedData).toMatchObject({ className: 'pf-c-table__sort pf-m-selected' });
      const view = mount(returnedData.children);
      view.find('button').simulate('click');
      expect(onSort.mock.calls).toHaveLength(1);
    });
  });

  test('simpleCellActions', () => {
    const actions = [
      {
        title: 'Some',
        onClick: jest.fn()
      }
    ];

    const actionConfigs = [
      {
        actions: []
      },
      {
        actions
      },
      {
        actionResolver: () => null
      },
      {
        actionResolver: () => actions
      },
      {
        actionResolver: () => actions,
        areActionsDisabled: () => false
      },
      {
        actions,
        rowData: {
          disableActions: true
        },
        expectDisabled: true
      },
      {
        actionResolver: () => actions,
        areActionsDisabled: () => true,
        expectDisabled: true
      }
    ];

    actionConfigs.forEach(testCellActions);
  });

  describe('cellWidth', () => {
    const widths = [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 'max'];
    widths.forEach(width =>
      test(`${width}`, () => {
        expect(cellWidth(width)()).toEqual({ className: `pf-m-width-${width}` });
      })
    );
  });

  test('collapsible', () => {
    const onCollapse = jest.fn();
    const rowData = {
      isOpen: true
    };
    const column = {
      extraParams: { onCollapse }
    };
    const returnedData = collapsible('', { rowIndex: 0, rowData, column });
    expect(returnedData).toMatchObject({ className: 'pf-c-table__toggle' });
    const view = mount(returnedData.children);
    view.find('button').simulate('click');
    expect(onCollapse.mock.calls).toHaveLength(1);
  });

  test('collapsible full width', () => {
    const onCollapse = jest.fn();
    const rowData = {
      fullWidth: true
    };
    const column = {
      extraParams: { onCollapse }
    };
    const returnedData = collapsible('', { rowIndex: 0, rowData, column });
    expect(returnedData).toMatchObject({ className: false, isVisible: false });
  });

  describe('expandable', () => {
    test('with parent', () => {
      const returned = expandable('test', { rowIndex: 2, rowData: { parent: 1 }, column: { extraParams: {} } });
      const view = mount(returned);
      expect(view.find('div.pf-c-table__expandable-row-content')).toHaveLength(1);
      expect(view).toMatchSnapshot();
    });

    test('no parent', () => {
      expect(expandable('test', { rowData: {}, column: { extraParams: {} } })).toBe('test');
    });
  });

  describe('expandedRow', () => {
    test('with parent', () => {
      const returned = expandedRow(5)(
        { title: 'test' },
        { rowIndex: 2, rowData: { parent: 1 }, column: { extraParams: {} } }
      );
      expect(returned).toMatchObject({ colSpan: 5, id: 'expanded-content2' });
    });

    test('no parent', () => {
      expect(expandedRow(5)({ title: 'test' }, { rowData: {}, column: { extraParams: {} } })).toBe(false);
    });

    test('full width', () => {
      const returned = expandedRow(5)(
        { title: 'test' },
        { rowIndex: 2, rowData: { parent: 1, fullWidth: true }, column: { extraParams: {} } }
      );
      expect(returned).toMatchObject({ colSpan: 6, id: 'expanded-content2' });
    });

    test('no padding', () => {
      const returned = expandedRow(5)(
        { title: 'test' },
        { rowIndex: 2, rowData: { parent: 1, noPadding: true }, column: { extraParams: {} } }
      );
      expect(returned).toMatchObject({ colSpan: 5, id: 'expanded-content2', className: 'pf-m-no-padding' });
    });
  });

  test('scopeColTransformer', () => {
    expect(scopeColTransformer()).toEqual({ scope: 'col' });
  });

  test('headerCol', () => {
    const returned = headerCol('some-id')('value', { rowIndex: 0 });
    expect(returned).toMatchObject({ component: 'th' });
    const view = mount(returned.children);
    expect(view.find('#some-id0')).toHaveLength(1);
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

  test('textCenter', () => {
    expect(textCenter()).toEqual({ textCenter: true });
  });

  test('wrappable', () => {
    expect(wrappable()).toEqual({ className: 'pf-m-wrap' });
  });
});
