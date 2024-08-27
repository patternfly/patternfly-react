import * as React from 'react';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import { Button } from '../Button';
import { Tooltip, TooltipPosition } from '../Tooltip';

export interface ClipboardCopyButtonProps
  extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
  /** Callback for the copy when the button is clicked */
  onClick: (event: React.MouseEvent) => void;
  /** Content of the copy button */
  children: React.ReactNode;
  /** ID of the copy button */
  id: string;
  /** ID of the content that is being copied */
  textId: string;
  /** Additional classes added to the copy button */
  className?: string;
  /** Exit delay on the copy button tooltip */
  exitDelay?: number;
  /** Entry delay on the copy button tooltip */
  entryDelay?: number;
  /** Max width of the copy button tooltip */
  maxWidth?: string;
  /** Position of the copy button tooltip */
  position?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** Aria-label for the copy button */
  'aria-label'?: string;
  /** Variant of the copy button */
  variant?: 'control' | 'plain';
  /** Callback when tooltip's hide transition has finished executing */
  onTooltipHidden?: () => void;
  /** Removes padding from clipboard copy button. This is used for inline-compact variant */
  hasNoPadding?: boolean;
}

export const ClipboardCopyButton: React.FunctionComponent<ClipboardCopyButtonProps> = ({
  onClick,
  exitDelay = 0,
  entryDelay = 300,
  maxWidth = '100px',
  position = 'top',
  'aria-label': ariaLabel = 'Copyable input',
  id,
  textId,
  children,
  variant = 'control',
  onTooltipHidden = () => {},
  className,
  hasNoPadding = false,
  ...props
}: ClipboardCopyButtonProps) => {
  const triggerRef = React.createRef<HTMLButtonElement>();

  return (
    <Tooltip
      trigger="mouseenter focus click"
      triggerRef={triggerRef}
      exitDelay={exitDelay}
      entryDelay={entryDelay}
      maxWidth={maxWidth}
      position={position}
      aria-live="polite"
      aria="none"
      content={<div>{children}</div>}
      onTooltipHidden={onTooltipHidden}
    >
      <Button
        type="button"
        variant={variant}
        hasNoPadding={hasNoPadding}
        onClick={onClick}
        aria-label={ariaLabel}
        className={className}
        id={id}
        aria-labelledby={`${id} ${textId}`}
        icon={<CopyIcon />}
        {...props}
        ref={triggerRef}
      />
    </Tooltip>
  );
};
ClipboardCopyButton.displayName = 'ClipboardCopyButton';
