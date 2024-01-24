import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';

export interface InlineEditToggleProps {
  /** Action to perform on the edit icon click. */
  onToggle?: (event: React.MouseEvent) => void;
}

export const InlineEditToggle: React.FunctionComponent<InlineEditToggleProps> = ({
  onToggle
}: InlineEditToggleProps) => (
  <div className={css(styles.inlineEditAction, styles.modifiers.enableEditable)}>
    <Button variant="plain" aria-label="Edit" onClick={onToggle}>
      <PencilAltIcon />
    </Button>
  </div>
);
InlineEditToggle.displayName = 'InlineEditToggle';
