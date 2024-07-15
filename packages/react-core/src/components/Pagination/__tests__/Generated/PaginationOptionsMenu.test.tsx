/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PaginationOptionsMenu } from '../../PaginationOptionsMenu';
// any missing imports can usually be resolved by adding them here
import { PaginationToggleTemplateProps } from '../..';

it('PaginationOptionsMenu should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PaginationOptionsMenu
      className={"''"}
      widgetId={"''"}
      isDisabled={false}
      dropDirection={'up'}
      perPageOptions={[]}
      itemsPerPageTitle={"'Items per page'"}
      page={42}
      perPageSuffix={"'per page'"}
      itemsTitle={"'items'"}
      itemCount={0}
      firstIndex={0}
      lastIndex={0}
      isLastFullPageShown={false}
      perPage={0}
      lastPage={42}
      toggleTemplate={({ firstIndex, lastIndex, itemCount, itemsTitle }: PaginationToggleTemplateProps) => (
        <React.Fragment>
          <b>
            {firstIndex} - {lastIndex}
          </b>
          Custom toggle template of<b>{itemCount}</b> {itemsTitle}
        </React.Fragment>
      )}
      onPerPageSelect={() => null as any}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
