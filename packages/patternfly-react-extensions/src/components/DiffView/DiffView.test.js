import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DiffView } from './index';
import { diffMock, patchMock, emptyState } from './_mocks_/DiffViewMocks';

test('Diff View renders w/Patch properly', () => {
  const component = shallow(<DiffView {...patchMock} />);
  expect(toJson(component.render())).toMatchSnapshot();
});

test('Diff View renders w/Text properly', () => {
  const component = shallow(<DiffView {...diffMock} />);
  expect(toJson(component.render())).toMatchSnapshot();
});

test('Diff View renders emptyState', () => {
  const component = shallow(<DiffView {...emptyState} />);
  expect(toJson(component.render())).toMatchSnapshot();
});
