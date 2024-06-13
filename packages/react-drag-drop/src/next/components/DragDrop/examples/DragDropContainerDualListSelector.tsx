import React from 'react';
import {
  DualListSelector,
  DualListSelectorPane,
  DualListSelectorList,
  DualListSelectorControlsWrapper,
  DualListSelectorControl
} from '@patternfly/react-core';
import { DragDropContainer, DraggableObject, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

export const DragDropContainerDualListSelector: React.FunctionComponent = () => {
  const [ignoreNextOptionSelect, setIgnoreNextOptionSelect] = React.useState(false);
  const [availableOptions, setAvailableOptions] = React.useState<DraggableObject[]>([
    { id: 'Kiwi', content: 'Kiwi', props: { key: 'Kiwi', isSelected: false } },
    { id: 'Pear', content: 'Pear', props: { key: 'Pear', isSelected: false } },
    { id: 'Cantaloupe', content: 'Cantaloupe', props: { key: 'Cantaloupe', isSelected: false } }
  ]);

  const [chosenOptions, setChosenOptions] = React.useState<DraggableObject[]>([
    { id: 'Honeydew', content: 'Honeydew', props: { key: 'Honeydew', isSelected: false } },
    { id: 'Blackberry', content: 'Blackberry', props: { key: 'Blackberry', isSelected: false } },
    { id: 'Watermelon', content: 'Watermelon', props: { key: 'Watermelon', isSelected: false } },
    { id: 'Cherry', content: 'Cherry', props: { key: 'Cherry', isSelected: false } }
  ]);

  const [allDraggableItems, setAllItems] = React.useState<Record<string, DraggableObject[]>>({
    available: availableOptions.map((option, index) => ({
      ...option,
      props: {
        key: option.props.key,
        isSelected: option.props.isSelected,
        onOptionSelect: (e) => onOptionSelect(e, index, true)
      }
    })),
    chosen: chosenOptions.map((option, index) => ({
      ...option,
      props: {
        key: option.props.key,
        isSelected: option.props.isSelected,
        onOptionSelect: (e) => onOptionSelect(e, index, true)
      }
    }))
  });

  const handleDragOperation = (_event: any, items: Record<string, DraggableObject[]>) => {
    setAvailableOptions(items.available);
    setChosenOptions(items.chosen);
    setAllItems(items);
  };

  const moveSelected = (fromAvailable) => {
    const sourceOptions = fromAvailable ? availableOptions : chosenOptions;
    const destinationOptions = fromAvailable ? chosenOptions : availableOptions;
    for (let i = 0; i < sourceOptions.length; i++) {
      const option = sourceOptions[i];
      if (option.props.isSelected) {
        sourceOptions.splice(i, 1);
        destinationOptions.push(option);
        option.props.isSelected = false;
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
      setChosenOptions([...availableOptions, ...chosenOptions]);
      setAvailableOptions([]);
    } else {
      setAvailableOptions([...chosenOptions, ...availableOptions]);
      setChosenOptions([]);
    }
  };

  const onOptionSelect = (event, index, isChosen) => {
    if (ignoreNextOptionSelect) {
      setIgnoreNextOptionSelect(false);
      return;
    }
    if (isChosen) {
      const newChosen = [...chosenOptions];
      newChosen[index].props.isSelected = !chosenOptions[index].props.isSelected;
      setChosenOptions(newChosen);
    } else {
      const newAvailable = [...availableOptions];
      newAvailable[index].props.isSelected = !availableOptions[index].props.isSelected;
      setAvailableOptions(newAvailable);
    }
  };

  return (
    <DragDropContainer
      items={allDraggableItems}
      onDrop={handleDragOperation}
      onContainerMove={handleDragOperation}
      onCancel={handleDragOperation}
      variant="DualListSelector"
    >
      <DualListSelector>
        <DualListSelectorPane
          title="Available"
          status={`${availableOptions.filter((x) => x.props.isSelected).length} of ${
            availableOptions.length
          } options selected`}
        >
          <DualListSelectorList>
            <NewDroppable id="available" items={allDraggableItems.available} variant="DualListSelectorList" />
          </DualListSelectorList>
        </DualListSelectorPane>
        <DualListSelectorControlsWrapper aria-label="Selector controls">
          <DualListSelectorControl
            isDisabled={!availableOptions.some((option) => option.props.isSelected)}
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
            isDisabled={!chosenOptions.some((option) => option.props.isSelected)}
            aria-label="Remove selected"
          >
            <AngleLeftIcon />
          </DualListSelectorControl>
        </DualListSelectorControlsWrapper>
        <DualListSelectorPane
          title="Chosen"
          status={`${chosenOptions.filter((x) => x.props.isSelected).length} of ${chosenOptions.length} options selected`}
          isChosen
        >
          <DualListSelectorList>
            <NewDroppable id="chosen" items={allDraggableItems.chosen} variant="DualListSelectorList" />
          </DualListSelectorList>
        </DualListSelectorPane>
      </DualListSelector>
    </DragDropContainer>
  );
};
