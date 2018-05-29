import React from 'react';
import TagCategory from '../components/InnerComponents/TagCategory';
import renderer from 'react-test-renderer';

const tagCategory = { description: 'animal', id: 1 };
const tagValues = [
  { description: 'duck', id: 1 },
  { description: 'lion', id: 2 }
];
function onDelete(x) {
  return x;
}

describe('TagCategory Component', () => {
  it('match snapshot', () => {
    const component = renderer.create(
      <TagCategory
        tagCategory={tagCategory}
        tagValues={tagValues}
        onTagDeleteClick={onDelete}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
