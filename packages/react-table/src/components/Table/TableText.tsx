import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';

export enum TableTextVariant {
  div = 'div',
  nav = 'nav'
}

export enum WrapModifier {
  wrap = 'wrap',
  nowrap = 'nowrap',
  truncate = 'truncate',
  breakWord = 'breakWord',
  fitContent = 'fitContent'
}

export interface TableTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered within the table text */
  children?: React.ReactNode;
  /** Additional classes added to the table text */
  className?: string;
  /** Determines which element to render as a table text */
  variant?: TableTextVariant | 'span' | 'div';
  /** Determines which wrapping modifier to apply to the table text */
  wrapModifier?: WrapModifier | 'wrap' | 'nowrap' | 'truncate' | 'breakWord' | 'fitContent';
  /** text to display on the tooltip */
  tooltip?: string;
  /** other props to pass to the tooltip */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /** callback used to create the tooltip if text is truncated */
  onMouseEnter?: (event: any) => void;
  /** Determines if the TableText is focused by parent component */
  focused?: boolean;
}

export const TableText: React.FunctionComponent<TableTextProps> = ({
  children = null,
  className = '',
  variant = 'span',
  wrapModifier = null,
  tooltip: tooltipProp = '',
  tooltipProps = {},
  onMouseEnter: onMouseEnterProp = () => {},
  focused = false,
  ...props
}: TableTextProps) => {
  const Component: TableTextVariant | 'span' | 'div' = variant;
  const textRef = React.createRef<HTMLElement>();

  const [tooltip, setTooltip] = React.useState('');
  const onMouseEnter = (event: any) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      setTooltip(tooltipProp || event.target.innerText);
    } else {
      setTooltip('');
    }
    onMouseEnterProp(event);
  };

  const onFocus = (element: HTMLElement) => {
    if (element.offsetWidth < element.scrollWidth) {
      setTooltip(tooltipProp || element.innerText);
    } else {
      setTooltip('');
    }
  };

  const text = (
    <Component
      ref={textRef as React.Ref<HTMLDivElement>}
      onMouseEnter={onMouseEnter}
      className={css(className, wrapModifier && styles.modifiers[wrapModifier], styles.tableText)}
      {...props}
    >
      {children}
    </Component>
  );

  React.useEffect(() => {
    if (focused) {
      onFocus(textRef.current);
    } else {
      setTooltip('');
    }
  }, [focused]);

  return tooltip !== '' ? (
    <Tooltip triggerRef={textRef} content={tooltip} isVisible {...tooltipProps}>
      {text}
    </Tooltip>
  ) : (
    text
  );
};
TableText.displayName = 'TableText';
