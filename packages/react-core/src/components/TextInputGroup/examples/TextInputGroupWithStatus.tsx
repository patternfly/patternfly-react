import React from 'react';
import {
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  Button,
  ValidatedOptions,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export const TextInputGroupWithStatus: React.FunctionComponent = () => {
  const [successValue, setSuccessValue] = React.useState('Success validation');
  const [warningValue, setWarningValue] = React.useState('Warning validation with custom non-status icon at start');
  const [errorValue, setErrorValue] = React.useState(
    'Error validation with custom non-status icon at start and utilities'
  );

  /** show the input clearing button only when the input is not empty */
  const showClearButton = !!errorValue;

  /** render the utilities component only when a component it contains is being rendered */
  const showUtilities = showClearButton;

  /** callback for clearing the text input */
  const clearInput = () => {
    setErrorValue('');
  };

  return (
    <Flex direction={{ default: 'column' }} rowGap={{ default: 'rowGapSm' }}>
      <FlexItem>
        <TextInputGroup validated={ValidatedOptions.success}>
          <TextInputGroupMain value={successValue} onChange={(_event, value) => setSuccessValue(value)} />
        </TextInputGroup>
      </FlexItem>
      <FlexItem>
        <TextInputGroup validated={ValidatedOptions.warning}>
          <TextInputGroupMain
            icon={<SearchIcon />}
            value={warningValue}
            onChange={(_event, value) => setWarningValue(value)}
          />
        </TextInputGroup>
      </FlexItem>
      <FlexItem>
        <TextInputGroup validated={ValidatedOptions.error}>
          <TextInputGroupMain
            icon={<SearchIcon />}
            value={errorValue}
            onChange={(_event, value) => setErrorValue(value)}
          />
          {showUtilities && (
            <TextInputGroupUtilities>
              {showClearButton && (
                <Button variant="plain" onClick={clearInput} aria-label="Clear button and input" icon={<TimesIcon />} />
              )}
            </TextInputGroupUtilities>
          )}
        </TextInputGroup>
      </FlexItem>
    </Flex>
  );
};
