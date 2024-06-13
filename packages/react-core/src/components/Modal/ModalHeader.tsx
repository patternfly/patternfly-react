import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { ModalBoxDescription } from './ModalBoxDescription';
import { ModalBoxTitle } from './ModalBoxTitle';

/** Renders content in the header of the modal */

export interface ModalHeaderProps {
  /** Custom content rendered inside the modal header. If children are supplied then the tile, tileIconVariant and titleScreenReaderText props are ignored. */
  children?: React.ReactNode;
  /** Additional classes added to the modal header. */
  className?: string;
  /** Description of the modal. */
  description?: React.ReactNode;
  /** Id of the modal description. */
  descriptorId?: string;
  /** Optional help section for the modal header. */
  help?: React.ReactNode;
  /** Id of the modal title. */
  labelId?: string;
  /** Content rendered inside the modal title. */
  title?: React.ReactNode;
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
   * are used the default styling will be automatically applied. */
  titleIconVariant?: 'success' | 'danger' | 'warning' | 'info' | 'custom' | React.ComponentType<any>;
  /** Optional title label text for screen readers. */
  titleScreenReaderText?: string;
}

export const ModalHeader: React.FunctionComponent<ModalHeaderProps> = ({
  children,
  className,
  descriptorId,
  description,
  labelId,
  title,
  titleIconVariant,
  titleScreenReaderText,
  help,
  ...props
}: ModalHeaderProps) => {
  const headerContent = children ? (
    children
  ) : (
    <>
      <ModalBoxTitle
        title={title}
        titleIconVariant={titleIconVariant}
        titleScreenReaderText={titleScreenReaderText}
        id={labelId}
      />
      {description && <ModalBoxDescription id={descriptorId}>{description}</ModalBoxDescription>}
    </>
  );

  return (
    <header className={css(styles.modalBoxHeader, help && styles.modifiers.help, className)} {...props}>
      {help && (
        <>
          <div className={css(styles.modalBoxHeaderMain)}>{headerContent}</div>
          <div className={`${styles.modalBoxHeader}-help`}>{help}</div>
        </>
      )}
      {!help && headerContent}
    </header>
  );
};
ModalHeader.displayName = 'ModalHeader';
