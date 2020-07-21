import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the list group */
  children?: any;
  /** Additional classes added to the DescriptionListGroup */
  className?: string;
}

export const DescriptionListGroup: React.FC<DescriptionListGroupProps> = ({
  className,
  children
}: DescriptionListGroupProps) => <div className={css(styles.descriptionListGroup, className)}>{children}</div>;
DescriptionListGroup.displayName = 'DescriptionListGroup';
