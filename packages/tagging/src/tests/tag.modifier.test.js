import React from 'react';
import TagModifier from '../components/InnerComponents/TagModifier';
import CategoryModifier from '../components/InnerComponents/CategoryModifier';
import ValueModifier from '../components/InnerComponents/ValueModifier';
import renderer from 'react-test-renderer';

const tagCategories = [
  { description: 'Name', id: 1 },
  { description: 'Number', id: 2 },
  { description: 'Animal', id: 3 },
  { description: 'Food', id: 4 }
];
const animalValues = [
  { description: 'Duck', id: 31 },
  { description: 'Cat', id: 32 },
  { description: 'Dog', id: 33 }
];

const selectedTagCategory = { description: 'animal', id: 1 };
const selectedTagValue = { description: 'duck', id: 1 };

function onChange(x) {
  return x;
}

describe('Tagging modifier', () => {
  it('match snapshot', () => {
    const component = renderer.create(
      <TagModifier>
        <CategoryModifier
          selectedTagCategory={selectedTagCategory}
          onTagCategoryChange={onChange}
          tagCategories={tagCategories}
        />
        <ValueModifier
          onTagValueChange={onChange}
          selectedTagValue={selectedTagValue}
          multiValue={false}
          tagValues={animalValues}
        />
      </TagModifier>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
