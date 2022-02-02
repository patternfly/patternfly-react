import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { Progress } from '../Progress';
import { Button } from '../Button';
import FileIcon from '@patternfly/react-icons/dist/esm/icons/file-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

interface MultipleFileUploadStatusItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Class to add to outer div */
  className?: string;
  /** The file object being represented by the status item */
  file?: File;
  /** A custom icon to show in place of the generic file icon */
  fileIcon?: React.ReactNode;
  /** A callback for when a selected file starts loading */
  onReadStarted?: (fileHandle: File) => void;
  /** A callback for when a selected file finishes loading */
  onReadFinished?: (fileHandle: File) => void;
  /** A callback for when the FileReader successfully reads the file */
  onReadSuccess?: (data: string, file: File) => void;
  /** A callback for when the FileReader API fails */
  onReadFailed?: (error: DOMException, fileHandle: File) => void;
  /** Clear button was clicked */
  onClearClick?: React.MouseEventHandler<HTMLButtonElement>;

  // Props to bypass built in behavior

  /** A flag to disable having the status item read the file itself */
  useCustomFileHandling?: boolean;
  /** A custom name to display for the file rather than using built in functionality to auto-fill it */
  fileName?: string;
  /** A custom file size to display for the file rather than using built in functionality to auto-fill it */
  fileSize?: number;
  /** A custom value to display for the progress component rather than using built in functionality to auto-fill it */
  progressValue?: number;
  /** A custom variant to apply to the progress component rather than using built in functionality to auto-fill it */
  progressVariant?: 'danger' | 'success' | 'warning';
}

export const MultipleFileUploadStatusItem: React.FunctionComponent<MultipleFileUploadStatusItemProps> = ({
  className,
  file,
  fileIcon,
  onReadStarted = () => {},
  onReadFinished = () => {},
  onReadSuccess = () => {},
  onReadFailed = () => {},
  onClearClick = () => {},
  useCustomFileHandling,
  fileName,
  fileSize,
  progressValue,
  progressVariant,
  ...props
}) => {
  const [loadPercentage, setLoadPercentage] = React.useState(0);
  const [loadResult, setLoadResult] = React.useState<undefined | 'danger' | 'success'>();

  function readFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  React.useEffect(() => {
    if (!useCustomFileHandling) {
      onReadStarted(file);
      setLoadPercentage(1);
      readFile(file)
        .then(data => {
          setLoadResult('success');
          setLoadPercentage(100);
          onReadFinished(file);
          onReadSuccess(data as string, file);
        })
        .catch((error: DOMException) => {
          onReadFinished(file);
          onReadFailed(error, file);
          setLoadResult('danger');
        });
    }
  }, []);

  const getHumanReadableFileSize = (size: number) => {
    const prefixes = ['', 'K', 'M', 'G', 'T'];
    let prefixUnit = 0;
    while (size >= 1000) {
      prefixUnit += 1;
      size = size / 1000;
    }

    if (prefixUnit >= prefixes.length) {
      return 'File size too large';
    }

    return `${Math.round(size)}${prefixes[prefixUnit]}B`;
  };

  const title = (
    <span className={styles.multipleFileUploadStatusItemProgress}>
      <span className={styles.multipleFileUploadStatusItemProgressText}>{fileName || file.name}</span>
      <span className={styles.multipleFileUploadStatusItemProgressSize}>
        {fileSize || getHumanReadableFileSize(file.size)}
      </span>
    </span>
  );

  return (
    <li className={css(styles.multipleFileUploadStatusItem, className)} {...props}>
      <div className={styles.multipleFileUploadStatusItemIcon}>{fileIcon || <FileIcon />}</div>
      <div className={styles.multipleFileUploadStatusItemMain}>
        <Progress title={title} value={progressValue || loadPercentage} variant={progressVariant || loadResult} />
      </div>
      <div className={styles.multipleFileUploadStatusItemClose}>
        <Button variant="plain" aria-label="Remove from list" onClick={onClearClick}>
          <TimesCircleIcon />
        </Button>
      </div>
    </li>
  );
};

MultipleFileUploadStatusItem.displayName = 'MultipleFileUploadStatusItem';
