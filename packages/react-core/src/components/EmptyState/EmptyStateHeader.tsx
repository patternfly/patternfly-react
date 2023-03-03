import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { EmptyStateIcon } from './EmptyStateIcon';

export interface EmptyStateHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the empty state header */
  children?: React.ReactNode;
  /** Additional classes added to the empty state header */
  className?: string;
  /** Additional classes added to the title inside empty state header */
  titleClassName?: string;
  /** Additional classes added to the icon inside empty state header */
  iconClassName?: string;
  /** Text of the title inside empty state header */
  titleText?: string;
  /** Icon component to be rendered. Can also be a spinner component.  */
  icon?: React.ComponentType<any>;
  /** The heading level to use */
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const EmptyStateHeader: React.FunctionComponent<EmptyStateHeaderProps> = ({
  children,
  className,
  titleClassName,
  iconClassName,
  titleText,
  headingLevel: HeadingLevel = 'h1',
  icon,
  ...props
}: EmptyStateHeaderProps) => (
  <div className={css('pf-c-empty-state__header', className)} {...props}>
    {icon && <EmptyStateIcon className={iconClassName} icon={icon} />}
    {titleText && (
      <div className={css('pf-c-empty-state__title')}>
        <HeadingLevel className={css(styles.emptyStateTitleText, titleClassName)}>{titleText}</HeadingLevel>
      </div>
    )}
    {children}
  </div>
);
EmptyStateHeader.displayName = 'EmptyStateHeader';
