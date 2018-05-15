import React from 'react';
import TagView from '../components/TagView';
import renderer from 'react-test-renderer';

const assignedTags = [
  {
    tagCategory: { description: 'Name', id: 1 },
    tagValues: [{ description: 'Pepa', id: 11 }]
  }
];
function onDelete(x) {
  return x;
}
describe('Tag view', () => {
  it('match snapshot', () => {
    const component = renderer.create(
      <TagView assignedTags={assignedTags} onTagDeleteClick={onDelete} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
