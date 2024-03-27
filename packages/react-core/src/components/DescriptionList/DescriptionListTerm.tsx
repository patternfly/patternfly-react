import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListTermProps extends HTMLProps<HTMLElement> {
  /** Anything that can be rendered inside of list term */
  children: ReactNode;
  /** Icon that is rendered inside of list term to the left side of the children */
  icon?: ReactNode;
  /** Additional classes added to the DescriptionListTerm */
  className?: string;
}

export const DescriptionListTerm: FunctionComponent<DescriptionListTermProps> = ({
  children,
  className,
  icon,
  ...props
}: DescriptionListTermProps) => (
  <dt className={css(styles.descriptionListTerm, className)} {...props}>
    {icon ? <span className={css(styles.descriptionListTermIcon)}>{icon}</span> : null}
    <span className={css(styles.descriptionListText)}>{children}</span>
  </dt>
);
DescriptionListTerm.displayName = 'DescriptionListTerm';
