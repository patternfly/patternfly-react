/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggle } from '../../DropdownToggle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DropdownToggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DropdownToggle
      id={"''"}
      children={<>ReactNode</>}
      className={"''"}
      isOpen={false}
      onToggle={(_isOpen: boolean) => undefined as any}
      parentRef={null}
      isActive={false}
      isPlain={false}
      isDisabled={false}
      isPrimary={false}
      icon={null}
      toggleIndicator={() => <p>ReactElementType</p>}
      splitButtonItems={[]}
      splitButtonVariant={'checkbox'}
      aria-label={'string'}
      aria-haspopup={true}
      type={'button'}
      onEnter={(event?: React.MouseEvent<HTMLButtonElement>) => undefined as void}
    />
  );
  expect(view).toMatchSnapshot();
});
