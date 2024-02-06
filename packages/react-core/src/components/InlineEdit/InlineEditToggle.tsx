import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';

/** An edit button that must be displayed when the inline edit's edit mode is not enabled. This should be
 * passed to the inline edit component's customEditToggle property when a more composable approach is desired.
 */

export interface InlineEditToggleProps {
  /** Adds an accessible name to the edit button. */
  'aria-label'?: string;
  /** Custom icon for the edit button. This will override the default icon. */
  icon?: React.ReactNode;
  /** Action to perform when the edit button is clicked. */
  onToggle?: (event: React.MouseEvent) => void;
}

export const InlineEditToggle: React.FunctionComponent<InlineEditToggleProps> = ({
  'aria-label': ariaLabel = 'Enable edit mode',
  onToggle,
  icon
}: InlineEditToggleProps) => (
  <div className={css(styles.inlineEditAction, styles.modifiers.enableEditable)}>
    <Button variant="plain" aria-label={ariaLabel} onClick={onToggle}>
      {icon || <PencilAltIcon />}
    </Button>
  </div>
);
InlineEditToggle.displayName = 'InlineEditToggle';
