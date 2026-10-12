import styles from '@rh-felt/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@rh-felt/react-styles';

export interface MultipleFileUploadInfoProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside multiple file upload info */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const MultipleFileUploadInfo: React.FunctionComponent<MultipleFileUploadInfoProps> = ({
  className,
  children,
  ...props
}: MultipleFileUploadInfoProps) => (
  <div className={css(styles.multipleFileUploadInfo, className)} {...props}>
    {children}
  </div>
);

MultipleFileUploadInfo.displayName = 'MultipleFileUploadInfo';
