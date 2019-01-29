import { FunctionComponent } from 'react';
import { DropdownItemProps } from './DropdownItem';

export interface ItemProps extends DropdownItemProps {
}

declare const Item: FunctionComponent<ItemProps>;

export default Item;