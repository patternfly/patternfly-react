import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { EmptyStateIcon } from './EmptyStateIcon';

export enum EmptyStateHeadingLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export interface EmptyStateHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the empty state header */
  className?: string;
  /** Additional classes added to the title inside empty state header */
  titleClassName?: string;
  /** Text of the title inside empty state header, will be wrapped in headingLevel */
  titleText?: React.ReactNode;
  /** Empty state icon element to be rendered. Can also be a spinner component */
  icon?: React.ComponentType<any>;
  /** The heading level to use, default is h1 */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const EmptyStateHeader: React.FunctionComponent<EmptyStateHeaderProps> = ({
  className,
  titleClassName,
  titleText,
  headingLevel: HeadingLevel = EmptyStateHeadingLevel.h1,
  icon: Icon,
  ...props
}: EmptyStateHeaderProps) => (
  <div className={css(`${styles.emptyState}__header`, className)} {...props}>
    {Icon && <EmptyStateIcon icon={Icon} />}
    {titleText && (
      <div className={css(`${styles.emptyState}__title`)}>
        <HeadingLevel className={css(styles.emptyStateTitleText, titleClassName)}>{titleText}</HeadingLevel>
      </div>
    )}
  </div>
);

EmptyStateHeader.displayName = 'EmptyStateHeader';
