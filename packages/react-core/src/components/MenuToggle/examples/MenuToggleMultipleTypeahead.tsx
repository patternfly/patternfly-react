import React from 'react';
import { MenuToggle, TextInputGroup, ChipGroup, Chip, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const typeahead: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [chips, setChips] = React.useState<string[]>(['first', 'second', 'third'])

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  return (
    <MenuToggle
      variant="typeahead"
      isFullWidth
    >
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onChange={onTextInputChange}
          id="multi-typeahead-select-input"
          autoComplete="off"
        >
          <ChipGroup aria-label="Current filters">
            {chips.map((selection, index) => (
              <Chip
                key={index}
                onClick={ev => {
                  ev.stopPropagation();
                  const copyChips = [...chips];
                  copyChips.splice(index, 1);
                  setChips(copyChips);
                }}
              >
                {selection}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities>
          {chips.length > 0 && (
            <Button
              variant="plain"
              onClick={() => {
                setInputValue('');
                setChips([]);
              }}
              aria-label="Clear input value"
            >
              <TimesIcon aria-hidden />
            </Button>
          )}
        </TextInputGroupUtilities>
      </TextInputGroup>
    </MenuToggle>
  );
}
