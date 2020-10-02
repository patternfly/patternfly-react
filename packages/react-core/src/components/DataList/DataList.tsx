import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { PickOptional } from '../../helpers/typeUtils';

export enum DataListWrapModifier {
  nowrap = 'nowrap',
  truncate = 'truncate',
  breakWord = 'breakWord'
}

export interface DataListProps extends Omit<React.HTMLProps<HTMLUListElement>, 'onDragStart'> {
  /** Content rendered inside the DataList list */
  children?: React.ReactNode;
  /** Additional classes added to the DataList list */
  className?: string;
  /** Adds accessible text to the DataList list */
  'aria-label': string;
  /** Optional callback to make DataList selectable, fired when DataListItem selected */
  onSelectDataListItem?: (id: string) => void;
  /** Optional callback to make DataList draggable, fired when dragging ends */
  onDragFinish?: (newItemOrder: string[]) => void;
  /** Optional informational callback for dragging, fired when dragging starts */
  onDragStart?: (id: string) => void;
  /** Optional informational callback for dragging, fired when an item moves */
  onDragMove?: (oldIndex: number, newIndex: number) => void;
  /** Optional informational callback for dragging, fired when dragging is cancelled */
  onDragCancel?: () => void;
  /** Id of DataList item currently selected */
  selectedDataListItemId?: string;
  /** Flag indicating if DataList should have compact styling */
  isCompact?: boolean;
  /** Determines which wrapping modifier to apply to the DataList */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
  /** Order of items in a draggable DataList */
  itemOrder?: string[];
}

interface DataListState {
  draggedItemId: string;
  draggingToItemIndex: number;
  dragging: boolean;
  tempItemOrder: string[];
}

interface DataListContextProps {
  isSelectable: boolean;
  selectedDataListItemId: string;
  updateSelectedDataListItem: (id: string) => void;
  isDraggable: boolean;
  dragStart: (e: React.DragEvent) => void;
  dragEnd: (e: React.DragEvent) => void;
  dragKeyHandler: (e: React.KeyboardEvent) => void;
}

export const DataListContext = React.createContext<Partial<DataListContextProps>>({
  isSelectable: false
});

const moveItem = (arr: string[], i1: string, toIndex: number) => {
  const fromIndex = arr.indexOf(i1);
  if (fromIndex === toIndex) {
    return arr;
  }
  const temp = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, temp[0]);

  return arr;
};

export class DataList extends React.Component<DataListProps, DataListState> {
  static displayName = 'DataList';
  static defaultProps: PickOptional<DataListProps> = {
    children: null,
    className: '',
    selectedDataListItemId: '',
    isCompact: false,
    wrapModifier: null
  };
  dragFinished: boolean = false;
  arrayCopy: React.ReactElement[] = React.Children.toArray(this.props.children) as React.ReactElement[];
  ref = React.createRef<HTMLUListElement>();

  state: DataListState = {
    tempItemOrder: [],
    draggedItemId: null,
    draggingToItemIndex: null,
    dragging: false
  };

  componentDidUpdate(oldProps: DataListProps) {
    if (this.dragFinished) {
      this.dragFinished = false;

      this.setState({
        tempItemOrder: [...this.props.itemOrder],
        draggedItemId: null,
        dragging: false
      });
    }
    if (oldProps.itemOrder !== this.props.itemOrder) {
      this.move(this.props.itemOrder);
    }
  }

  getIndex = (id: string) => Array.from(this.ref.current.children).findIndex(item => item.id === id);

  move = (itemOrder: string[]) => {
    const ulNode = this.ref.current;
    const nodes = Array.from(ulNode.children);
    if (nodes.map(node => node.id).every((id, i) => id === itemOrder[i])) {
      return;
    }
    while (ulNode.firstChild) {
      ulNode.removeChild(ulNode.lastChild);
    }

    itemOrder.forEach(id => {
      ulNode.appendChild(nodes.find(n => n.id === id));
    });
  };

  dragStart0 = (el: HTMLElement) => {
    const { onDragStart } = this.props;
    const draggedItemId = el.id;

    el.classList.add(styles.modifiers.ghostRow);
    el.setAttribute('aria-pressed', 'true');
    this.setState({
      draggedItemId,
      dragging: true
    });
    onDragStart && onDragStart(draggedItemId);
  };

  dragStart = (evt: React.DragEvent) => {
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    this.dragStart0(evt.currentTarget as HTMLElement);
  };

  dragEnd0 = (el: HTMLElement) => {
    el.classList.remove(styles.modifiers.ghostRow);
    el.setAttribute('aria-pressed', 'false');
    this.props.onDragFinish(this.state.tempItemOrder);
  };

  dragEnd = (evt: React.DragEvent) => {
    this.dragEnd0(evt.currentTarget as HTMLElement);
  };

  dragOver0 = (id: string) => {
    const draggingToItemIndex = Array.from(this.ref.current.children).findIndex(item => item.id === id);
    if (draggingToItemIndex !== this.state.draggingToItemIndex) {
      const tempItemOrder = moveItem([...this.props.itemOrder], this.state.draggedItemId, draggingToItemIndex);
      this.move(tempItemOrder);

      this.setState({
        draggingToItemIndex,
        tempItemOrder
      });
    }
  };

  dragOver = (evt: React.DragEvent) => {
    evt.preventDefault();
    const currListItem = (evt.target as Element).closest('li');
    if (currListItem && currListItem.classList.contains(css(styles.modifiers.ghostRow))) {
      return;
    }
    this.dragOver0(currListItem.id);
  };

  handleDragButtonKeys = (evt: React.KeyboardEvent) => {
    const { dragging } = this.state;
    const { onDragCancel } = this.props;
    if (
      evt.key !== ' ' &&
      evt.key !== 'Escape' &&
      evt.key !== 'Enter' &&
      evt.key !== 'ArrowUp' &&
      evt.key !== 'ArrowDown'
    ) {
      if (dragging) {
        evt.preventDefault();
      }
      return;
    }
    evt.preventDefault();

    const dragItem = (evt.target as Element).closest('li');

    if (evt.key === ' ' || (evt.key === 'Enter' && !dragging)) {
      this.dragStart0(dragItem);
    } else if (dragging) {
      if (evt.key === 'Escape' || evt.key === 'Enter') {
        this.setState({
          dragging: false
        });
        this.dragFinished = true;
        if (evt.key === 'Enter') {
          this.dragEnd0(dragItem);
        } else {
          onDragCancel && onDragCancel();
        }
      } else if (evt.key === 'ArrowUp') {
        const nextSelection = dragItem.previousSibling as HTMLElement;
        if (nextSelection) {
          this.dragOver0(nextSelection.id);
          (dragItem.querySelector(`.${styles.dataListItemDraggableButton}`) as HTMLElement).focus();
        }
      } else if (evt.key === 'ArrowDown') {
        const nextSelection = dragItem.nextSibling as HTMLElement;
        if (nextSelection) {
          this.dragOver0(nextSelection.id);
          (dragItem.querySelector(`.${styles.dataListItemDraggableButton}`) as HTMLElement).focus();
        }
      }
    }
  };

  render() {
    const {
      className,
      children,
      onSelectDataListItem,
      selectedDataListItemId,
      isCompact,
      onDragStart,
      onDragMove,
      onDragCancel,
      onDragFinish,
      wrapModifier,
      itemOrder,
      ...props
    } = this.props;
    const { dragging } = this.state;
    const isSelectable = onSelectDataListItem !== undefined;
    const isDraggable = onDragFinish !== undefined;

    const updateSelectedDataListItem = (id: string) => {
      onSelectDataListItem(id);
    };

    const dragProps = isDraggable && {
      onDragOver: this.dragOver,
      onDrop: this.dragOver
    };

    return (
      <DataListContext.Provider
        value={{
          isSelectable,
          selectedDataListItemId,
          updateSelectedDataListItem,
          isDraggable,
          dragStart: this.dragStart,
          dragEnd: this.dragEnd,
          dragKeyHandler: this.handleDragButtonKeys
        }}
      >
        <ul
          className={css(
            styles.dataList,
            isCompact && styles.modifiers.compact,
            wrapModifier && styles.modifiers[wrapModifier],
            className
          )}
          style={{
            ...(dragging && { overflowAnchor: 'none' }),
            ...props.style
          }}
          {...props}
          {...dragProps}
          ref={this.ref}
        >
          {children}
        </ul>
      </DataListContext.Provider>
    );
  }
}
