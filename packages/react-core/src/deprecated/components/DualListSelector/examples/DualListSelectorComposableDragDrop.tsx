import React from 'react';
import {
  DragDrop,
  Draggable,
  Droppable,
  DraggableItemPosition,
  DualListSelector as DLSDeprecated,
  DualListSelectorPane as DLSPaneDeprecated,
  DualListSelectorList as DLSListDeprecated,
  DualListSelectorListItem as DLSListItemDeprecated,
  DualListSelectorControlsWrapper as DLSControlsWrapperDeprecated,
  DualListSelectorControl as DLSControlDeprecated
} from '@patternfly/react-core/deprecated';
import AngleDoubleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-left-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import AngleDoubleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-double-right-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';

export const DualListSelectorComposableDragDrop: React.FunctionComponent = () => {
  const [ignoreNextOptionSelect, setIgnoreNextOptionSelect] = React.useState(false);
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

  const moveAll = (fromAvailable: boolean) => {
    if (fromAvailable) {
      setChosenOptions([...availableOptions.filter((option) => option.isVisible), ...chosenOptions]);
      setAvailableOptions([...availableOptions.filter((option) => !option.isVisible)]);
    } else {
      setAvailableOptions([...chosenOptions.filter((option) => option.isVisible), ...availableOptions]);
      setChosenOptions([...chosenOptions.filter((option) => !option.isVisible)]);
    }
  };

  const onOptionSelect = (
    event: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent,
    index: number,
    isChosen: boolean
  ) => {
    if (ignoreNextOptionSelect) {
      setIgnoreNextOptionSelect(false);
      return;
    }
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

  const onDrop = (source: DraggableItemPosition, dest: DraggableItemPosition | undefined) => {
    if (dest) {
      const newList = [...chosenOptions];
      const [removed] = newList.splice(source.index, 1);
      newList.splice(dest.index, 0, removed);
      setChosenOptions(newList);
      return true;
    }
    return false;
  };

  return (
    <DLSDeprecated>
      <DLSPaneDeprecated
        title="Available"
        status={`${availableOptions.filter((option) => option.selected && option.isVisible).length} of ${
          availableOptions.filter((option) => option.isVisible).length
        } options selected`}
      >
        <DLSListDeprecated>
          {availableOptions.map((option, index) =>
            option.isVisible ? (
              <DLSListItemDeprecated
                key={index}
                isSelected={option.selected}
                id={`composable-drag-drop-available-option-${index}`}
                onOptionSelect={(e) => onOptionSelect(e, index, false)}
              >
                {option.text}
              </DLSListItemDeprecated>
            ) : null
          )}
        </DLSListDeprecated>
      </DLSPaneDeprecated>
      <DLSControlsWrapperDeprecated>
        <DLSControlDeprecated
          isDisabled={!availableOptions.some((option) => option.selected)}
          onClick={() => moveSelected(true)}
          aria-label="Add selected"
        >
          <AngleRightIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          isDisabled={availableOptions.length === 0}
          onClick={() => moveAll(true)}
          aria-label="Add all"
        >
          <AngleDoubleRightIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          isDisabled={chosenOptions.length === 0}
          onClick={() => moveAll(false)}
          aria-label="Remove all"
        >
          <AngleDoubleLeftIcon />
        </DLSControlDeprecated>
        <DLSControlDeprecated
          onClick={() => moveSelected(false)}
          isDisabled={!chosenOptions.some((option) => option.selected)}
          aria-label="Remove selected"
        >
          <AngleLeftIcon />
        </DLSControlDeprecated>
      </DLSControlsWrapperDeprecated>
      <DragDrop
        onDrag={() => {
          setIgnoreNextOptionSelect(true);
          return true;
        }}
        onDrop={onDrop}
      >
        <DLSPaneDeprecated
          title="Chosen"
          status={`${chosenOptions.filter((option) => option.selected && option.isVisible).length} of ${
            chosenOptions.filter((option) => option.isVisible).length
          } options selected`}
          isChosen
        >
          <Droppable hasNoWrapper>
            <DLSListDeprecated>
              {chosenOptions.map((option, index) =>
                option.isVisible ? (
                  <Draggable key={index} hasNoWrapper>
                    <DLSListItemDeprecated
                      isSelected={option.selected}
                      id={`composable-drag-drop-chosen-option-${index}`}
                      onOptionSelect={(e) => onOptionSelect(e, index, true)}
                      isDraggable
                    >
                      {option.text}
                    </DLSListItemDeprecated>
                  </Draggable>
                ) : null
              )}
            </DLSListDeprecated>
          </Droppable>
        </DLSPaneDeprecated>
      </DragDrop>
    </DLSDeprecated>
  );
};
