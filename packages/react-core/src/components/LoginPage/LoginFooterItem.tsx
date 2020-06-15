import * as React from 'react';

export interface LoginFooterItemProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Content rendered inside the footer Link Item */
  children?: React.ReactNode;
  /** Additional classes added to the Footer Link Item  */
  className?: string;
  /** The URL of the Footer Link Item */
  href?: string;
  /** Specifies where to open the linked document */
  target?: string;
}

/**
 *
 */
export function LoginFooterItem({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children = null,
  href = '#',
  target = '_blank',
  ...props
}: LoginFooterItemProps) {
  return React.isValidElement(children) ? (
    children
  ) : (
    <a target={target} href={href} {...props}>
      {children}
    </a>
  );
}
