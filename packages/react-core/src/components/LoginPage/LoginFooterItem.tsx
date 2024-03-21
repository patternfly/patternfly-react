import { HTMLProps, ReactNode, FunctionComponent, isValidElement } from 'react';

export interface LoginFooterItemProps extends HTMLProps<HTMLAnchorElement> {
  /** Content rendered inside the footer link item */
  children?: ReactNode;
  /** Additional classes added to the footer link item  */
  className?: string;
  /** The URL of the footer link item */
  href?: string;
  /** Specifies where to open the linked document */
  target?: string;
}

export const LoginFooterItem: FunctionComponent<LoginFooterItemProps> = ({
  children = null,
  href = '#',
  target = '_blank',
  ...props
}: LoginFooterItemProps) =>
  isValidElement(children) ? (
    children
  ) : (
    <a target={target} href={href} {...props}>
      {children}
    </a>
  );
LoginFooterItem.displayName = 'LoginFooterItem';
