import * as React from 'react';
import { FormSection } from '../FormSection';
import { mount } from 'enzyme';

test('Check form section example against snapshot', () => {
  const Section = <FormSection />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
