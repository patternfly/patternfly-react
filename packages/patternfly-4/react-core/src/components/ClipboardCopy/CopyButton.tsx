import * as React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { CopyIcon } from '@patternfly/react-icons';
import { OneOf } from '../../helpers/typeUtils'; 
import { Tooltip, TooltipPosition } from '../Tooltip';

export interface CopyButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: (event: React.MouseEvent) => void; 
  children: React.ReactNode; 
  id: string; 
  textId: string; 
  /** Content rendered inside the button */
  className?: string; 
  exitDelay?: number; 
  entryDelay?: number; 
  maxWidth?: string; 
  position?: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>; 
  /** Adds accessible text to the button. */
  'aria-label'?: string; 
}

export const CopyButton: React.FunctionComponent<CopyButtonProps> = ({
  className = '',
  exitDelay = 100,
  entryDelay = 100,
  maxWidth = '100px',
  position = 'top',
  'aria-label': ariaLabel = 'Copyable input',
  ...props
}: CopyButtonProps) => {
  return (
  <Tooltip
    trigger="mouseenter focus click"
    exitDelay={exitDelay}
    entryDelay={entryDelay}
    maxWidth={maxWidth}
    position={position}
    content={<div>{this.children}</div>}
  >
    <button
      onClick={onClick}
      className={css(styles.clipboardCopyGroupCopy, className)}
      aria-label={ariaLabel}
      id={id}
      aria-labelledby={`${id} ${textId}`}
      {...props}
    >
      <CopyIcon />
    </button>
  </Tooltip>
)};
