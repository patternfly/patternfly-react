import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { css } from '@patternfly/react-styles';

export interface DescriptionListTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Anything that can be rendered inside of list text */
  children: React.ReactNode;
  /** Indicates which component will be used as dropdown menu */
  component?: React.ReactNode;
  /** Default hyperlink location */
  href?: string;
  /** Icon added to the left of the label text. */
  icon?: React.ReactNode;
}

export const DescriptionListText: React.FunctionComponent<DescriptionListTextProps> = ({
  children = null,
  component = 'div',
  href,
  icon,
  ...props
}: DescriptionListTextProps) => {
  const Component: any = component;

  return (
    <Component href={href} className={'pf-c-description-list__text'} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </Component>
  );
};
DescriptionListText.displayName = 'DescriptionListText';
