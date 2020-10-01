import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { PickOptional } from '../../helpers/typeUtils';

export enum DataListWrapModifier {
  nowrap = 'nowrap',
  truncate = 'truncate',
  breakWord = 'breakWord'
}

export interface DataListProps extends React.HTMLProps<HTMLUListElement> {
  /** Content rendered inside the DataList list */
  children?: React.ReactNode;
  /** Additional classes added to the DataList list */
  className?: string;
  /** Adds accessible text to the DataList list */
  'aria-label': string;
  /** Optional callback to make DataList selectable, fired when DataListItem selected */
  onSelectDataListItem?: (id: string) => void;
  /** Optional callback to make DataList draggable, fired when dragging ends */
  onDragFinish?: (newList: React.ReactElement[]) => void;
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
}

interface DataListState {
  childrenCopy: React.ReactNode;
  renderable: React.ReactElement[];
  draggedItem: React.ReactElement;
  dragging: boolean;
  to: number;
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

  state: DataListState = {
    childrenCopy: this.props.children,
    renderable: React.Children.toArray(this.props.children) as React.ReactElement[],
    to: -1,
    draggedItem: null,
    dragging: false
  };

  static getDerivedStateFromProps(props: DataListProps, state: DataListState) {
    if (props.children !== state.childrenCopy) {
      return {
        renderable: React.Children.toArray(props.children) as React.ReactElement[],
        childrenCopy: props.children
      };
    }

    return null;
  }

  componentDidUpdate() {
    if (this.dragFinished) {
      this.arrayCopy = React.Children.toArray(this.props.children) as React.ReactElement[];
      this.dragFinished = false;

      this.setState({
        renderable: React.Children.toArray(this.props.children) as React.ReactElement[],
        to: -1,
        draggedItem: null
      });
    }
  }

  getIndex = (id: string) => this.state.renderable.findIndex(item => item.props.id === id);

  move = (arr: React.ReactElement[], oldIndex: number, newIndex: number) => {
    const { onDragMove } = this.props;
    const { draggedItem } = this.state;
    const ghost = React.cloneElement(draggedItem, {
      className: css(draggedItem.props.className, styles.modifiers.ghostRow),
      'aria-pressed': true
    });

    arr.splice(oldIndex, 1);
    arr.splice(newIndex, 0, ghost);
    onDragMove(oldIndex, newIndex);
    return arr;
  };

  dragStart = (evt: React.DragEvent) => {
    const { children, onDragStart } = this.props;
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    // e.dataTransfer.setDragImage(React.createElement('div'), 0, 0);

    this.setState({
      draggedItem: React.Children.toArray(children).find(
        item => (item as React.ReactElement).props.id === evt.currentTarget.id
      ) as React.ReactElement
    });
    onDragStart(evt.currentTarget.id);
  };

  dragEnd = (evt: React.DragEvent) => {
    const { to, renderable, draggedItem } = this.state;
    const { onDragFinish } = this.props;

    const data = renderable;
    data.splice(to, 1, draggedItem);
    this.dragFinished = true;
    onDragFinish(data);
  };

  dragOver = (evt: React.DragEvent) => {
    const { to } = this.state;
    evt.preventDefault();
    const currListItem = (evt.target as Element).closest('li');

    const currInd = currListItem ? this.getIndex(currListItem.id) : 0;
    if (currInd !== to) {
      this.setState(prevState => ({
        to: currInd,
        renderable: this.move(this.arrayCopy, prevState.to === -1 ? currInd : prevState.to, currInd)
      }));
    }
  };

  handleDragButtonKeys = (evt: React.KeyboardEvent) => {
    const { to, draggedItem, dragging, renderable } = this.state;
    const { children, onDragFinish, onDragStart, onDragCancel } = this.props;
    if (
      evt.key !== ' ' &&
      evt.key !== 'Escape' &&
      evt.key !== 'Enter' &&
      evt.key !== 'ArrowUp' &&
      evt.key !== 'ArrowDown'
    ) {
      if (dragging) {
        this.setState({
          dragging: false
        });
        this.dragFinished = true;
      }
      return;
    }
    evt.preventDefault();

    const dragItem = (evt.target as Element).closest('li');
    const dragInd = this.getIndex(dragItem.id);

    if (evt.key === ' ' || (evt.key === 'Enter' && !dragging)) {
      onDragStart(dragItem.id);
      this.setState({
        dragging: true,
        draggedItem: React.Children.toArray(children).find(
          item => (item as React.ReactElement).props.id === dragItem.id
        ) as React.ReactElement
      });
    } else if (dragging) {
      if (evt.key === 'Escape' || evt.key === 'Enter') {
        this.setState({
          dragging: false
        });
        this.dragFinished = true;
        if (evt.key === 'Enter') {
          const data = renderable;
          data.splice(to, 1, draggedItem);
          onDragFinish(data);
        } else {
          onDragCancel();
        }
      } else if (evt.key === 'ArrowUp') {
        this.setState(prevState => {
          const prevTo = prevState.to === -1 ? dragInd : prevState.to;
          const next = prevTo - 1 >= 0 ? prevTo - 1 : 0;
          return {
            to: next,
            renderable: this.move(this.arrayCopy, prevTo, next)
          };
        });
      } else if (evt.key === 'ArrowDown') {
        this.setState(prevState => {
          const prevTo = prevState.to === -1 ? dragInd : prevState.to;
          const next = prevTo + 1 < this.arrayCopy.length ? prevTo + 1 : this.arrayCopy.length - 1;
          return {
            to: next,
            renderable: this.move(this.arrayCopy, prevTo, next)
          };
        });
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
      ...props
    } = this.props;
    const { renderable } = this.state;
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
          {...props}
          {...dragProps}
        >
          {isDraggable ? renderable : children}
        </ul>
      </DataListContext.Provider>
    );
  }
}
