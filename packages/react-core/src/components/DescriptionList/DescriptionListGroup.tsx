import { HTMLProps, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListGroupProps extends HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the list group */
  children?: any;
  /** Additional classes added to the DescriptionListGroup */
  className?: string;
}

export const DescriptionListGroup: FunctionComponent<DescriptionListGroupProps> = ({
  className,
  children,
  ...props
}: DescriptionListGroupProps) => (
  <div className={css(styles.descriptionListGroup, className)} {...props}>
    {children}
  </div>
);

DescriptionListGroup.displayName = 'DescriptionListGroup';
