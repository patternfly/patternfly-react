import React from 'react';
import TagModifier from '../components/TagModifier';
import renderer from 'react-test-renderer';

const tags = [
  {
    description: 'Name',
    id: 1,
    values: [{ description: 'Pepa', id: 11 }, { description: 'Franta', id: 12 }]
  },
  {
    description: 'Number',
    id: 2,
    values: [{ description: '1', id: 21 }, { description: '2', id: 22 }]
  },
  {
    description: 'Animal',
    id: 3,
    values: [
      { description: 'Duck', id: 31 },
      { description: 'Cat', id: 32 },
      { description: 'Dog', id: 33 }
    ]
  },
  {
    description: 'Food',
    id: 4,
    values: [
      { description: 'Steak', id: 41 },
      { description: 'Duck', id: 42 },
      { description: 'Salad', id: 43 }
    ]
  },
  {
    description: 'Something',
    id: 5,
    values: [
      { description: 'Knedlik', id: 51 },
      {
        description:
          'Daenerys Stormborn of the House Targaryen, First of Her Name,...and Mother of Dragons',
        id: 52
      }
    ]
  }
];

const selectedTagCategory = { description: 'animal', id: 1 };
const selectedTagValue = { description: 'duck', id: 1 };

function onChange(x) {
  return x;
}
describe('Tagging modifier', () => {
  it('match snapshot', () => {
    const component = renderer.create(
      <TagModifier
        tags={tags}
        onTagValueChange={onChange}
        onTagCategoryChange={onChange}
        selectedTagCategory={selectedTagCategory}
        selectedTagValue={selectedTagValue}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
