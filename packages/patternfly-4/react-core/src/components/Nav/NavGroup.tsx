import * as React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../helpers/util';


export interface NavGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Title shown for the group */
  title: string;
  /** Anything that can be rendered inside of the group */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
  /** Identifier to use for the section aria label */
  id?: string;
}

export class NavGroup extends React.Component<NavGroupProps> {
  static defaultProps = {
    className: '',
    id: ''
  };

  static componentType = 'NavGroup';
  id = this.props.id || getUniqueId();

  render() {
    const { id, title, children, className, ...props } = this.props;

    return (
      <section className={css(styles.navSection, className)} aria-labelledby={this.id} {...props}>
        <h2 className={css(styles.navSectionTitle)} id={this.id}>
          {title}
        </h2>
        <ul className={css(styles.navSimpleList)}>{children}</ul>
      </section>
    );
  }
}

export default NavGroup;
