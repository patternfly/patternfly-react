import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListTermHelpTextProps extends HTMLProps<HTMLElement> {
  /** Anything that can be rendered inside of list term */
  children: ReactNode;
  /** Additional classes added to the DescriptionListTermHelpText */
  className?: string;
}

export const DescriptionListTermHelpText: FunctionComponent<DescriptionListTermHelpTextProps> = ({
  children,
  className,
  ...props
}: DescriptionListTermHelpTextProps) => (
  <dt className={css(styles.descriptionListTerm, className)} {...props}>
    {children}
  </dt>
);
DescriptionListTermHelpText.displayName = 'DescriptionListTermHelpText';
