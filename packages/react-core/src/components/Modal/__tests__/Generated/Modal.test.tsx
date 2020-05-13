/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../../Modal';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Modal should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Modal
      children={<div>ReactNode</div>}
      className={"''"}
      isOpen={false}
      header={<div>ReactNode</div>}
      title={"''"}
      aria-labelledby={''}
      aria-label={"''"}
      aria-describedby={"''"}
      showClose={true}
      footer={<div>ReactNode</div>}
      actions={[]}
      onClose={() => undefined as any}
      width={1}
      appendTo={(typeof document !== 'undefined' && document.body) || null}
      disableFocusTrap={true}
      description={<div>ReactNode</div>}
      variant={'default'}
      hasNoBodyWrapper={false}
      id={'string'}
    />
  );
  expect(view).toMatchSnapshot();
});
