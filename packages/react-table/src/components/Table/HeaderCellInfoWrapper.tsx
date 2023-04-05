import * as React from 'react';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { Tooltip, TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { Popover, PopoverProps } from '@patternfly/react-core/dist/esm/components/Popover';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { TableText } from './TableText';

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
    {typeof children === 'string' ? <TableText>{children}</TableText> : children}
    <span className={css(styles.tableColumnHelpAction)}>
      {variant === 'tooltip' ? (
        <Tooltip content={info} {...tooltipProps}>
          <Button variant="plain" aria-label={ariaLabel || (typeof info === 'string' && info) || 'More info'}>
            <HelpIcon />
          </Button>
        </Tooltip>
      ) : (
        <Popover bodyContent={info} {...popoverProps}>
          <Button variant="plain" aria-label={ariaLabel || (typeof info === 'string' && info) || 'More info'}>
            <HelpIcon />
          </Button>
        </Popover>
      )}
    </span>
  </div>
);
HeaderCellInfoWrapper.displayName = 'HeaderCellInfoWrapper';
