import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';

export interface AlertActionLinkProps extends ButtonProps {
  /** Content rendered inside the AlertLinkAction  */
  children?: string;
  /** Additional classes added to the AlertActionLink  */
  className?: string;
}

/**
 *
 */
export function AlertActionLink({ className = '', children, ...props }: AlertActionLinkProps) {
  return (
    <Button variant={ButtonVariant.link} isInline className={className} {...props}>
      {children}
    </Button>
  );
}
