import { Children, Component, createContext } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { SimpleListGroup } from './SimpleListGroup';
import { SimpleListItemProps } from './SimpleListItem';

export interface SimpleListProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onSelect'> {
  /** Content rendered inside the SimpleList */
  children?: React.ReactNode;
  /** Additional classes added to the SimpleList container */
  className?: string;
  /** Callback when an item is selected */
  onSelect?: (
    ref: React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>,
    props: SimpleListItemProps
  ) => void;
  /** Indicates whether component is controlled by its internal state */
  isControlled?: boolean;
  /** aria-label for the <ul> element that wraps the SimpleList items. */
  'aria-label'?: string;
}

export interface SimpleListState {
  /** Ref of the current SimpleListItem */
  currentRef: React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>;
}

interface SimpleListContextProps {
  currentRef: React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>;
  updateCurrentRef: (
    id: React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>,
    props: SimpleListItemProps
  ) => void;
  isControlled: boolean;
}

export const SimpleListContext = createContext<Partial<SimpleListContextProps>>({});

class SimpleList extends Component<SimpleListProps, SimpleListState> {
  static displayName = 'SimpleList';
  state = {
    currentRef: null as React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>
  };

  static defaultProps: SimpleListProps = {
    children: null as React.ReactNode,
    className: '',
    isControlled: true
  };

  handleCurrentUpdate = (
    newCurrentRef: React.RefObject<HTMLButtonElement | null> | React.RefObject<HTMLAnchorElement | null>,
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
      isGrouped = (Children.toArray(children)[0] as React.ReactElement<any>).type === SimpleListGroup;
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
            <ul className={css('pf-v6-c-simple-list__list')} role="list" aria-label={ariaLabel}>
              {children}
            </ul>
          )}
        </div>
      </SimpleListContext.Provider>
    );
  }
}

export { SimpleList };
