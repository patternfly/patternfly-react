import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';
import { css } from '@patternfly/react-styles';
import TimesIcon from '@patternfly/react-icons/dist/js/icons/times-icon';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children?: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
  /** Color of the label. */
  color?: 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
  /** Variant of the label. */
  variant?: 'outline' | 'filled';
  /** Flag indicating the label text should be truncated. */
  isTruncated?: boolean;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
  /** Close click callback for removable labels. If present, label will have a close button. */
  onClose?: (event: React.MouseEvent) => void;
  /** Node for custom close button. */
  closeBtn?: React.ReactNode;
  /** Additional properties for the default close button. */
  closeBtnProps?: any;
  /** Href for a label that is a link. If present, the label will change to an anchor element. */
  href?: string;
  /** Flag indicating if the label is an overflow label */
  isOverflowLabel?: boolean;
  /** Forwards the label content and className to rendered function.  Use this prop for react router support.*/
  render?: ({
    className,
    content,
    componentRef
  }: {
    className: string;
    content: React.ReactNode;
    componentRef: any;
  }) => React.ReactNode;
}

const colorStyles = {
  blue: styles.modifiers.blue,
  cyan: styles.modifiers.cyan,
  green: styles.modifiers.green,
  orange: styles.modifiers.orange,
  purple: styles.modifiers.purple,
  red: styles.modifiers.red,
  grey: ''
};

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className = '',
  color = 'grey',
  variant = 'filled',
  isTruncated = false,
  tooltipPosition,
  icon,
  onClose,
  closeBtn,
  closeBtnProps,
  href,
  isOverflowLabel,
  render,
  ...props
}: LabelProps) => {
  const LabelComponent = (isOverflowLabel ? 'button' : 'span') as any;
  const Component = href ? 'a' : 'span';
  const button = closeBtn ? (
    closeBtn
  ) : (
    <Button
      type="button"
      variant="plain"
      onClick={onClose}
      {...{ 'aria-label': 'label-close-button', ...closeBtnProps }}
    >
      <TimesIcon />
    </Button>
  );
  const textRef = React.createRef<any>();
  // ref to apply tooltip when rendered is used
  const componentRef = React.useRef();
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
  React.useLayoutEffect(() => {
    setIsTooltipVisible(textRef.current && textRef.current.offsetWidth < textRef.current.scrollWidth);
  }, []);
  const content = (
    <>
      {icon && <span className={css(styles.labelIcon)}>{icon}</span>}
      {isTruncated && (
        <span ref={textRef} className={css(styles.labelText)}>
          {children}
        </span>
      )}
      {!isTruncated && children}
    </>
  );

  let labelComponentChild = (
    <Component className={css(styles.labelContent)} {...(href && { href })}>
      {content}
    </Component>
  );
  if (render) {
    labelComponentChild = (
      <>
        {isTooltipVisible && <Tooltip reference={componentRef} content={children} position={tooltipPosition} />}
        {render({
          className: styles.labelContent,
          content,
          componentRef
        })}
      </>
    );
  } else if (isTooltipVisible) {
    labelComponentChild = (
      <Tooltip content={children} position={tooltipPosition}>
        <Component className={css(styles.labelContent)} {...(href && { href })}>
          {content}
        </Component>
      </Tooltip>
    );
  }

  return (
    <LabelComponent
      {...props}
      className={css(
        styles.label,
        colorStyles[color],
        variant === 'outline' && styles.modifiers.outline,
        isOverflowLabel && styles.modifiers.overflow,
        className
      )}
    >
      {labelComponentChild}
      {onClose && button}
    </LabelComponent>
  );
};
Label.displayName = 'Label';
