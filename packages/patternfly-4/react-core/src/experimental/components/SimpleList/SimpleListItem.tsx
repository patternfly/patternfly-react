import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';
import { SimpleListContext } from './SimpleList';

export interface SimpleListItemProps {
  /** Content rendered inside the SimpleList item */
  children?: React.ReactNode;
  /** Additional classes added to the SimpleList <button> */
  className?: string;
  /** Additional classes added to the SimpleList <li> */
  listItemClassName?: string;
  /** Indicates if the link is current/highlighted */
  isCurrent?: boolean;
  /** Component type of the SimpleList item */
  component?: 'button' | 'a';
  /** OnClick callback for the SimpleList item */
  onClick?: (event: React.MouseEvent | React.ChangeEvent) => void;
}

export class SimpleListItem extends React.Component<SimpleListItemProps> {
  ref = React.createRef<HTMLButtonElement & HTMLAnchorElement>();
  static defaultProps: SimpleListItemProps = {
    children: null,
    className: '',
    listItemClassName: '',
    isCurrent: false,
    component: 'button',
    onClick: () => {}
  };

  componentDidMount() {
    console.log('mounted ref', this.ref);
  }
  render() {
    const { children, isCurrent, className, listItemClassName, component: Component, onClick, ...props } = this.props;
    console.log('ref', this.ref);
    return (
      <SimpleListContext.Consumer>
        {({ currentRef, updateCurrentRef }) => {
          const isCurrentItem = this.ref && currentRef ? currentRef.current === this.ref.current : isCurrent;

          return (
            <li className={css('pf-c-simple-list__item', listItemClassName)}>
              <Component
                className={css(styles.simpleListItemLink, isCurrentItem && styles.modifiers.current, className)}
                onClick={(evt: React.MouseEvent) => {
                  onClick(evt);
                  updateCurrentRef(this.ref);
                }}
                {...props}
                ref={this.ref}
              >
                {children}
              </Component>
            </li>
          );
        }}
      </SimpleListContext.Consumer>
    );
  }
}
