import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';

export const ListVariant: {
  grid: 'grid';
  inline: 'inline';
};

export interface ListProps extends HTMLProps<HTMLUListElement> {
  children?: ReactNode;
  variant?: OneOf<typeof ListVariant, keyof typeof ListVariant>;
}

declare const List: FunctionComponent<ListProps>;

export default List;
