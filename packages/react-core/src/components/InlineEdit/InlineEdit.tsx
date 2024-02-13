import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { InlineEditActionGroup, InlineEditActionGroupProps } from './InlineEditActionGroup';
import { InlineEditToggle, InlineEditToggleProps } from './InlineEditToggle';

/** The basic inline edit component. For more customization, you can pass in the customActionGroup
 * and customEditToggle properties.
 */

export interface InlineEditProps extends React.HTMLProps<HTMLFormElement | HTMLDivElement> {
  /** Determines whether inline edit is in edit mode. */
  isEditModeEnabled?: boolean;
  /** Content rendered when isEditModeEnabled is false. */
  staticContent?: React.ReactNode;
  /** Content rendered when isEditModeEnabled is true. */
  editModeContent?: React.ReactNode;
  /** Text label for the "edit" button. This will be displayed in addition to the edit icon. */
  editButtonLabel?: string;
  /** Adds an accessible name to the edit button. */
  editButtonAriaLabel?: string;
  /** Action to perform when the edit button is clicked. It should set isEditModeEnabled prop to true. */
  onEditToggle?: (event: React.MouseEvent) => void;
  /** Determines whether to display the "save" and "cancel" buttons as icons instead of text. */
  isIconActionGroup?: boolean;
  /** Text label for the "save" button. If isIconActionGroup is true, this will set the aria-label for the icon button. */
  saveButtonLabel?: string;
  /** Text label for the "cancel" button. If isIconActionGroup is true, this will set the aria-label for the icon button. */
  cancelButtonLabel?: string;
  /** Action to perform when the "save" button is clicked. */
  onSave?: (event: React.MouseEvent) => void;
  /** Action to perform when the "cancel" button is clicked. */
  onCancel?: (event: React.MouseEvent) => void;
  /** A custom edit button that is displayed when isEditModeEnabled is false. This will override the default edit button
   * as well as the editButtonAriaLabel and onEditToggle properties. Our inline edit toggle component should be used.
   */
  customEditToggle?: React.ReactElement<InlineEditToggleProps>;
  /** A custom group of actions that are displayed when isEditModeEnabled is true. This will override the default actions as well
   * as the isIconActionGroup, saveButtonLabel, cancelButtonLabel, onSave, and onCancel properties.
   * Our inline edit action group component should be used.
   */
  customActionGroup?: React.ReactElement<InlineEditActionGroupProps>;
  /** Component that will be used as the wrapper for the inline edit. */
  component?: keyof JSX.IntrinsicElements;
}

export const InlineEdit: React.FunctionComponent<InlineEditProps> = ({
  isEditModeEnabled,
  staticContent,
  editModeContent,
  editButtonLabel,
  editButtonAriaLabel = 'Enable edit mode',
  onEditToggle,
  isIconActionGroup,
  saveButtonLabel = 'Save',
  cancelButtonLabel = 'Cancel',
  onSave,
  onCancel,
  customEditToggle,
  customActionGroup,
  component = 'form',
  ...props
}: InlineEditProps) => {
  const Component = component as any;

  return (
    <Component className={css(styles.inlineEdit, isEditModeEnabled && styles.modifiers.inlineEditable)} {...props}>
      <div className={styles.inlineEditGroup}>
        {isEditModeEnabled ? (
          <>
            <div className={styles.inlineEditInput}>{editModeContent}</div>
            {customActionGroup || (
              <InlineEditActionGroup
                saveButtonLabel={saveButtonLabel}
                cancelButtonLabel={cancelButtonLabel}
                isIconVariant={isIconActionGroup}
                onSave={onSave}
                onCancel={onCancel}
              />
            )}
          </>
        ) : (
          <>
            <div className={styles.inlineEditValue}>{staticContent}</div>
            {customEditToggle || (
              <InlineEditToggle aria-label={editButtonAriaLabel} onToggle={onEditToggle}>
                {editButtonLabel}
              </InlineEditToggle>
            )}
          </>
        )}
      </div>
    </Component>
  );
};
InlineEdit.displayName = 'InlineEdit';
