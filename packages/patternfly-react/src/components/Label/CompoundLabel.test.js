import React from 'react';
import { shallow } from 'enzyme';
import CompoundLabel from './CompoundLabel';
import { noop } from '../../common/helpers';

const tag = {
  id: 1,
  label: 'Food - category with very long description',
  values: [
    { id: 11, label: 'Cake' },
    { id: 12, label: 'Bloody Steak from the famous Purple Cow' },
    { id: 13, label: 'Pineapple Pizza' }
  ]
};

test('snapshot test', () => {
  const view = shallow(
    <CompoundLabel key={tag.id} category={{ id: tag.id, label: tag.label }} values={tag.values} onDeleteClick={noop} />
  );
  expect(view).toMatchSnapshot();
});
