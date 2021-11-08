import * as React from 'react';
import { Title, TitleSizes } from '../Title';
import { PopoverContext } from './PopoverContext';

export const PopoverHeader: React.FunctionComponent<PopoverHeaderProps> = ({
  children,
  id,
  ...props
}: PopoverHeaderProps) => (
  <PopoverContext.Consumer>
    {({ headerComponent }) => (
      <Title headingLevel={headerComponent} size={TitleSizes.md} id={id} {...props}>
        {children}
      </Title>
    )}
  </PopoverContext.Consumer>
);
PopoverHeader.displayName = 'PopoverHeader';

export interface PopoverHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
}
