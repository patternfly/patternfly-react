/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownItem } from '../../DropdownItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DropdownItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DropdownItem
      children={<>ReactNode</>}
      className={"''"}
      listItemClassName={'string'}
      component={'a'}
      isDisabled={false}
      isPlainText={false}
      isHovered={false}
      href={'string'}
      tooltip={null}
      tooltipProps={undefined}
      additionalChild={<div>ReactNode</div>}
      customChild={<div>ReactNode</div>}
      icon={null}
    />
  );
  expect(view).toMatchSnapshot();
});
