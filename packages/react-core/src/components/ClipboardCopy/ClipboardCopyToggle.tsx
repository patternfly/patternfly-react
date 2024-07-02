import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { Button } from '../Button';

export interface ClipboardCopyToggleProps
  extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
  onClick: (event: React.MouseEvent) => void;
  id: string;
  textId: string;
  contentId: string;
  isExpanded?: boolean;
  className?: string;
}

export const ClipboardCopyToggle: React.FunctionComponent<ClipboardCopyToggleProps> = ({
  onClick,
  id,
  textId,
  contentId,
  isExpanded = false,
  ...props
}: ClipboardCopyToggleProps) => (
  <Button
    type="button"
    variant="control"
    onClick={onClick}
    id={id}
    aria-labelledby={`${id} ${textId}`}
    aria-controls={contentId}
    aria-expanded={isExpanded}
    {...props}
    icon={
      <div className={css(styles.clipboardCopyToggleIcon)}>
        <AngleRightIcon aria-hidden="true" />
      </div>
    }
  />
);
ClipboardCopyToggle.displayName = 'ClipboardCopyToggle';
