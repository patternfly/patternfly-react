import * as React from 'react';
import { BaseSizes } from '../../styles/sizes';
import { Title } from '../Title';
import { Omit } from '../../helpers/typeUtils';

export const PopoverHeader: React.FunctionComponent<PopoverHeaderProps> = ({ children, id, ...props }) => (
  <Title headingLevel="h6" size={BaseSizes.xl as keyof typeof BaseSizes} id={id} {...props}>
    {children}
  </Title>
);

export interface PopoverHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'>  {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
}
