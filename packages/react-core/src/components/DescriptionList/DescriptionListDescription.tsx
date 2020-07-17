import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered inside of list text */
  children: React.ReactNode;
  /** Additional classes added to the DescriptionListText */
  className?: string;
}

export const DescriptionListDescription: React.FunctionComponent<DescriptionListDescriptionProps> = ({
  children = null,
  className,
  ...props
}: DescriptionListDescriptionProps) => (
  <dd className={css(styles.descriptionListDescription, className)} {...props}>
    {children}
  </dd>
);
DescriptionListDescription.displayName = 'DescriptionListDescription';
