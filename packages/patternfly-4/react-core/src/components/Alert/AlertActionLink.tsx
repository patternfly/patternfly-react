import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';

export interface AlertActionLinkProps extends ButtonProps {
  /** content rendered inside the AlertLinkAction  */
  children?: string;
  /** additional classes added to the AlertActionLink  */
  className?: string;
};

export const AlertActionLink: React.FunctionComponent<AlertActionLinkProps> = ({
  className = '',
  children = '',
  ...props
}: AlertActionLinkProps) => (
  <Button variant={ButtonVariant.link} {...props}>
    {children}
  </Button>
);
