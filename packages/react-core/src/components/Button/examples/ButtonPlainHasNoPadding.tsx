import React from 'react';
import { Button } from '@patternfly/react-core';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';

export const ButtonPlainHasNoPadding: React.FunctionComponent = () => (
  <p>
    This is an example of a button
    <Button variant="plain" hasNoPadding aria-label="More info" icon={<QuestionCircleIcon />} />
    which is placed inline with text
  </p>
);
