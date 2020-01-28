import * as React from 'react';
import { shallow } from 'enzyme';
import { BreadcrumbHeading } from '../BreadcrumbHeading';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('BreadcrumbHeading should match snapshot (auto-generated)', () => {
  const view = shallow(
    <BreadcrumbHeading
      children={<>ReactNode</>}
			className={"''"}
			to={"null"}
			target={"null"}
			component={'a'}
    />);
  expect(view).toMatchSnapshot();
});

describe('BreadcrumbHeading component', () => {
  test('should render default breadcrumbHeading', () => {
    const view = shallow(<BreadcrumbHeading>Item</BreadcrumbHeading>);
    expect(view).toMatchSnapshot();
  });

  test('should pass classname', () => {
    const view = shallow(<BreadcrumbHeading className="Class">Item</BreadcrumbHeading>);
    expect(view).toMatchSnapshot();
  });

  test('should pass custom id', () => {
    const view = shallow(<BreadcrumbHeading id="Id">Item</BreadcrumbHeading>);
    expect(view).toMatchSnapshot();
  });

  test('should render link breadcrumbTitle', () => {
    const view = shallow(<BreadcrumbHeading to="/somewhere">Item</BreadcrumbHeading>);
    expect(view).toMatchSnapshot();
  });

  test('should render breadcrumbHeading with target', () => {
    const view = shallow(
      <BreadcrumbHeading to="#here" target="_blank">
        Item
      </BreadcrumbHeading>
    );
    expect(view).toMatchSnapshot();
  });
});
