import * as React from 'react';
import { Title, TitleSizes } from '../Title';
import { PopoverContext } from './PopoverContext';

export const PopoverInternalHeader: React.FunctionComponent<PopoverInternalHeaderProps> = ({
  children,
  id,
  ...props
}: PopoverInternalHeaderProps) => (
  <PopoverContext.Consumer>
    {({ headerComponent }) => (
      <Title headingLevel={headerComponent} size={TitleSizes.md} id={id} {...props}>
        {children}
      </Title>
    )}
  </PopoverContext.Consumer>
);
PopoverInternalHeader.displayName = 'PopoverInternalHeader';

export interface PopoverInternalHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
}
