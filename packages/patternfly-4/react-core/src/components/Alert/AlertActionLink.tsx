import React from 'react';
import { Button } from '../Button';

export interface AlertActionLinkProps {
  /** content rendered inside the AlertLinkAction  */
  children?: string;
  /** additional classes added to the AlertActionLink  */
  className?: string;
};

export const defaultAlertActionLinkProps = {
  children: '',
  className: ''
};

export const AlertActionLink: React.FunctionComponent<AlertActionLinkProps> = ({ className, children, ...props }: AlertActionLinkProps) => (
  <Button variant="link" {...props}>
    {children}
  </Button>
);

AlertActionLink.defaultProps = defaultAlertActionLinkProps;
