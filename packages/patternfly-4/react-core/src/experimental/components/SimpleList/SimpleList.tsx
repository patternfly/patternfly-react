import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { SimpleListGroup } from './SimpleListGroup';

export interface SimpleListProps {
  /** Content rendered inside the SimpleList item */
  children?: React.ReactNode;
  /** Additional classes added to the SimpleList <ul> */
  className?: string;
}

interface SimpleListContextProps {
  currentRef: React.RefObject<HTMLButtonElement>;
  updateCurrentRef: (id: React.RefObject<HTMLButtonElement>) => void;
}

export const SimpleListContext = React.createContext<Partial<SimpleListContextProps>>({});

export class SimpleList extends React.Component<SimpleListProps> {
  state = {
    currentRef: { current: null }
  };

  static defaultProps: SimpleListProps = {
    children: null as React.ReactNode,
    className: ''
  };

  componentDidMount() {
    //console with debug mode telling user component is in beta
  }

  handleCurrentUpdate = (newCurrentRef: React.RefObject<HTMLButtonElement>) => {
    console.log('handling update for ', newCurrentRef);
    this.setState({ currentRef: newCurrentRef });
  };

  render() {
    const { children, className, ...props } = this.props;

    let isGrouped = false;
    if (children) {
      isGrouped = (React.Children.toArray(children)[0] as React.ReactElement).type === SimpleListGroup;
    }

    return (
      <SimpleListContext.Provider
        value={{
          currentRef: this.state.currentRef,
          updateCurrentRef: this.handleCurrentUpdate
        }}
      >
        <div className={css(styles.simpleList)} {...props}>
          {isGrouped && children}
          {!isGrouped && <ul className={css('pf-c-simple-list__list')}>{children}</ul>}
        </div>
      </SimpleListContext.Provider>
    );
  }
}
