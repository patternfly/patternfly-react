import { CatalogItemHeader } from './CatalogItemHeader';
import React from 'react';
import { shallow } from 'enzyme';

test('simple catalog item header', () => {
  const view = shallow(
    <CatalogItemHeader
      title="PatternFly"
      vendor={
        <span>
          provided by <a href="redhat.com">Red Hat</a>
        </span>
      }
    />
  );
  expect(view).toMatchSnapshot();
});
