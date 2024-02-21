import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { getUniqueId } from '../../helpers/util';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface NavExpandableProps
  extends Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'title'>,
    OUIAProps {
  /** Title content shown for the expandable list */
  title: React.ReactNode;
  /** If defined, screen readers will read this text instead of the list title */
  srText?: string;
  /** Boolean to programatically expand or collapse section */
  isExpanded?: boolean;
  /** Anything that can be rendered inside of the expandable list */
  children?: React.ReactNode;
  /** Additional classes added to the container */
  className?: string;
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId?: string | number;
  /** If true makes the expandable list title active */
  isActive?: boolean;
  /** Identifier to use for the section aria label */
  id?: string;
  /** allow consumer to optionally override this callback and manage expand state externally. if passed will not call Nav's onToggle. */
  onExpand?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, val: boolean) => void;
  /** Additional props added to the NavExpandable <button> */
  buttonProps?: any;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
}

interface NavExpandableState {
  expandedState: boolean;
  ouiaStateId: string;
}

class NavExpandable extends React.Component<NavExpandableProps, NavExpandableState> {
  static displayName = 'NavExpandable';
  static defaultProps: PickOptional<NavExpandableProps> = {
    srText: '',
    isExpanded: false,
    children: '',
    className: '',
    groupId: null as string,
    isActive: false,
    id: ''
  };

  id = this.props.id || getUniqueId();

  state = {
    expandedState: this.props.isExpanded,
    ouiaStateId: getDefaultOUIAId(NavExpandable.displayName)
  };

  componentDidMount() {
    this.setState({ expandedState: this.props.isExpanded });
  }

  componentDidUpdate(prevProps: NavExpandableProps) {
    if (this.props.isExpanded !== prevProps.isExpanded) {
      this.setState({ expandedState: this.props.isExpanded });
    }
  }

  onExpand = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    onToggle: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      groupId: string | number,
      expandedState: boolean
    ) => void
  ) => {
    const { expandedState } = this.state;
    if (this.props.onExpand) {
      this.props.onExpand(event, !expandedState);
    } else {
      this.setState((prevState) => ({ expandedState: !prevState.expandedState }));
      const { groupId } = this.props;
      onToggle(event, groupId, !expandedState);
    }
  };

  render() {
    const {
      title,
      srText,
      children,
      className,
      isActive,
      ouiaId,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      groupId,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isExpanded,
      buttonProps,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onExpand,
      ...props
    } = this.props;

    const { expandedState, ouiaStateId } = this.state;

    return (
      <NavContext.Consumer>
        {(context) => (
          <li
            className={css(
              styles.navItem,
              expandedState && styles.modifiers.expanded,
              isActive && styles.modifiers.current,
              className
            )}
            {...getOUIAProps(NavExpandable.displayName, ouiaId !== undefined ? ouiaId : ouiaStateId)}
            {...props}
          >
            <PageSidebarContext.Consumer>
              {({ isSidebarOpen }) => (
                <button
                  className={css(styles.navLink)}
                  id={srText ? null : this.id}
                  onClick={(event) => this.onExpand(event, context.onToggle)}
                  aria-expanded={expandedState}
                  tabIndex={isSidebarOpen ? null : -1}
                  {...buttonProps}
                >
                  {typeof title !== 'string' ? <span className={css(`${styles.nav}__link-text`)}>{title}</span> : title}
                  <span className={css(styles.navToggle)}>
                    <span className={css(styles.navToggleIcon)}>
                      <AngleRightIcon aria-hidden="true" />
                    </span>
                  </span>
                </button>
              )}
            </PageSidebarContext.Consumer>
            <section className={css(styles.navSubnav)} aria-labelledby={this.id} hidden={expandedState ? null : true}>
              {srText && (
                <h2 className="pf-v6-screen-reader" id={this.id}>
                  {srText}
                </h2>
              )}
              <ul className={css(styles.navList)} role="list">
                {children}
              </ul>
            </section>
          </li>
        )}
      </NavContext.Consumer>
    );
  }
}

export { NavExpandable };
