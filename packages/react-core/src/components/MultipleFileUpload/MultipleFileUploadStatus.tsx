import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { ExpandableSection } from '../ExpandableSection';

export interface MultipleFileUploadStatusProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside multi file upload status list */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** String to show in the status toggle */
  statusToggleText?: string;
  /** Icon to show in the status toggle */
  statusToggleIcon?: React.ReactNode;
}

export const MultipleFileUploadStatus: React.FunctionComponent<MultipleFileUploadStatusProps> = ({
  children,
  className,
  statusToggleText,
  statusToggleIcon,
  ...props
}: MultipleFileUploadStatusProps) => {
  const toggle = (
    <div className={styles.multipleFileUploadStatusProgress}>
      <div className={styles.multipleFileUploadStatusProgressIcon}>{statusToggleIcon}</div>
      <div className={styles.multipleFileUploadStatusItemProgressText}>{statusToggleText}</div>
    </div>
  );

  const [isOpen, setIsOpen] = React.useState(true);

  const toggleExpandableSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css(styles.multipleFileUploadStatus, className)} {...props}>
      <ExpandableSection toggleContent={toggle} isExpanded={isOpen} onToggle={toggleExpandableSection}>
        <ul className="pf-c-multiple-file-upload__status-list">{children}</ul>
      </ExpandableSection>
    </div>
  );
};

MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
