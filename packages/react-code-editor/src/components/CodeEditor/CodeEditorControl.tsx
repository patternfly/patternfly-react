import { useContext, type FunctionComponent, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { Button, ButtonProps, Tooltip } from '@patternfly/react-core';
import { CodeEditorContext } from './CodeEditorUtils';

/** Allows customizing the code editor controls by passing this sub-component into the
 * code editor's customControl property.
 */

export interface CodeEditorControlProps extends Omit<ButtonProps, 'onClick'> {
  /** Accessible label for the code editor control */
  'aria-label'?: string;
  /** Additional classes added to the code editor control. */
  className?: string;
  /** Icon rendered inside the code editor control. */
  icon: ReactNode;
  /** Event handler for the click of the button */
  onClick: (code: string, event?: any) => void;
  /** Flag indicating that the button is visible above the code editor. */
  isVisible?: boolean;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
}

export const CodeEditorControl: FunctionComponent<CodeEditorControlProps> = ({
  icon,
  className,
  'aria-label': ariaLabel,
  onClick = () => {},
  isVisible = true,
  tooltipProps = {},
  ...props
}: CodeEditorControlProps) => {
  const context = useContext(CodeEditorContext);

  const onCustomClick = (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(context.code, event);
  };

  return isVisible ? (
    <Tooltip {...tooltipProps}>
      <Button className={className} onClick={onCustomClick} variant="control" aria-label={ariaLabel} {...props}>
        {icon}
      </Button>
    </Tooltip>
  ) : null;
};

CodeEditorControl.displayName = 'CodeEditorControl';
