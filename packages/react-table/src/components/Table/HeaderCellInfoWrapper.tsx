import * as React from 'react';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { Button, Tooltip, Popover, TooltipProps, PopoverProps } from '@patternfly/react-core';

export interface ColumnHelpWrapperProps {
  /**
   * The header cell that is wrapped
   */
  children: React.ReactNode;
  /**
   * The information that is presented in the tooltip/popover
   */
  info: React.ReactNode;
  /**
   * Optional classname to add to the tooltip/popover
   */
  className?: string;
  /**
   * The info variant
   */
  variant?: 'tooltip' | 'popover';
  /**
   * Additional props forwarded to the Popover component
   */
  popoverProps?: Omit<PopoverProps, 'bodyContent'>;
  /**
   * Additional props forwarded to the tooltip component
   */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /**
   * Aria label of the info button
   */
  ariaLabel?: string;
}

export const HeaderCellInfoWrapper: React.FunctionComponent<ColumnHelpWrapperProps> = ({
  children,
  info,
  className,
  variant = 'tooltip',
  popoverProps,
  tooltipProps,
  ariaLabel
}: ColumnHelpWrapperProps) => (
  <div className={css(styles.tableColumnHelp, className)}>
    {children}
    <span className={css(styles.tableColumnHelpAction)}>
      {variant === 'tooltip' ? (
        <Tooltip content={info} {...tooltipProps}>
          <Button variant="plain" aria-label={ariaLabel || (typeof info === 'string' && info) || 'More info'}>
            <HelpIcon noVerticalAlign />
          </Button>
        </Tooltip>
      ) : (
        <Popover bodyContent={info} {...popoverProps}>
          <Button variant="plain" aria-label={ariaLabel || (typeof info === 'string' && info) || 'More info'}>
            <HelpIcon noVerticalAlign />
          </Button>
        </Popover>
      )}
    </span>
  </div>
);
HeaderCellInfoWrapper.displayName = 'HeaderCellInfoWrapper';
