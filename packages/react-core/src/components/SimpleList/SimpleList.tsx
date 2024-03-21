import { HTMLProps, ReactNode, RefObject, ReactElement, createContext, Children, Component } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { SimpleListGroup } from './SimpleListGroup';
import { SimpleListItemProps } from './SimpleListItem';

export interface SimpleListProps extends Omit<HTMLProps<HTMLDivElement>, 'onSelect'> {
  /** Content rendered inside the SimpleList */
  children?: ReactNode;
  /** Additional classes added to the SimpleList container */
  className?: string;
  /** Callback when an item is selected */
  onSelect?: (ref: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>, props: SimpleListItemProps) => void;
  /** Indicates whether component is controlled by its internal state */
  isControlled?: boolean;
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  'aria-label'?: string;
}

export interface SimpleListState {
  /** Ref of the current SimpleListItem */
  currentRef: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>;
}

interface SimpleListContextProps {
  currentRef: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>;
  updateCurrentRef: (
    id: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>,
    props: SimpleListItemProps
  ) => void;
  isControlled: boolean;
}

export const SimpleListContext = createContext<Partial<SimpleListContextProps>>({});

class SimpleList extends Component<SimpleListProps, SimpleListState> {
  static displayName = 'SimpleList';
  state = {
    currentRef: null as RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>
  };

  static defaultProps: SimpleListProps = {
    children: null as ReactNode,
    className: '',
    isControlled: true
  };

  handleCurrentUpdate = (
    newCurrentRef: RefObject<HTMLButtonElement> | RefObject<HTMLAnchorElement>,
    itemProps: SimpleListItemProps
  ) => {
    this.setState({ currentRef: newCurrentRef });
    const { onSelect } = this.props;
    onSelect && onSelect(newCurrentRef, itemProps);
  };

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, className, onSelect, isControlled, 'aria-label': ariaLabel, ...props } = this.props;

    let isGrouped = false;
    if (children) {
      isGrouped = (Children.toArray(children)[0] as ReactElement).type === SimpleListGroup;
    }

    return (
      <SimpleListContext.Provider
        value={{
          currentRef: this.state.currentRef,
          updateCurrentRef: this.handleCurrentUpdate,
          isControlled
        }}
      >
        <div className={css(styles.simpleList, className)} {...props}>
          {isGrouped && children}
          {!isGrouped && (
            <ul className={css('pf-v5-c-simple-list__list')} role="list" aria-label={ariaLabel}>
              {children}
            </ul>
          )}
        </div>
      </SimpleListContext.Provider>
    );
  }
}

export { SimpleList };
