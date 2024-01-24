import React from 'react';
import styles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';
import { InlineEditActionGroupProps } from './InlineEditActionGroup';
import { InlineEditToggle } from './InlineEditToggle';

export interface InlineEditProps {
  /** Determines whether inline edit is in edit mode. */
  isEditMode?: boolean;
  /** Element rendered when inline edit is not in edit mode. */
  staticElement?: React.ReactNode;
  /** Element rendered when inline edit is in edit mode. */
  editModeElement?: React.ReactNode;
  /** Action to perform on the edit icon click. It should set isEditMode prop to true. */
  onEditToggle?: (event: React.MouseEvent) => void;
  /** Element consisting of "save" and "cancel" buttons. InlineEditActionGroup component should be used. */
  actionGroup?: React.ReactElement<InlineEditActionGroupProps>;
}

export const InlineEdit: React.FunctionComponent<InlineEditProps> = ({
  isEditMode,
  staticElement,
  editModeElement,
  onEditToggle,
  actionGroup
}: InlineEditProps) => (
  <form className={css(styles.inlineEdit, isEditMode && styles.modifiers.inlineEditable)}>
    <div className={styles.inlineEditGroup}>
      <div className={styles.inlineEditValue}>{staticElement}</div>
      <InlineEditToggle onToggle={onEditToggle} />
    </div>
    <div className={styles.inlineEditGroup}>
      <div className={styles.inlineEditInput}>{editModeElement}</div>
      {actionGroup}
    </div>
  </form>
);
InlineEdit.displayName = 'InlineEdit';
