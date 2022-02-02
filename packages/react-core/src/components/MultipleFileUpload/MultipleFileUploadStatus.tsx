import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { ExpandableSection } from '../ExpandableSection';
import { MultipleFileUploadStatusItem } from './MultipleFileUploadStatusItem';

interface MultipleFileUploadStatusProps extends React.HTMLProps<HTMLDivElement> {
  /** Optional content rendered inside multi file upload status list */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** The string to show in the status toggle */
  statusToggleText?: string;
  /** The icon to show in the status toggle */
  statusToggleIcon?: React.ReactNode;
  /** The files to read and display as status items */
  files?: File[];

  // Callbacks passed through to created status item components

  /** A callback called when the status items clear button is clicked */
  onRemoveFile?: (file: File) => void;
  /** A callback for when a selected file starts loading */
  onReadStarted?: (file: File) => void;
  /** A callback for when a selected file finishes loading */
  onReadFinished?: (file: File) => void;
  /** A callback for when the FileReader successfully reads the file */
  onReadSuccess?: (data: string, file: File) => void;
  /** A callback for when the FileReader API fails */
  onReadFailed?: (error: DOMException, file: File) => void;
}

export const MultipleFileUploadStatus: React.FunctionComponent<MultipleFileUploadStatusProps> = ({
  children,
  className,
  files = [],
  statusToggleText,
  statusToggleIcon,
  onRemoveFile = () => {},
  onReadStarted = () => {},
  onReadFinished = () => {},
  onReadSuccess = () => {},
  onReadFailed = () => {},
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
        <ul className="pf-c-multiple-file-upload__status-list">
          {files &&
            files.map(file => (
              <MultipleFileUploadStatusItem
                file={file}
                key={`${file.name}${file.size}${file.lastModified}`}
                onClearClick={() => onRemoveFile(file)}
                onReadStarted={onReadStarted}
                onReadFinished={onReadFinished}
                onReadSuccess={onReadSuccess}
                onReadFailed={onReadFailed}
              />
            ))}
          {children}
        </ul>
      </ExpandableSection>
    </div>
  );
};

MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
