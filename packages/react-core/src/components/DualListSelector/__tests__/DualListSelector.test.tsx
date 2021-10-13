import { mount } from 'enzyme';
import { DualListSelector } from '../../DualListSelector';
import React from 'react';

describe('DualListSelector', () => {
  test('basic', () => {
    const view = mount(<DualListSelector availableOptions={['Option 1', 'Option 2']} id="firstTest" />);
    expect(view).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const view = mount(<DualListSelector availableOptions={['Option 1', 'Option 2']} id="secondTest" isSearchable />);
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

  test('basic with disabled controls', () => {
    const view = mount(<DualListSelector isDisabled availableOptions={['Option 1', 'Option 2']} id="disabledTest" />);
    expect(view).toMatchSnapshot();
  });

  test('with tree', () => {
    const view = mount(
      <DualListSelector
        availableOptions={[
          { id: 'O1', text: 'Opt1', defaultExpanded: true, children: [{ id: 'O3', text: 'Opt3' }] },
          { id: 'O2', text: 'Opt2' }
        ]}
        availableOptionsStatus="Test status1"
        chosenOptionsStatus="Test status2"
        id="tree-test"
        isTree
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
