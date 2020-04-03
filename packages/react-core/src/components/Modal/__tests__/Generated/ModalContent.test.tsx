/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalContent } from '../../ModalContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalContent should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ModalContent
      children={<div>ReactNode</div>}
      className={"''"}
      variant={'large'}
      isOpen={false}
      header={null}
      title={'string'}
      hideTitle={false}
      showClose={true}
      width={-1}
      footer={null}
      actions={[]}
      onClose={() => undefined as any}
      id={"''"}
      disableFocusTrap={false}
    />
  );
  expect(view).toMatchSnapshot();
});
