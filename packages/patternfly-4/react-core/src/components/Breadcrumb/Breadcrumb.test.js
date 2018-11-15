import React from 'react';
import { shallow } from 'enzyme';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbItemDivider
} from '@patternfly/react-core';

describe(`Breadcrumb`, () => {
  test('Link', () => {
    const view = shallow(<BreadcrumbLink href="#">Section Link</BreadcrumbLink>);
    expect(view).toMatchSnapshot();
  });

  test('Link is current', () => {
    const view = shallow(
      <BreadcrumbLink href="#" isCurrent>
        Section Link
      </BreadcrumbLink>
    );
    expect(view).toMatchSnapshot();
  });

  test('Item', () => {
    const view = shallow(<BreadcrumbItem>Section</BreadcrumbItem>);
    expect(view).toMatchSnapshot();
  });

  test('Item Divider', () => {
    const view = shallow(<BreadcrumbItemDivider />);
    expect(view).toMatchSnapshot();
  });

  test('List', () => {
    const view = shallow(
      <BreadcrumbList>
        <BreadcrumbItem>Section</BreadcrumbItem>
      </BreadcrumbList>
    );
    expect(view).toMatchSnapshot();
  });

  test('with Heading', () => {
    const view = shallow(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Home</BreadcrumbLink>
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrent>
              Section Title
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(view).toMatchSnapshot();
  });

  test('without Home Link', () => {
    const view = shallow(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            Section Home
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrent>
              Section Title
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(view).toMatchSnapshot();
  });
});
