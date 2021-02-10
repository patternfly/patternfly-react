import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListTermProps extends React.HTMLProps<HTMLElement> {
  /** Anything that can be rendered inside of list term */
  children: React.ReactNode;
  /** Additional classes added to the DescriptionListTerm */
  className?: string;
}

export const DescriptionListTerm: React.FunctionComponent<DescriptionListTermProps> = ({
  children,
  className,
  ...props
}: DescriptionListTermProps) => (
  <dt className={css(styles.descriptionListTerm, className)} {...props}>
    <span className={'pf-c-description-list__text'}>{children}</span>
  </dt>
);
DescriptionListTerm.displayName = 'DescriptionListTerm';
