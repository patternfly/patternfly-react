import * as React from 'react';
import { Button, ButtonProps, PopoverPosition, Tooltip } from '@patternfly/react-core';
import { CodeEditorContext } from './CodeEditorUtils';

/** Allows customizing the code editor controls by passing this sub-component into the
 * code editor's customControl property.
 */

export interface CodeEditorControlProps extends Omit<ButtonProps, 'onClick'> {
  /** Accessible label for the code editor control */
  'aria-label'?: string;
  /** Additional classes added to the code editor control. */
  className?: string;
  /** @deprecated  Delay in ms before the tooltip appears. */
  entryDelay?: number;
  /** @deprecated  Delay in ms before the tooltip disappears. */
  exitDelay?: number;
  /** Icon rendered inside the code editor control. */
  icon: React.ReactNode;
  /** @deprecated Maximum width of the tooltip (default 150px). */
  maxWidth?: string;
  /** @deprecated Copy button popover position. */
  position?:
    | PopoverPosition
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
  /** @deprecated Text to display in the tooltip*/
  toolTipText?: React.ReactNode;
  /** Event handler for the click of the button */
  onClick: (code: string, event?: any) => void;
  /** Flag indicating that the button is visible above the code editor. */
  isVisible?: boolean;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
}

export const CodeEditorControl: React.FunctionComponent<CodeEditorControlProps> = ({
  icon,
  className,
  'aria-label': ariaLabel,
  toolTipText,
  exitDelay,
  entryDelay,
  maxWidth,
  position,
  onClick = () => {},
  isVisible = true,
  tooltipProps = {},
  ...props
}: CodeEditorControlProps) => {
  const context = React.useContext(CodeEditorContext);

  const onCustomClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(context.code, event);
  };

  return isVisible ? (
    <Tooltip
      exitDelay={exitDelay}
      entryDelay={entryDelay}
      maxWidth={maxWidth}
      position={position}
      content={<div>{toolTipText}</div>}
      {...tooltipProps}
    >
      <Button className={className} onClick={onCustomClick} variant="control" aria-label={ariaLabel} {...props}>
        {icon}
      </Button>
    </Tooltip>
  ) : null;
};

CodeEditorControl.displayName = 'CodeEditorControl';
