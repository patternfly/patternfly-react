import React from 'react';
import renderer from 'react-test-renderer';

import Paginator from './Paginator';

test('Paginator renders', () => {
  const component = renderer.create(
    <Paginator
      className="paginator"
      pagination={{
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15, 25, 50]
      }}
      amountOfPages={5}
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
      onPerPageSelect={jest.fn()}
      onFirstPage={jest.fn()}
      onPreviousPage={jest.fn()}
      onPageInput={jest.fn()}
      onNextPage={jest.fn()}
      onLastPage={jest.fn()}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
