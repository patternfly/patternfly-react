import React from 'react';
import { mount } from 'enzyme';
import { CatalogItemHeader } from './index';

const pfBrand = '<PatternFly Brand Image here>';
const ngnix = '<NGNIX Brand Image here>';

test('CatalogItemHeader renders properly', () => {
  const component = mount(
    <div>
      <CatalogItemHeader
        className="test-catalog-item-header-class"
        iconImg={pfBrand}
        title="Patternfly-React"
        vendor={
          <span>
            sponsored by <a href="redhat.com">Red Hat</a>
          </span>
        }
      />
      <CatalogItemHeader
        iconImg={pfBrand}
        title="PatternFly"
        vendor={
          <span>
            sponsored by <a href="redhat.com">Red Hat</a>
          </span>
        }
      />
      <CatalogItemHeader iconImg={ngnix} title="Nginx" />
      <CatalogItemHeader
        className="test-catalog-item-header-icon-class"
        iconClass="fa fa-codepen"
        title="CodePen"
        vendor="provided by CodePen"
      />
    </div>
  );
  expect(component.render()).toMatchSnapshot();
});
