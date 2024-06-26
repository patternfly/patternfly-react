import React from 'react';
import {
  DualListSelector,
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorListItem,
  DualListSelectorControlsWrapper,
  DualListSelectorControl
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

interface Option {
  text: string;
  selected: boolean;
  isVisible: boolean;
}

export const DualListSelectorBasic: React.FunctionComponent = () => {
  const [availableOptions, setAvailableOptions] = React.useState<Option[]>([
    { text: 'Option 1', selected: false, isVisible: true },
    { text: 'Option 2', selected: false, isVisible: true },
    { text: 'Option 3', selected: false, isVisible: true },
    { text: 'Option 4', selected: false, isVisible: true }
  ]);
  const [chosenOptions, setChosenOptions] = React.useState<Option[]>([]);

  // callback for moving selected options between lists
  const moveSelected = (fromAvailable: boolean) => {
    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;
    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;
    for (let i = 0; i < sourceOptions.length; i++) {
      const option = sourceOptions[i];
      if (option.selected && option.isVisible) {
        sourceOptions.splice(i, 1);
        destinationOptions.push(option);
        option.selected = false;
        i--;
      }
    }
    if (fromAvailable) {
      setAvailableOptions([...sourceOptions]);
      setChosenOptions([...destinationOptions]);
    } else {
      setChosenOptions([...sourceOptions]);
      setAvailableOptions([...destinationOptions]);
    }
  };

  // callback for moving all options between lists
  const moveAll = (fromAvailable: boolean) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter((option) => option.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter((option) => !option.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter((option) => option.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter((option) => !option.isVisible)]);
    }
  };

  // callback when option is selected
  const onOptionSelect = (
    event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent,
    index: number,
    isChosen: boolean
  ) => {
    if (isChosen) {
      const newChosen = [...chosenOptions];
      newChosen[index].selected = !chosenOptions[index].selected;
      setChosenOptions(newChosen);
    } else {
      const newAvailable = [...availableOptions];
      newAvailable[index].selected = !availableOptions[index].selected;
      setAvailableOptions(newAvailable);
    }
  };

  return (
    <DualListSelector>
      <DualListSelectorPane
        title="Available options"
        status={`${availableOptions.filter((option) => option.selected && option.isVisible).length} of ${
          availableOptions.filter((option) => option.isVisible).length
        } options selected`}
      >
        <DualListSelectorList>
          {availableOptions.map((option, index) =>
            option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`basic-available-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, false)}
              >
                {option.text}
              </DualListSelectorListItem>
            ) : null
          )}
        </DualListSelectorList>
      </DualListSelectorPane>
      <DualListSelectorControlsWrapper>
        <DualListSelectorControl
          isDisabled={!availableOptions.some((option) => option.selected)}
          onClick={() => moveSelected(true)}
          aria-label="Add selected"
          icon={<AngleRightIcon />}
        />
        <DualListSelectorControl
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
          icon={<AngleDoubleRightIcon />}
        />
        <DualListSelectorControl
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
          icon={<AngleDoubleLeftIcon />}
        />
        <DualListSelectorControl
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some((option) => option.selected)}
          aria-label="Remove selected"
          icon={<AngleLeftIcon />}
        />
      </DualListSelectorControlsWrapper>
      <DualListSelectorPane
        title="Chosen options"
        status={`${chosenOptions.filter((option) => option.selected && option.isVisible).length} of ${
          chosenOptions.filter((option) => option.isVisible).length
        } options selected`}
        isChosen
      >
        <DualListSelectorList>
          {chosenOptions.map((option, index) =>
            option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`composable-basic-chosen-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, true)}
              >
                {option.text}
              </DualListSelectorListItem>
            ) : null
          )}
        </DualListSelectorList>
      </DualListSelectorPane>
    </DualListSelector>
  );
};
