import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/SimpleList/simple-list';

export interface SimpleListItemProps {
  /** Content rendered inside the SimpleList item */
  children?: React.ReactNode;
  /** Additional classes added to the SimpleList <button> */
  className?: string;
  /** Additional classes added to the SimpleList <li> */
  listItemClassName?: string;
  /** Indicates if the link is current/highlighted */
  isCurrent?: boolean;
}

export class SimpleListItem extends React.Component<SimpleListItemProps> {
  static defaultProps: SimpleListItemProps = {
    children: null,
    className: '',
    listItemClassName: '',
    isCurrent: false
  };
  render() {
    const { children, isCurrent, className, listItemClassName, ...props } = this.props;
    return (
      <li className={css('pf-c-simple-list__item', listItemClassName)} {...props}>
        <button className={css(styles.simpleListItemLink, isCurrent && styles.modifiers.current, className)}>
          {children}
        </button>
      </li>
    );
  }
}
