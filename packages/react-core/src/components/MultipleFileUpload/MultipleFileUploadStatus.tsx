import { useEffect, useState } from 'react';
import styles from '@patternfly/react-styles/css/components/MultipleFileUpload/multiple-file-upload';
import { css } from '@patternfly/react-styles';
import { ExpandableSection } from '../ExpandableSection';
import { useSSRSafeId } from '../../helpers';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

/** Acts as an expandable container for all uploaded file statuses.
 * An optional text and/or icon can also be passed into this sub-component.
 * This sub-component can be conditionally rendered when at least 1 file has been
 * attempted to be uploaded.
 */

export interface MultipleFileUploadStatusProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside multi file upload status list */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** String to show in the status toggle */
  statusToggleText?: string;
  /** Icon to show in the status toggle */
  statusToggleIcon?: 'danger' | 'success' | 'inProgress' | React.ReactNode;
  /** Adds an accessible label to the list of status items. */
  'aria-label'?: string;
}

export const MultipleFileUploadStatus: React.FunctionComponent<MultipleFileUploadStatusProps> = ({
  children,
  className,
  statusToggleText,
  statusToggleIcon,
  'aria-label': ariaLabel,
  ...props
}: MultipleFileUploadStatusProps) => {
  const expandableSectionId = useSSRSafeId('pf-expandable-section-');
  const [icon, setIcon] = useState<React.ReactNode>();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    switch (statusToggleIcon) {
      case 'danger':
        setIcon(<TimesCircleIcon />);
        break;
      case 'success':
        setIcon(<RhUiCheckCircleFillIcon />);
        break;
      case 'inProgress':
        setIcon(<InProgressIcon />);
        break;
      default:
        setIcon(statusToggleIcon);
    }
  }, [statusToggleIcon]);

  const toggle = (
    <div className={styles.multipleFileUploadStatusProgress}>
      <div className={`${styles.multipleFileUploadStatusProgress}-icon`}>{icon}</div>
      <div className={`${styles.multipleFileUploadStatusProgress}-text`}>{statusToggleText}</div>
    </div>
  );

  const toggleExpandableSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css(styles.multipleFileUploadStatus, className)} {...props}>
      <ExpandableSection
        contentId={`${expandableSectionId}-content`}
        toggleId={`${expandableSectionId}-toggle`}
        toggleContent={toggle}
        isExpanded={isOpen}
        onToggle={toggleExpandableSection}
      >
        <ul className={`${styles.multipleFileUploadStatus}-list`} role="list" aria-label={ariaLabel}>
          {children}
        </ul>
      </ExpandableSection>
    </div>
  );
};

MultipleFileUploadStatus.displayName = 'MultipleFileUploadStatus';
