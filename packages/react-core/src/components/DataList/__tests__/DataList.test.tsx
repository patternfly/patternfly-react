import React from 'react';

import { render, screen } from '@testing-library/react';

import { DataList } from '../DataList';
import { DataListItem } from '../DataListItem';
import { DataListAction } from '../DataListAction';
import { DataListCell } from '../DataListCell';
import { DataListToggle } from '../DataListToggle';
import { DataListItemCells } from '../DataListItemCells';
import { DataListItemRow } from '../DataListItemRow';
import { DataListContent } from '../DataListContent';
import { Button } from '../../Button';
import { DropdownItem, Dropdown, KebabToggle, DropdownPosition } from '../../Dropdown';

describe('DataList', () => {
  test('List default', () => {
    const view = render(<DataList aria-label="this is a simple list" />);
    expect(view.container).toMatchSnapshot();
  });

  test('List compact', () => {
    const view = render(<DataList aria-label="this is a simple list" isCompact />);
    expect(view.container).toMatchSnapshot();
  });

  describe('DataList variants', () => {
    ['none', 'always', 'sm', 'md', 'lg', 'xl', '2xl'].forEach(oneBreakpoint => {
      test(`Breakpoint - ${oneBreakpoint}`, () => {
        const view = render(<DataList aria-label="this is a simple list" gridBreakpoint={oneBreakpoint as any} />);
        expect(view.container).toMatchSnapshot();
      });
    });
  });

  test('List draggable', () => {
    const view = render(<DataList aria-label="this is a simple list" isCompact onDragFinish={jest.fn()} />);
    expect(view.container).toMatchSnapshot();
  });

  test('List', () => {
    const view = render(<DataList key="list-id-1" className="data-list-custom" aria-label="this is a simple list" />);
    expect(view.container).toMatchSnapshot();
  });

  test('Item default', () => {
    render(
      <DataListItem key="item-id-1" aria-labelledby="item-1">
        test
      </DataListItem>
    );
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('Item expanded', () => {
    render(
      <DataListItem aria-labelledby="item-1" isExpanded>
        test
      </DataListItem>
    );
    expect(screen.getByRole('listitem').className).toBe('pf-c-data-list__item pf-m-expanded');
  });

  test('Item', () => {
    const view = render(
      <DataListItem className="data-list-item-custom" aria-labelledby="item-1">
        test
      </DataListItem>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('item row default', () => {
    const view = render(<DataListItemRow>test</DataListItemRow>);
    expect(view.container).toMatchSnapshot();
  });

  test('Cell default', () => {
    const view = render(<DataListCell>Secondary</DataListCell>);
    expect(view.container).toMatchSnapshot();
  });

  test('Cells', () => {
    const view = render(
      <DataListItemCells
        dataListCells={[
          <DataListCell key="list-id-1" id="primary-item" className="data-list-custom">
            Primary Id
          </DataListCell>,
          <DataListCell key="list-id-2" id="primary-item" className="data-list-custom">
            Primary Id 2
          </DataListCell>
        ]}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Cell with width modifier', () => {
    [
      { width: 1, class: '' },
      { width: 2, class: 'pf-m-flex-2' },
      { width: 3, class: 'pf-m-flex-3' },
      { width: 4, class: 'pf-m-flex-4' },
      { width: 5, class: 'pf-m-flex-5' }
    ].forEach((testCase, index) => {
      const testId = `cell-test-id-${index}`;

      render(
        <DataListCell data-testid={testId} width={testCase.width as any} key={index}>
          Primary Id
        </DataListCell>
      );

      const dataListCell = screen.getByTestId(testId);

      testCase.class === ''
        ? expect(dataListCell.className).toBe('pf-c-data-list__cell')
        : expect(dataListCell.className).toBe(`pf-c-data-list__cell ${testCase.class}`);
    });
  });

  test('Cell with text modifiers', () => {
    [
      { wrapModifier: null as any, class: '' },
      { wrapModifier: 'breakWord', class: 'pf-m-break-word' },
      { wrapModifier: 'nowrap', class: 'pf-m-nowrap' },
      { wrapModifier: 'truncate', class: 'pf-m-truncate' }
    ].forEach((testCase, index) => {
      const testId = `cell-test-id-${index}`;

      render(
        <DataListCell data-testid={testId} wrapModifier={testCase.wrapModifier} key={index}>
          Primary Id
        </DataListCell>
      );

      const dataListCell = screen.getByTestId(testId);

      testCase.class === ''
        ? expect(dataListCell.className).toBe('pf-c-data-list__cell')
        : expect(dataListCell.className).toBe(`pf-c-data-list__cell ${testCase.class}`);
    });
  });

  test('Toggle default with aria label', () => {
    render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" />);

    expect(screen.getByRole('button').getAttribute('aria-labelledby')).toEqual(null);
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('false');
  });

  test('Toggle expanded', () => {
    render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded />);
    expect(screen.getByRole('button').getAttribute('aria-expanded')).toEqual('true');
  });

  test('DataListAction dropdown', () => {
    const view = render(
      <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action" isPlainButtonAction>
        <Dropdown
          isPlain
          position={DropdownPosition.right}
          toggle={<KebabToggle />}
          dropdownItems={[
            <DropdownItem component="button" onClick={jest.fn()} key="action-1">
              action-1
            </DropdownItem>,
            <DropdownItem component="button" onClick={jest.fn()} key="action-2">
              action-2
            </DropdownItem>
          ]}
        />
      </DataListAction>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('DataListAction button', () => {
    const view = render(
      <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action">
        <Button id="delete-item-1">Delete</Button>
      </DataListAction>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('DataListAction visibility - show button when lg', () => {
    render(
      <DataListAction
        visibility={{ default: 'hidden', lg: 'visible' }}
        aria-labelledby="check-action-item2 check-action-action2"
        id="check-action-action2"
        aria-label="Actions"
      >
        <Button variant="primary">Primary</Button>
      </DataListAction>
    );

    expect(screen.getByRole('button').parentElement.className).toContain('pf-m-hidden');
    expect(screen.getByRole('button').parentElement.className).toContain('pf-m-visible-on-lg');
  });

  test('DataListAction visibility - hide button on 2xl', () => {
    render(
      <DataListAction
        visibility={{ '2xl': 'hidden' }}
        aria-labelledby="check-action-item2 check-action-action2"
        id="check-action-action2"
        aria-label="Actions"
      >
        <Button variant="primary">Primary</Button>
      </DataListAction>
    );

    expect(screen.getByRole('button').parentElement.className).toContain('pf-m-hidden-on-2xl');
  });

  test('DataListContent', () => {
    const view = render(<DataListContent aria-label="Primary Content Details"> test</DataListContent>);
    expect(view.container).toMatchSnapshot();
  });

  test('DataListContent hasNoPadding', () => {
    const view = render(
      <DataListContent aria-label="Primary Content Details" hidden hasNoPadding>
        test
      </DataListContent>
    );
    expect(view.container).toMatchSnapshot();
  });
});
