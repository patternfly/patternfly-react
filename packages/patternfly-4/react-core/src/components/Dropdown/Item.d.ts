import { SFC, HTMLProps, ReactType } from 'react';
import { DropdownItemProps } from './DropdownItem';

export interface ItemProps extends DropdownItemProps {
}

declare const Item: SFC<ItemProps>;

export default Item;