import { render } from '@testing-library/react';
import { DualListSelector } from '../../DualListSelector';
import React from 'react';

describe('DualListSelector', () => {
  test('basic', () => {
    const view = render(<DualListSelector availableOptions={['Option 1', 'Option 2']} id="firstTest" />);
    expect(view.container).toMatchSnapshot();
  });

  test('with search inputs', () => {
    const view = render(<DualListSelector availableOptions={['Option 1', 'Option 2']} id="secondTest" isSearchable />);
    expect(view.container).toMatchSnapshot();
  });

  test('with custom status', () => {
    const view = render(
      <DualListSelector
        availableOptions={['Option 1', 'Option 2']}
        availableOptionsStatus="Test status1"
        chosenOptionsStatus="Test status2"
        id="thirdTest"
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('basic with disabled controls', () => {
    const view = render(<DualListSelector isDisabled availableOptions={['Option 1', 'Option 2']} id="disabledTest" />);
    expect(view.container).toMatchSnapshot();
  });

  test('with tree', () => {
    const view = render(
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
    expect(view.container).toMatchSnapshot();
  });

  test('with actions', () => {
    const view = render(
      <DualListSelector
        availableOptions={['Option 1', 'Option 2']}
        chosenOptions={['Option 3', 'Option 4']}
        availableOptionsActions={[<span key={1}>TestNode1</span>]}
        chosenOptionsActions={[<span key={2}>TestNode2</span>]}
        id="fourthTest"
      />
    );
    expect(view.container).toMatchSnapshot();
  });
});
