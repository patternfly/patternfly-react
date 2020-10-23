import { mount } from 'enzyme';
import { FormAlert } from '../FormAlert';
import React from 'react';

describe('Form Alert component', () => {
  test('should render form group required variant', () => {
    const view = mount(
      <FormAlert></FormAlert>
    );
    expect(view).toMatchSnapshot();
  });
});
