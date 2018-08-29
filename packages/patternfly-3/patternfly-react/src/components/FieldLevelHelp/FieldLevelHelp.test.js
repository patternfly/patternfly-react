import React from 'react';
import { mount } from 'enzyme';

import FieldLevelHelp from './FieldLevelHelp';

test('FieldLevelHelp renders properly', () => {
  const component = mount(<FieldLevelHelp id="fieldlevelname1">Port Number</FieldLevelHelp>);

  expect(component).toMatchSnapshot();
});

test('FieldLevelHelp allows to specify mode content and close', () => {
  const component = mount(
    <div>
      <label>Port Number</label>
      <FieldLevelHelp
        id="fieldlevelname1"
        mode="popover"
        content="Enter Port number between the 4000-5000 range"
        rootClose
        close
        placement="top"
        buttonClass="additionl-button-class"
      />
    </div>
  );

  expect(component).toMatchSnapshot();
});
