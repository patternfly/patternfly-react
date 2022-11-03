import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';

/** Renders buttons styled as links beneath the alert title and description when this sub-component
 * is passed into the alert's actionLinks property.
 */

export interface AlertActionLinkProps extends ButtonProps {
  /** Content rendered inside the alert action link.  */
  children?: string;
  /** Additional classes added to the alert action link.  */
  className?: string;
}

export const AlertActionLink: React.FunctionComponent<AlertActionLinkProps> = ({
  className = '',
  children,
  ...props
}: AlertActionLinkProps) => (
  <Button variant={ButtonVariant.link} isInline className={className} {...props}>
    {children}
  </Button>
);
AlertActionLink.displayName = 'AlertActionLink';
