import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { ExpandableSection } from '../ExpandableSection';
import { MultipleFileUploadStatusItem } from './MultipleFileUploadStatusItem';

interface MultipleFileUploadStatusProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside MultipleFileUploadStatus */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** string to show in the status toggle */
  statusToggleText?: string;

  files?: File[];

  onRemoveFile?: (file: File) => void;
  /** A callback for when a selected file finishes loading */
  onReadFinished?: (fileHandle: File) => void;
}

export const MultipleFileUploadStatus: React.FunctionComponent<MultipleFileUploadStatusProps> = ({
  className,
  files,
  statusToggleText,
  onRemoveFile,
  onReadFinished,
  ...props
}: MultipleFileUploadStatusProps) => {
  const toggle = (
    <div className={styles.multipleFileUploadStatusProgress}>
      <div className={styles.multipleFileUploadStatusProgressIcon}>
        <i className={'pf-icon-in-progress'}></i>
      </div>
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
        <ul className="pf-c-multiple-file-upload__status-list">
          {files &&
            files.map(file => (
              <MultipleFileUploadStatusItem
                file={file}
                key={`${file.name}${file.size}`}
                onClearClick={() => onRemoveFile(file)}
                onReadFinished={() => onReadFinished(file)}
              />
            ))}
        </ul>
      </ExpandableSection>
    </div>
  );
};

MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
