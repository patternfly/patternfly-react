import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { MultipleFileUploadContext } from '.';

interface MultipleFileUploadButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadButton: React.FunctionComponent<MultipleFileUploadButtonProps> = ({
  className,
  ...props
}: MultipleFileUploadButtonProps) => {
  const { open } = React.useContext(MultipleFileUploadContext);

  return (
    <div className={css(styles.multipleFileUploadUpload, className)} {...props}>
      <button className="pf-c-button pf-m-secondary" type="button" onClick={open}>
        Upload
      </button>
    </div>
  );
};

MultipleFileUploadButton.displayName = 'MultipleFileUploadButton';
