import React from 'react';
import {
  MenuToggle,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const MenuToggleTypeahead: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const onTextInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  return (
    <MenuToggle variant="typeahead" isFullWidth aria-label="Typeahead menu toggle">
      <TextInputGroup isPlain>
        <TextInputGroupMain
          value={inputValue}
          onChange={onTextInputChange}
          id="typeahead-select-input"
          autoComplete="off"
        />

        <TextInputGroupUtilities>
          {!!inputValue && (
            <Button
              variant="plain"
              onClick={() => setInputValue('')}
              aria-label="Clear input value"
              icon={<TimesIcon aria-hidden />}
            />
          )}
        </TextInputGroupUtilities>
      </TextInputGroup>
    </MenuToggle>
  );
};
