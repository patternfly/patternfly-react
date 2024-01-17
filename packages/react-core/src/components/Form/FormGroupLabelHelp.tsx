import React from 'react';
import { Button, ButtonProps } from '../Button';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';

export const FormGroupLabelHelp: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => (
  <Button isInline variant="plain" hasNoPadding {...props}>
    <QuestionCircleIcon />
  </Button>
);
FormGroupLabelHelp.displayName = 'FormGroupLabelHelp';
