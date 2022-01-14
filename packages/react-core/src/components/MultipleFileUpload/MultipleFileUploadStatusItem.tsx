import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { Progress } from '../Progress';
import { Button } from '../Button';

interface MultipleFileUploadStatusItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Class to add to outer div */
  className?: string;

  file?: File;

  /** A callback for when a selected file starts loading */
  onReadStarted?: (fileHandle: File) => void;
  /** A callback for when a selected file finishes loading */
  onReadFinished?: (fileHandle: File) => void;
  /** A callback for when the FileReader API fails */
  onReadFailed?: (error: DOMException, fileHandle: File) => void;
  /** Clear button was clicked */
  onClearClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Text area text changed */
  onTextChange?: (text: string) => void;
  /** On data changed - if type='text' or type='dataURL' and file was loaded it will call this method */
  onDataChange?: (data: string) => void;

  loadPercentage?: number;
}

export const MultipleFileUploadStatusItem: React.FunctionComponent<MultipleFileUploadStatusItemProps> = ({
  className,
  file,
  onReadStarted = () => {},
  onReadFinished = () => {},
  onReadFailed = () => {},
  onClearClick = () => {},
  onDataChange = () => {},
  loadPercentage,
  ...props
}) => {
  const [loadStatus, setLoadStatus] = React.useState(0);
  const [loadResult, setLoadResult] = React.useState<undefined | 'danger' | 'success'>();

  function readFile(fileHandle: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(fileHandle);
    });
  }

  React.useEffect(() => {
    onReadStarted(file);
    setLoadStatus(1);
    readFile(file)
      .then(data => {
        setLoadResult('success');
        setLoadStatus(100);
        onReadFinished(file);
        onDataChange(data as string);
      })
      .catch((error: DOMException) => {
        onReadFailed(error, file);
        onReadFinished(file);
        setLoadResult('danger');
      });
  }, []);

  const fileSizeString = (size: number) => {
    if (size < 1000) {
      return `${size}B`;
    } else if (size < 1000000) {
      return `${size / 1000} KB`;
    } else if (size < 1000000000) {
      return `${size / 1000000} MB`;
    } else if (size < 1000000000000) {
      return `${size / 1000000000} GB`;
    } else if (size < 1000000000000000) {
      return `${size / 1000000000000} TB`;
    } else {
      return 'File too large';
    }
  };

  const title = (
    <span className={styles.multipleFileUploadStatusItemProgress}>
      <span className={styles.multipleFileUploadStatusItemProgressText}>{file.name}</span>
      <span className={styles.multipleFileUploadStatusItemProgressSize}>{fileSizeString(file.size)}</span>
    </span>
  );

  return (
    <li className={css(styles.multipleFileUploadStatusItem, className)} {...props}>
      <div className={styles.multipleFileUploadStatusItemIcon}>
        <i className="fas fa-file" aria-hidden="true"></i>
      </div>
      <div className={styles.multipleFileUploadStatusItemMain}>
        <Progress title={title} value={loadPercentage || loadStatus} variant={loadResult} />
      </div>
      <div className={styles.multipleFileUploadStatusItemClose}>
        <Button variant="plain" aria-label="Remove from list" onClick={onClearClick}>
          <i className="fas fa-times-circle" aria-hidden="true"></i>
        </Button>
      </div>
    </li>
  );
};

MultipleFileUploadStatusItem.displayName = 'MultipleFileUploadStatusItem';
