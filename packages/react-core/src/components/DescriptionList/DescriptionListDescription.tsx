import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListDescriptionProps extends HTMLProps<HTMLElement> {
  /** Anything that can be rendered inside of list description */
  children: ReactNode;
  /** Additional classes added to the DescriptionListDescription */
  className?: string;
}

export const DescriptionListDescription: FunctionComponent<DescriptionListDescriptionProps> = ({
  children = null,
  className,
  ...props
}: DescriptionListDescriptionProps) => (
  <dd className={css(styles.descriptionListDescription, className)} {...props}>
    <div className={css(styles.descriptionListText)}>{children}</div>
  </dd>
);
DescriptionListDescription.displayName = 'DescriptionListDescription';
