import * as React from 'react';
import { SelectOptionObject } from './SelectOption';

export interface SelectContextInterface {
  onSelect: (
    event: React.MouseEvent<any, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
    value: string | SelectOptionObject,
    isPlaceholder?: boolean
  ) => void;
  onClose: () => void;
  onFavorite: (itemId: string, isFavorite: boolean) => void;
  variant: string;
  inputIdPrefix: string;
}

export const SelectContext = React.createContext<SelectContextInterface | null>(null);

export const SelectProvider = SelectContext.Provider;
export const SelectConsumer = SelectContext.Consumer;

export enum SelectVariant {
  single = 'single',
  checkbox = 'checkbox',
  typeahead = 'typeahead',
  typeaheadMulti = 'typeaheadmulti',
  panel = 'panel'
}

export enum SelectDirection {
  up = 'up',
  down = 'down'
}

export const KeyTypes = {
  Tab: 'Tab',
  Space: ' ',
  Escape: 'Escape',
  Enter: 'Enter',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight'
};
