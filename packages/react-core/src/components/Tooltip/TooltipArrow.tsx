import * as React from 'react';
import styles from '@breakaway/react-styles/css/components/Tooltip/tooltip';
import { css } from '@breakaway/react-styles';

export interface TooltipArrowProps extends React.HTMLProps<HTMLDivElement> {
  /** className */
  className?: string;
}

export const TooltipArrow: React.FunctionComponent<TooltipArrowProps> = ({
  className,
  ...props
}: TooltipArrowProps) => <div className={css(styles.tooltipArrow, className)} {...props} />;
TooltipArrow.displayName = 'TooltipArrow';
