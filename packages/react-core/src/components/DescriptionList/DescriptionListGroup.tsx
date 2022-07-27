import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';
import { Card, CardProps } from '../Card';

export interface DescriptionListGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the list group */
  children?: any;
  /** Additional classes added to the DescriptionListGroup */
  className?: string;
  /** Use Card component as a wrapper of DescriptionListGroup */
  isCard?: boolean;
  /** Additional props added to the Card component */
  cardProps?: CardProps;
}

export const DescriptionListGroup: React.FunctionComponent<DescriptionListGroupProps> = ({
  className,
  children,
  isCard,
  cardProps,
  ...props
}: DescriptionListGroupProps) => {
  if (isCard) {
    return <Card {...cardProps}>{children}</Card>;
  }

  return (
    <div className={css(styles.descriptionListGroup, className)} {...props}>
      {children}
    </div>
  );
};

DescriptionListGroup.displayName = 'DescriptionListGroup';
