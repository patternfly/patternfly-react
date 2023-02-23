import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { EmptyStateIcon } from './EmptyStateIcon';

export interface EmptyStateHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the EmptyStateHeader */
  children?: React.ReactNode;
  /** Additional classes added to the EmptyStateHeader */
  className?: string;
  /** Additional classes added to the title inside EmptyStateHeader */
  titleClassName?: string;
  /** Additional classes added to the Icon inside EmptyStateHeader */
  iconClassName?: string;
  /** Text of the title inside EmptyStateHeader */
  titleText?: string;
  /** Icon component to be rendered inside EmptyStateHeader. Can be a Spinner component. */
  icon?: React.ComponentType<any>;
}

export const EmptyStateHeader: React.FunctionComponent<EmptyStateHeaderProps> = ({
  children,
  className = '',
  titleClassName = '',
  iconClassName = '',
  titleText,
  icon,
  ...props
}: EmptyStateHeaderProps) => {
  const emptyStateTitle = titleText ? (
    <div className={css('pf-c-empty-state__title')}>
      <h1 className={css(styles.emptyStateTitleText, titleClassName)}>{titleText}</h1>
    </div>
  ) : (
    <></>
  );

  return (
    <div className={css('pf-c-empty-state__header', className)} {...props}>
      {icon && <EmptyStateIcon className={iconClassName} icon={icon} />}
      {emptyStateTitle}
      {children}
    </div>
  );
};
EmptyStateHeader.displayName = 'EmptyStateHeader';
