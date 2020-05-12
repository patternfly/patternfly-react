import * as React from 'react';
import { action, computed } from 'mobx';
import { observer } from 'mobx-react';
import { EventListener } from '../types';
import ElementContext from '../utils/ElementContext';

export const SELECTION_EVENT = 'selection';

export type SelectionEventListener = EventListener<[string[]]>;

interface SelectionHandlerState {
  selectedIds?: string[];
}

export type OnSelect = (e: React.MouseEvent) => void;

export const useSelection = (multi: boolean = false, controlled: boolean = false): [boolean, OnSelect] => {
  const element = React.useContext(ElementContext);
  const elementRef = React.useRef(element);
  elementRef.current = element;

  const selected = React.useMemo(
    () =>
      computed(() => {
        const { selectedIds } = element.getController().getState<SelectionHandlerState>();
        return !!selectedIds && selectedIds.includes(element.getId());
      }),
    [element]
  );

  const onSelect = React.useCallback(
    action((e: React.MouseEvent): void => {
      e.stopPropagation();
      const id = elementRef.current.getId();
      const state = elementRef.current.getController().getState<SelectionHandlerState>();
      const idx = state.selectedIds ? state.selectedIds.indexOf(id) : -1;
      let selectedIds: string[];
      let raise = false;
      if (multi && (e.ctrlKey || e.metaKey)) {
        if (!state.selectedIds) {
          raise = true;
          selectedIds = [id];
        } else {
          selectedIds = [...state.selectedIds];
          if (idx === -1) {
            raise = true;
            selectedIds.push(id);
          } else {
            selectedIds.splice(idx, 1);
          }
        }
      } else if (idx === -1 || multi) {
        raise = true;
        selectedIds = [id];
      } else {
        selectedIds = [];
      }
      if (!controlled) {
        state.selectedIds = selectedIds;
      }
      elementRef.current.getController().fireEvent(SELECTION_EVENT, selectedIds);
      if (raise) {
        elementRef.current.raise();
      }
    }),
    []
  );
  return [selected.get(), onSelect];
};

export interface WithSelectionProps {
  selected: boolean;
  onSelect: OnSelect;
}

export const withSelection = (multi: boolean = false, controlled: boolean = false) => <P extends WithSelectionProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithSelectionProps>> = props => {
    const [selected, onSelect] = useSelection(multi, controlled);
    return <WrappedComponent {...(props as any)} selected={selected} onSelect={onSelect} />;
  };
  return observer(Component);
};
