import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../typeUtils';

export interface AlertActionLinkProps extends HTMLProps<HTMLDivElement> {}

declare const AlertActionLink: SFC<AlertActionLinkProps>;

export default AlertActionLink;
