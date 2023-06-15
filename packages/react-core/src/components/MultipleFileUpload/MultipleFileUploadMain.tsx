import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { MultipleFileUploadTitle } from './MultipleFileUploadTitle';
import { MultipleFileUploadButton } from './MultipleFileUploadButton';
import { MultipleFileUploadInfo } from './MultipleFileUploadInfo';

/** Creates the visual upload interface, including the area to drag and drop files,
 * an optional upload button, and descriptive instructions.
 */
export interface MultipleFileUploadMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer div */
  className?: string;
  /** Content rendered inside the title icon div */
  titleIcon?: React.ReactNode;
  /** Content rendered inside the title text div */
  titleText?: React.ReactNode;
  /** Content rendered inside the title text separator div */
  titleTextSeparator?: React.ReactNode;
  /** Content rendered inside the info div */
  infoText?: React.ReactNode;
  /** Flag to prevent the upload button from being rendered */
  isUploadButtonHidden?: boolean;
}

export const MultipleFileUploadMain: React.FunctionComponent<MultipleFileUploadMainProps> = ({
  className,
  titleIcon,
  titleText,
  titleTextSeparator,
  infoText,
  isUploadButtonHidden,
  ...props
}: MultipleFileUploadMainProps) => {
  const showTitle = !!titleIcon || !!titleText || !!titleTextSeparator;

  return (
    <div className={css(styles.multipleFileUploadMain, className)} {...props}>
      {showTitle && <MultipleFileUploadTitle icon={titleIcon} text={titleText} textSeparator={titleTextSeparator} />}
      {isUploadButtonHidden || <MultipleFileUploadButton label="Browse"/>}
      {!!infoText && <MultipleFileUploadInfo>{infoText}</MultipleFileUploadInfo>}
    </div>
  );
};

MultipleFileUploadMain.displayName = 'MultipleFileUploadMain';
