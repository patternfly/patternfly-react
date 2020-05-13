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
      variant={'default'}
      isOpen={false}
      header={null}
      description={null}
      title={"''"}
      aria-labelledby={'string'}
      aria-label={"''"}
      aria-describedby={'string'}
      showClose={true}
      width={-1}
      footer={null}
      actions={[]}
      onClose={() => undefined as any}
      boxId={'string'}
      labelId={'string'}
      descriptorId={'string'}
      disableFocusTrap={false}
      hasNoBodyWrapper={false}
    />
  );
  expect(view).toMatchSnapshot();
});
