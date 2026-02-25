import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Button } from '../Button';

export interface ClipboardCopyToggleProps extends Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
> {
  onClick: (event: React.MouseEvent) => void;
  id: string;
  contentId: string;
  isExpanded?: boolean;
  className?: string;
}

export const ClipboardCopyToggle: React.FunctionComponent<ClipboardCopyToggleProps> = ({
  onClick,
  id,
  contentId,
  isExpanded = false,
  ...props
}: ClipboardCopyToggleProps) => (
  <Button
    type="button"
    variant="control"
    onClick={onClick}
    id={id}
    aria-controls={isExpanded ? contentId : undefined}
    aria-expanded={isExpanded}
    {...props}
    icon={
      <div className={css(styles.clipboardCopyToggleIcon)}>
        <AngleRightIcon />
      </div>
    }
  />
);
ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';
