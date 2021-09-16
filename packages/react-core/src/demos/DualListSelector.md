---
id: Dual list selector
section: components
---
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

## Demos

### Reordering lists using drag and drop

```js
import React from 'react';
import { 
  DragDrop,
  Droppable,
  Draggable,
  DualListSelector, 
  DualListSelectorPane,
  DualListSelectorListItem,
  DualListSelectorControlsWrapper,
  DualListSelectorControl,
} from '@patternfly/react-core';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

const ComposableDualListSelector = () => {
  const [availableOptions, setAvailableOptions] = React.useState([
    { text: 'Apple', selected: false, isVisible: true },
    { text: 'Banana', selected: false, isVisible: true },
    { text: 'Pineapple', selected: false, isVisible: true }
  ]);
  const [chosenOptions, setChosenOptions] = React.useState([
    { text: 'Orange', selected: false, isVisible: true },
    { text: 'Grape', selected: false, isVisible: true },
    { text: 'Peach', selected: false, isVisible: true },
    { text: 'Strawberry', selected: false, isVisible: true }
  ]);

  const moveSelected = (fromAvailable) => {
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
  
  const moveAll = (fromAvailable) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter(x => x.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter(x => !x.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter(x => x.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter(x => !x.isVisible)]);
    }
  };
  
  const onOptionSelect = (event, index, isChosen) => {
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
  
  const onDrop = (source, dest) => {
    if (dest){
      const newList = [...chosenOptions];
      const [removed] = newList.splice(source.index, 1);
      newList.splice(dest.index, 0, removed);
      setChosenOptions(newList);
      return true;
    }
    return false;
  };

  return (
    <DualListSelector>
      <DualListSelectorPane
        title="Available"
        status={`${availableOptions.filter(x => x.selected && x.isVisible).length} of ${availableOptions.filter(x => x.isVisible).length} options selected`}
      >
          {availableOptions.map((option, index) => {
            return option.isVisible ? (
              <DualListSelectorListItem
                key={index}
                isSelected={option.selected}
                id={`composable-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, false)}
              >
                {option.text}
              </DualListSelectorListItem>
            ) : null;
          })}
      </DualListSelectorPane>
      <DualListSelectorControlsWrapper
        aria-label="Selector controls"
      >
        <DualListSelectorControl
          isDisabled={!availableOptions.some(option => option.selected)}
          onClick={() => moveSelected(true)}
          aria-label="Add selected"
        >
          <AngleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
        >
          <AngleDoubleRightIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
        >
          <AngleDoubleLeftIcon />
        </DualListSelectorControl>
        <DualListSelectorControl
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some(option => option.selected)}
          aria-label="Remove selected"
        >
          <AngleLeftIcon />
        </DualListSelectorControl>
      </DualListSelectorControlsWrapper>
      <DragDrop onDrop={onDrop}>
        <DualListSelectorPane
          title="Chosen"
          status={`${chosenOptions.filter(x => x.selected && x.isVisible).length} of ${chosenOptions.filter(x => x.isVisible).length} options selected`}
          isChosen
        >
          <Droppable>
          {chosenOptions.map((option, index) => {
            return option.isVisible ? (
              <Draggable key={index}>
                <DualListSelectorListItem
                  isSelected={option.selected}
                  id={`composable-option-${index}`}
                  onOptionSelect={(e) => onOptionSelect(e, index, true)}
                  isDraggable
                >
                  {option.text}
                </DualListSelectorListItem>
              </Draggable>
            ) : null;
          })}
          </Droppable>
        </DualListSelectorPane>
      </DragDrop>
    </DualListSelector>
  );
}
```
