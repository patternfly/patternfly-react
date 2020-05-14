/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { InternalDropdownItem } from '../../InternalDropdownItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('InternalDropdownItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <InternalDropdownItem
      children={<div>ReactNode</div>}
      className={"''"}
      listItemClassName={'string'}
      component={'a'}
      role={"'none'"}
      isDisabled={false}
      isPlainText={false}
      isHovered={false}
      href={'string'}
      tooltip={<div>ReactNode</div>}
      tooltipProps={undefined}
      index={-1}
      context={{
        keyHandler: () => {},
        sendRef: () => {}
      }}
      onClick={(event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => undefined as any}
      id={'string'}
      componentID={'string'}
      additionalChild={<div>ReactNode</div>}
      customChild={<div>ReactNode</div>}
      enterTriggersArrowDown={false}
      icon={<div>ReactNode</div>}
    />
  );
  expect(view).toMatchSnapshot();
});
