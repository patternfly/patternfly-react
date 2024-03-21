import {
  type HTMLProps,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
  type FunctionComponent,
  type Ref,
  useRef,
  forwardRef
} from 'react';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../../../components/Button';
import { Tooltip } from '../../../components/Tooltip';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';

/** Renders an individual control button for moving selected options between each
 * dual list selector pane.
 */

export interface DualListSelectorControlProps extends Omit<HTMLProps<HTMLDivElement>, 'onClick'> {
  /** Content to be rendered in the dual list selector control. */
  children?: ReactNode;
  /** @hide forwarded ref */
  innerRef?: Ref<any>;
  /** Flag indicating the control is disabled. */
  isDisabled?: boolean;
  /** Additional classes applied to the dual list selector control. */
  className?: string;
  /** Callback fired when dual list selector control is selected. */
  onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Accessible label for the dual list selector control. */
  'aria-label'?: string;
  /** Content to be displayed in a tooltip on hover of control. */
  tooltipContent?: ReactNode;
  /** Additional tooltip properties passed to the tooltip. */
  tooltipProps?: any;
}

export const DualListSelectorControlBase: FunctionComponent<DualListSelectorControlProps> = ({
  innerRef,
  children,
  className,
  'aria-label': ariaLabel,
  isDisabled = true,
  onClick = () => {},
  tooltipContent,
  tooltipProps = {} as any,
  ...props
}: DualListSelectorControlProps) => {
  const privateRef = useRef(null);
  const ref = innerRef || privateRef;
  return (
    <div className={css(styles.dualListSelectorControlsItem, className)} {...props}>
      <Button
        isDisabled={isDisabled}
        aria-disabled={isDisabled}
        variant={ButtonVariant.plain}
        onClick={onClick}
        aria-label={ariaLabel}
        tabIndex={-1}
        ref={ref}
      >
        {children}
      </Button>
      {tooltipContent && <Tooltip content={tooltipContent} position="left" triggerRef={ref} {...tooltipProps} />}
    </div>
  );
};
DualListSelectorControlBase.displayName = 'DualListSelectorControlBase';

export const DualListSelectorControl = forwardRef((props: DualListSelectorControlProps, ref: Ref<any>) => (
  <DualListSelectorControlBase innerRef={ref} {...props} />
));

DualListSelectorControl.displayName = 'DualListSelectorControl';
