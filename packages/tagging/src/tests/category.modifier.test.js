import React from 'react';
import CategoryModifier from '../components/InnerComponents/CategoryModifier';
import renderer from 'react-test-renderer';

const selectedTagCategory = { description: 'animal', id: 1 };
const onTagCategoryChange = jest.fn();
const tagCategories = [
  { description: 'Name', id: 1 },
  { description: 'Number', id: 2 },
  { description: 'Animal', id: 3 },
  { description: 'Food', id: 4 }
];

describe('TagCategory Component', () => {
  it('match snapshot', () => {
    const component = renderer.create(
      <CategoryModifier
        selectedTagCategory={selectedTagCategory}
        onTagCategoryChange={onTagCategoryChange}
        tagCategories={tagCategories}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
