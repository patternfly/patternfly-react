import React from 'react';
import { disclosureCount, singlePick, multipPick } from './helpers';
import { shallow } from 'enzyme';
import { ProgressiveDisclosureItem } from './ProgressiveDisclosureItem';

test('disclosureCount counts number of progress disclosure items', () => {
  [
    [<div />, 0],
    [
      <div>
        <ProgressiveDisclosureItem />
      </div>,
      1
    ],
    [
      <div>
        <li>Hello</li>
        <ProgressiveDisclosureItem />
      </div>,
      1
    ],
    [
      <div>
        <ProgressiveDisclosureItem />
        <ProgressiveDisclosureItem />
      </div>,
      2
    ]
  ].forEach(testCase => {
    expect(disclosureCount(shallow(testCase[0]).props().children)).toBe(testCase[1]);
  });
});

test('single pick can have only 1 item selected', () => {
  [
    {
      selected: [2],
      ix: 2,
      expected: []
    },
    {
      selected: [2],
      ix: 1,
      expected: [1]
    },
    {
      selected: [],
      ix: 1,
      expected: [1]
    }
  ].forEach(testCase => {
    expect(singlePick(testCase.selected, testCase.ix)).toEqual(testCase.expected);
  });
});

test('multiple pick can have more than item selected', () => {
  [
    {
      selected: [2],
      ix: 2,
      expected: []
    },
    {
      selected: [2],
      ix: 1,
      expected: [2, 1]
    },
    {
      selected: [],
      ix: 1,
      expected: [1]
    }
  ].forEach(testCase => {
    expect(multipPick(testCase.selected, testCase.ix)).toEqual(testCase.expected);
  });
});
