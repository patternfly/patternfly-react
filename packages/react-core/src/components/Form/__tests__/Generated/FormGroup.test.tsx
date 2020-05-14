/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { FormGroup } from '../../FormGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('FormGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <FormGroup
      children={<>ReactNode</>}
      className={"''"}
      label={<div>ReactNode</div>}
      labelIcon={<p>ReactElement</p>}
      isRequired={false}
      validated={'default'}
      isInline={false}
      hasNoPaddingTop={false}
      helperText={<div>ReactNode</div>}
      helperTextInvalid={<div>ReactNode</div>}
      fieldId={'string'}
    />
  );
  expect(view).toMatchSnapshot();
});
