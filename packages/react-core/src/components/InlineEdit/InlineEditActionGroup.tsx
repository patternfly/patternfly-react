import { css } from '@patternfly/react-styles';
import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { Button, ButtonProps, ButtonVariant } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';

/** A group of actions that must be displayed when the inline edit's edit mode is enabled. This should be
 * passed to the inline edit component's customActionGroup property when more customization is desired.
 */
export interface InlineEditActionGroupProps {
  /** Determines whether to display the "save" and "cancel" buttons as icons instead of text. */
  isIconVariant?: boolean;
  /** Text label for the "save" button. If isIconVariant is true, this will set the aria-label for the icon button. */
  saveButtonLabel?: string;
  /** Custom icon for the "save" button when isIconVariant is true. This will replace the default save button icon. */
  saveButtonIcon?: React.ReactNode;
  /** Text label for the "cancel" button. If isIconVariant is true, this will set the aria-label for the icon button. */
  cancelButtonLabel?: string;
  /** Custom icon for the "cancel" button when isIconVariant is true. This will replace the default cancel button icon. */
  cancelButtonIcon?: React.ReactNode;
  /** Additional props for the "save" button. */
  saveButtonProps?: ButtonProps;
  /** Additional props for the "cancel" button. */
  cancelButtonProps?: ButtonProps;
  /** Action to perform when the "save" button is clicked. */
  onSave?: (event: React.MouseEvent) => void;
  /** Action to perform when the "cancel" button is clicked. */
  onCancel?: (event: React.MouseEvent) => void;
}

export const InlineEditActionGroup: React.FunctionComponent<InlineEditActionGroupProps> = ({
  isIconVariant,
  saveButtonLabel = 'Save',
  saveButtonIcon,
  cancelButtonLabel = 'Cancel',
  cancelButtonIcon,
  saveButtonProps,
  cancelButtonProps,
  onSave,
  onCancel,
  ...props
}: InlineEditActionGroupProps) => {
  const saveIcon = saveButtonIcon || <CheckIcon />;
  const cancelIcon = cancelButtonIcon || <TimesIcon />;

  return (
    <div
      className={css(styles.inlineEditGroup, styles.modifiers.actionGroup, isIconVariant && styles.modifiers.iconGroup)}
      {...props}
    >
      <div className={css(styles.inlineEditAction, isIconVariant && styles.modifiers.valid)}>
        <Button
          onClick={onSave}
          variant={isIconVariant ? ButtonVariant.plain : ButtonVariant.primary}
          aria-label={isIconVariant ? saveButtonLabel : undefined}
          {...saveButtonProps}
        >
          {isIconVariant ? saveIcon : saveButtonLabel}
        </Button>
      </div>
      <div className={css(styles.inlineEditAction)}>
        <Button
          onClick={onCancel}
          variant={isIconVariant ? ButtonVariant.plain : ButtonVariant.secondary}
          aria-label={isIconVariant ? cancelButtonLabel : undefined}
          {...cancelButtonProps}
        >
          {isIconVariant ? cancelIcon : cancelButtonLabel}
        </Button>
      </div>
    </div>
  );
};
InlineEditActionGroup.displayName = 'InlineEditActionGroup';
