import * as React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';

export class NavItemSeparator extends React.Component<React.HTMLProps<HTMLLIElement>> {
  static defaultProps = {
    className: ''
  };
  static componentType = 'NavItemSeparator';

  render() {
    const {className, ...rest} = this.props;
    return <li className={css(styles.navSeparator, className)} role="separator" {...rest} />
  }
}

export default NavItemSeparator;
