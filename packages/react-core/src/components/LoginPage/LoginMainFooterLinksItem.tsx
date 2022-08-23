import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { css } from '@patternfly/react-styles';

export interface LoginMainFooterLinksItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the footer link item */
  children?: React.ReactNode;
  /** HREF for footer link item */
  href?: string;
  /** Target for footer link item */
  target?: string;
  /** Additional classes added to the footer link item  */
  className?: string;
  /** Component used to render the footer link item */
  linkComponent?: React.ReactNode;
  /** Props for the LinkComponent */
  linkComponentProps?: any;
}

export const LoginMainFooterLinksItem: React.FunctionComponent<LoginMainFooterLinksItemProps> = ({
  children = null,
  href = '',
  target = '',
  className = '',
  linkComponent = 'a',
  linkComponentProps,
  ...props
}: LoginMainFooterLinksItemProps) => {
  const LinkComponent = linkComponent as any;

  return (
    <li className={css(styles.loginMainFooterLinksItem, className)} {...props}>
      <LinkComponent
        className={css(styles.loginMainFooterLinksItemLink)}
        href={href}
        target={target}
        {...linkComponentProps}
      >
        {children}
      </LinkComponent>
    </li>
  );
};
LoginMainFooterLinksItem.displayName = 'LoginMainFooterLinksItem';
