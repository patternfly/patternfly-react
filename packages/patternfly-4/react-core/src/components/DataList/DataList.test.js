import React from 'react';
import { shallow } from 'enzyme';
import DataList from './DataList';
import DataListItem from './DataListItem';
import DataListCell from './DataListCell';
import DataListToggle from './DataListToggle';
import { Button } from '../Button';

describe('DataList', () => {
  test('List default', () => {
    const view = shallow(<DataList aria-label="this is a simple list" />);
    expect(view).toMatchSnapshot();
  });

  test('List', () => {
    const view = shallow(<DataList key="list-id-1" className="data-list-custom" aria-label="this is a simple list" />);
    expect(view).toMatchSnapshot();
  });

  test('Item default', () => {
    const view = shallow(<DataListItem key="item-id-1" aria-labelledby="item-1" />);
    expect(view).toMatchSnapshot();
  });

  test('Item expanded', () => {
    const view = shallow(<DataListItem aria-labelledby="item-1" isExpanded />);
    expect(view.props().className).toBe('pf-c-data-list__item pf-m-expanded');
  });

  test('Item', () => {
    const view = shallow(<DataListItem className="data-list-item-custom" aria-labelledby="item-1" />);
    expect(view).toMatchSnapshot();
  });

  test('Cell default', () => {
    const view = shallow(<DataListCell>Secondary</DataListCell>);
    expect(view).toMatchSnapshot();
  });

  test('Cell', () => {
    const view = shallow(
      <DataListCell key="list-id-1" id="primary-item" className="data-list-custom">
        Primary Id
      </DataListCell>
    );
    expect(view).toMatchSnapshot();
  });

  test('Cell with width modifier', () => {
    [
      { width: 1, class: '' },
      { width: 2, class: 'pf-m-flex-2' },
      { width: 3, class: 'pf-m-flex-3' },
      { width: 4, class: 'pf-m-flex-4' },
      { width: 5, class: 'pf-m-flex-5' }
    ].forEach(testCase => {
      const view = shallow(
        <DataListCell width={testCase.width} key="list-id-1" id="primary-item">
          Primary Id
        </DataListCell>
      );
      testCase.class === ''
        ? expect(view.props().className).toBe('pf-c-data-list__cell')
        : expect(view.props().className).toBe(`pf-c-data-list__cell ${testCase.class}`);
    });
  });

  test('Toggle default', () => {
    const view = shallow(
      <DataListToggle aria-label="Toggle details for" aria-labelledby="ex-toggle2 ex-item2" id="ex-toggle2" />
    );

    expect(view.find(Button).props()['aria-label']).toBe('Toggle details for');
    expect(view.find(Button).props()['aria-labelledby']).toBe('ex-toggle2 ex-item2');
    expect(view.find(Button).props()['aria-expanded']).toBe(false);
    expect(view.find(Button).props().id).toBe('ex-toggle2');
    expect(view.find(Button).props().id).toBe('ex-toggle2');
  });

  test('Toggle expanded', () => {
    const view = shallow(
      <DataListToggle
        aria-label="Toggle details for"
        aria-labelledby="ex-toggle2 ex-item2"
        id="ex-toggle2"
        isExpanded
      />
    );
    expect(view.find(Button).props()['aria-expanded']).toBe(true);
  });
});
