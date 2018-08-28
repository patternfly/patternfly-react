import React from 'react';
import { mount } from 'enzyme';
import { Paginator, PaginationRow, PAGINATION_VIEW, PAGINATION_VIEW_TYPES } from './index';

const testPaginationRowSnapshot = (viewType, pageSizeDropUp = true) => {
  const component = mount(
    <PaginationRow
      viewType={viewType}
      className="paginator"
      pagination={{
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15, 25, 50]
      }}
      amountOfPages={5}
      pageSizeDropUp={pageSizeDropUp}
      itemCount={75}
      itemsStart={1}
      itemsEnd={15}
      messages={{
        firstPage: 'עמוד ראשון',
        previousPage: 'עמוד קודם',
        nextPage: 'עמוד הבא',
        lastPage: 'עמוד אחרון',
        perPage: 'לדף',
        of: 'שֶׁל'
      }}
      onSubmit={jest.fn()}
      onPerPageSelect={jest.fn()}
      onFirstPage={jest.fn()}
      onPreviousPage={jest.fn()}
      onPageInput={jest.fn()}
      onNextPage={jest.fn()}
      onLastPage={jest.fn()}
    />
  );

  expect(component.render()).toMatchSnapshot();
};

PAGINATION_VIEW_TYPES.forEach(viewType => {
  test(`PaginationRow ${viewType} renders properly`, () => {
    testPaginationRowSnapshot(viewType);
  });
});

test('PaginationRow.Items renders', () => {
  const component = mount(<PaginationRow.Items itemCount={55} itemsStart={0} itemsEnd={10} messagesOf="of" />);

  expect(component.render()).toMatchSnapshot();
});

test('PaginationRow renders with dropdown page size selector', () => {
  testPaginationRowSnapshot(PAGINATION_VIEW.LIST, false);
});

test('PaginationRow.Back renders', () => {
  const component = mount(
    <PaginationRow.Back
      page={1}
      messagesFirstPage="first page"
      messagesPreviousPage="previous page"
      onFirstPage={jest.fn()}
      onPreviousPage={jest.fn()}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('PaginationRow.ButtonGroup renders', () => {
  const component = mount(<PaginationRow.ButtonGroup className="custom-class" />);

  expect(component.render()).toMatchSnapshot();
});

test('PaginationRow.Forward renders', () => {
  const component = mount(
    <PaginationRow.Forward
      page={1}
      amountOfPages={4}
      messagesNextPage="Next Page"
      messagesLastPage="Last Page"
      onNextPage={jest.fn()}
      onLastPage={jest.fn()}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('PaginationRow.AmountOfPages renders', () => {
  const component = mount(<PaginationRow.AmountOfPages messagesOf="of" amountOfPages={4} />);

  expect(component.render()).toMatchSnapshot();
});

test('Paginator renders properly the first page', () => {
  const component = mount(
    <Paginator
      itemCount={75}
      pagination={{
        page: 1,
        perPage: 10,
        perPageOptions: [5, 10, 15]
      }}
      viewType={PAGINATION_VIEW.LIST}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('Paginator renders properly a middle page', () => {
  const component = mount(
    <Paginator
      itemCount={75}
      pagination={{
        page: 4,
        perPage: 10,
        perPageOptions: [5, 10, 15]
      }}
      viewType={PAGINATION_VIEW.LIST}
    />
  );

  expect(component.render()).toMatchSnapshot();
});

test('Paginator renders properly the last page', () => {
  const component = mount(
    <Paginator
      itemCount={75}
      pagination={{
        page: 8,
        perPage: 10,
        perPageOptions: [5, 10, 15]
      }}
      viewType={PAGINATION_VIEW.LIST}
    />
  );

  expect(component.render()).toMatchSnapshot();
});
