import { css } from '@patternfly/react-styles';
import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { Button, ButtonProps } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';

export interface InlineEditActionGroupProps {
  /** Determines whether to display icons as "save" and "cancel" buttons instead of text buttons. */
  isIconVariant?: boolean;
  /** Custom text for "save" button. */
  saveButtonText?: string;
  /** Custom text for "cancel" button. */
  cancelButtonText?: string;
  /** Additional props for "save" button. */
  saveButtonProps?: ButtonProps;
  /** Additional props for "cancel" button. */
  cancelButtonProps?: ButtonProps;
  /** Action to perform on click on the "save" button. */
  onSave?: () => void;
  /** Action to perform on click on the "cancel" button. */
  onCancel?: () => void;
}

export const InlineEditActionGroup: React.FunctionComponent<InlineEditActionGroupProps> = ({
  isIconVariant,
  saveButtonText,
  cancelButtonText,
  saveButtonProps,
  cancelButtonProps,
  onSave,
  onCancel
}: InlineEditActionGroupProps) => (
  <div
    className={css(styles.inlineEditGroup, styles.modifiers.actionGroup, isIconVariant && styles.modifiers.iconGroup)}
  >
    <div className={css(styles.inlineEditAction, isIconVariant && styles.modifiers.valid)}>
      <Button
        onClick={onSave}
        {...(isIconVariant && { variant: 'plain', 'aria-label': 'Save edits' })}
        {...saveButtonProps}
      >
        {isIconVariant ? <CheckIcon /> : saveButtonText ?? saveButtonProps?.children ?? 'Save'}
      </Button>
    </div>
    <div className={css(styles.inlineEditAction)}>
      <Button
        onClick={onCancel}
        {...(!isIconVariant && { variant: 'secondary' })}
        {...(isIconVariant && { variant: 'plain', 'aria-label': 'Cancel edits' })}
        {...cancelButtonProps}
      >
        {isIconVariant ? <TimesIcon /> : cancelButtonText ?? cancelButtonProps?.children ?? 'Cancel'}
      </Button>
    </div>
  </div>
);
InlineEditActionGroup.displayName = 'InlineEditActionGroup';
