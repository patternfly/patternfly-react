import { CatalogItemHeader } from './CatalogItemHeader';
import React from 'react';
import { render } from '@testing-library/react';

test('simple catalog item header', () => {
  const view = render(
    <CatalogItemHeader
      title="PatternFly"
      vendor={
        <span>
          provided by <a href="redhat.com">Red Hat</a>
        </span>
      }
    />
  );
  expect(view.container).toMatchSnapshot();
});
