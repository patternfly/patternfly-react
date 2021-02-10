/**
 * This test was generated
 */
import * as React from 'react';
import { mount } from 'enzyme';
import { FindRefWrapper } from '../../FindRefWrapper';

it('FindRefWrapper should match snapshot (auto-generated)', () => {
  const view = mount(<FindRefWrapper children={<div>ReactNode</div>} onFoundRef={(foundRef: any) => {}} />);
  expect(view).toMatchSnapshot();
});
