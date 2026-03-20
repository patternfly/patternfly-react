import { useState } from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import RhMicronsCloseIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-close-icon';

export const TextInputGroupUtilitiesAndIcon: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');

  /** callback for updating the inputValue state in this component so that the input can be controlled */
  const handleInputChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setInputValue(value);
  };

  /** show the input clearing button only when the input is not empty */
  const showClearButton = !!inputValue;

  /** render the utilities component only when a component it contains is being rendered */
  const showUtilities = showClearButton;

  /** callback for clearing the text input */
  const clearInput = () => {
    setInputValue('');
  };

  return (
    <TextInputGroup>
      <TextInputGroupMain icon={<SearchIcon />} value={inputValue} onChange={handleInputChange} />
      {showUtilities && (
        <TextInputGroupUtilities>
          {showClearButton && (
            <Button
              variant="plain"
              onClick={clearInput}
              aria-label="Clear button and input"
              icon={<RhMicronsCloseIcon />}
            />
          )}
        </TextInputGroupUtilities>
      )}
    </TextInputGroup>
  );
};
