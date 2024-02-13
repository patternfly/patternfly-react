import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { Button, ButtonProps, ButtonVariant } from '../Button';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';

/** An edit button that must be displayed when the inline edit's edit mode is not enabled. This should be
 * passed to the inline edit component's customEditToggle property when more customization is desired.
 */

export interface InlineEditToggleProps extends React.HTMLProps<HTMLDivElement> {
  /** Text content rendered inside the "edit" button, in addition to the edit icon. */
  children?: string;
  /** Adds an accessible name to the "edit" button. This must be passed in when the edit button does not
   * contain any text content.
   */
  'aria-label'?: string;
  /** Custom icon for the "edit" button. */
  customIcon?: boolean;
  /** Action to perform when the edit button is clicked. */
  onToggle?: (event: React.MouseEvent) => void;
  /** Additional props for the "edit" button. */
  editButtonProps?: ButtonProps;
}

export const InlineEditToggle: React.FunctionComponent<InlineEditToggleProps> = ({
  children,
  'aria-label': ariaLabel = 'Enable edit mode',
  customIcon,
  onToggle,
  editButtonProps,
  ...props
}: InlineEditToggleProps) => {
  const editIcon = customIcon || <PencilAltIcon />;

  return (
    <div className={css(styles.inlineEditAction, styles.modifiers.enableEditable)} {...props}>
      <Button
        variant={children ? ButtonVariant.link : ButtonVariant.plain}
        icon={children ? editIcon : undefined}
        aria-label={children ? undefined : ariaLabel}
        onClick={onToggle}
        {...editButtonProps}
      >
        {children || editIcon}
      </Button>
    </div>
  );
};
InlineEditToggle.displayName = 'InlineEditToggle';
