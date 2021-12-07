import * as React from 'react';
import { Title, TitleSizes } from '../Title';
import { PopoverContext } from './PopoverContext';

export interface PopoverInternalHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
  /** Class to be applied to the internal header */
  className?: string;
}

export const PopoverInternalHeader: React.FunctionComponent<PopoverInternalHeaderProps> = ({
  children,
  id,
  className,
  ...props
}: PopoverInternalHeaderProps) => (
  <PopoverContext.Consumer>
    {({ headerComponent }) => (
      <Title headingLevel={headerComponent} size={TitleSizes.md} id={id} className={className} {...props}>
        {children}
      </Title>
    )}
  </PopoverContext.Consumer>
);
PopoverInternalHeader.displayName = 'PopoverInternalHeader';
