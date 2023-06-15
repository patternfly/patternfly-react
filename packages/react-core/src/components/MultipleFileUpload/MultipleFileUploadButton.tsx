import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { MultipleFileUploadContext } from './MultipleFileUpload';
import { Button } from '../Button';

export interface MultipleFileUploadButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer div */
  className?: string;
  /** Aria-label for the button */
  'aria-label'?: string;
  'label'?: string;
}

export const MultipleFileUploadButton: React.FunctionComponent<MultipleFileUploadButtonProps> = ({
  className,
  'aria-label': ariaLabel,
  label,
  ...props
}: MultipleFileUploadButtonProps) => {
  const { open } = React.useContext(MultipleFileUploadContext);

  return (
    <div className={css(styles.multipleFileUploadUpload, className)} {...props}>
      <Button variant="secondary" aria-label={ariaLabel} onClick={open}>
        {label}
      </Button>
    </div>
  );
};

MultipleFileUploadButton.displayName = 'MultipleFileUploadButton';
