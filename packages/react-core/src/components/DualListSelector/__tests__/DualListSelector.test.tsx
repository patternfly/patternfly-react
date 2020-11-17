import { mount } from 'enzyme';
import { DualListSelector } from '../../DualListSelector';
import React from 'react';

describe('DualListSelector', () => {
  test('basic', () => {
    const view = mount(
      <DualListSelector availableOptions={['Option 1', 'Option 2']} id="firstTest"/>
    );
    expect(view).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const view = mount(
      <DualListSelector availableOptions={['Option 1', 'Option 2']} id="secondTest" isSearchable/>
    );
    expect(view).toMatchSnapshot();
  });

  test('with custom status', () => {
    const view = mount(
      <DualListSelector
        availableOptions={['Option 1', 'Option 2']}
        availableOptionsStatus="Test status1"
        chosenOptionsStatus="Test status2"
        id="thirdTest"
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('with actions', () => {
    const view = mount(
      <DualListSelector
        availableOptions={['Option 1', 'Option 2']}
        chosenOptions={['Option 3', 'Option 4']}
        availableOptionsActions={[<span key={1}>TestNode1</span>]}
        chosenOptionsActions={[<span key={2}>TestNode2</span>]}
        id="fourthTest"
      />
    );
    expect(view).toMatchSnapshot();
  });
});
