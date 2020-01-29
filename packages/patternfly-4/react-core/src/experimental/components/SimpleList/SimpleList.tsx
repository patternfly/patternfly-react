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

export class SimpleList extends React.Component<SimpleListProps> {
  static defaultProps: SimpleListProps = {
    children: null as React.ReactNode,
    className: ''
  };
  render() {
    const { children, className, ...props } = this.props;

    let isGrouped = false;
    if (children) {
      isGrouped = (React.Children.toArray(children)[0] as React.ReactElement).type === SimpleListGroup;
    }

    return (
      <div className={css(styles.simpleList)} {...props}>
        {isGrouped && children}
        {!isGrouped && <ul className={css('pf-c-simple-list__list')}>{children}</ul>}
      </div>
    );
  }
}
