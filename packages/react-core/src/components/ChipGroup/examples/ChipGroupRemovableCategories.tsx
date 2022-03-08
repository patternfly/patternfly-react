import React from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

export const ChipGroupRemovableCategories: React.FunctionComponent = () => {
  const [chipGroup1, setChipGroup1] = React.useState(['Chip one', 'Chip two', 'Chip three']);
  const [chipGroup2, setChipGroup2] = React.useState(['Chip one', 'Chip two', 'Chip three', 'Chip four']);

  const deleteItem = (id: string, group: string) => {
    const isGroupOne = group === 'chipGroup1';
    const copyOfChips = isGroupOne ? [...chipGroup1] : [...chipGroup2];
    const filteredCopy = copyOfChips.filter(chip => chip !== id);

    if (isGroupOne) {
      setChipGroup1(filteredCopy);
    } else {
      setChipGroup2(filteredCopy);
    }
  };

  const deleteCategory = (id: string) => {
    if (id === 'Category one') {
      setChipGroup1([]);
    } else {
      setChipGroup2([]);
    }
  };

  return (
    <React.Fragment>
      <ChipGroup categoryName="Category one" isClosable onClick={() => deleteCategory('Category one')}>
        {chipGroup1.map(currentChip => (
          <Chip key={currentChip} onClick={() => deleteItem(currentChip, 'chipGroup1')}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
      <br /> <br />
      <ChipGroup
        categoryName="Category two has a very long name"
        isClosable
        onClick={() => deleteCategory('Category two')}
      >
        {chipGroup2.map(currentChip => (
          <Chip key={currentChip} onClick={() => deleteItem(currentChip, 'chipGroup2')}>
            {currentChip}
          </Chip>
        ))}
      </ChipGroup>
    </React.Fragment>
  );
};
