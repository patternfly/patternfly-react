import { TextInputGroup, TextInputGroupMain } from '@rh-felt/react-core';

export const TextInputGroupDisabled: React.FunctionComponent = () => (
  <TextInputGroup isDisabled>
    <TextInputGroupMain value="Disabled" type="text" aria-label="Disabled text input group example input" />
  </TextInputGroup>
);
