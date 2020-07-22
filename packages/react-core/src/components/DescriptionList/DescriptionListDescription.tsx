import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListDescriptionProps extends React.HTMLProps<HTMLElement> {
  /** Anything that can be rendered inside of list description */
  children: React.ReactNode;
  /** Additional classes added to the DescriptionListDescription */
  className?: string;
  /** Indicates which component will be used for the text wrapped by the description */
  textComponent?: React.ReactNode;
  /** Default hyperlink location */
  href?: string;
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
}

export const DescriptionListDescription: React.FunctionComponent<DescriptionListDescriptionProps> = ({
  children = null,
  textComponent = 'span',
  className,
  href,
  icon,
  ...props
}: DescriptionListDescriptionProps) => {
  const DescriptionListText: any = textComponent;
  return (
    <dd className={css(styles.descriptionListDescription, className)} {...props}>
      <DescriptionListText href={href} className={'pf-c-description-list__text'}>
        {icon && <span>{icon}</span>}
        {children}
      </DescriptionListText>
    </dd>
  );
};
DescriptionListDescription.displayName = 'DescriptionListDescription';
