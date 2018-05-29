import React from 'react';
import ValueSelector from '../components/InnerComponents/ValueSelector';
import renderer from 'react-test-renderer';

const tagValues = [
  { description: 'Asterix', id: 1 },
  { description: 'Obelix', id: 2 }
];
const selectedTagValue = { description: 'Obelix', id: 2 };
function onChange(x) {
  return x;
}

test('match snapshot', () => {
  const component = renderer.create(
    <ValueSelector
      tagValues={tagValues}
      onTagValueChange={onChange}
      selectedOption={selectedTagValue}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('match snapshot without multiple values', () => {
  const component = renderer.create(
    <ValueSelector
      tagValues={tagValues}
      onTagValueChange={onChange}
      selectedOption={selectedTagValue}
      multiValue={false}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
