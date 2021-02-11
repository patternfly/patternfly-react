import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { getUniqueId } from '../../helpers/util';
import { NavContext } from './Nav';
import { PageSidebarContext } from '../Page/PageSidebar';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface NavExpandableProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    OUIAProps {
  /** Title shown for the expandable list */
  title: string;
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
  /** allow consumer to optionally override this callback and manage expand state externally */
  onExpand?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, val: boolean) => void;
  /** Additional props added to the NavExpandable <button> */
  buttonProps?: any;
}

interface NavExpandableState {
  expandedState: boolean;
  ouiaStateId: string;
}

export class NavExpandable extends React.Component<NavExpandableProps, NavExpandableState> {
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

  expandableRef = React.createRef<HTMLAnchorElement>();
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

  onExpand = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, val: boolean) => {
    if (this.props.onExpand) {
      this.props.onExpand(e, val);
    } else {
      this.setState({ expandedState: val });
    }
  };

  handleToggle = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    onToggle: (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>,
      groupId: string | number,
      expandedState: boolean
    ) => void
  ) => {
    // Item events can bubble up, ignore those
    if (!this.expandableRef.current || !this.expandableRef.current.contains(e.target as Node)) {
      return;
    }

    const { groupId } = this.props;
    const { expandedState } = this.state;
    onToggle(e, groupId, !expandedState);
    this.onExpand(e, !expandedState);
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
      ...props
    } = this.props;

    const { expandedState, ouiaStateId } = this.state;

    const onClick = () => {
      this.setState(prevState => ({ expandedState: !prevState.expandedState }));
    };

    return (
      <NavContext.Consumer>
        {(context: any) => (
          <li
            className={css(
              styles.navItem,
              styles.modifiers.expandable,
              expandedState && styles.modifiers.expanded,
              isActive && styles.modifiers.current,
              className
            )}
            {...getOUIAProps(NavExpandable.displayName, ouiaId !== undefined ? ouiaId : ouiaStateId)}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => this.handleToggle(e, context.onToggle)}
            {...props}
          >
            <PageSidebarContext.Consumer>
              {({ isNavOpen }) => (
                <button
                  className={styles.navLink}
                  id={srText ? null : this.id}
                  onClick={onClick}
                  onMouseDown={e => e.preventDefault()}
                  aria-expanded={expandedState}
                  tabIndex={isNavOpen ? null : -1}
                  {...buttonProps}
                >
                  {title}
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
                <h2 className={css(a11yStyles.screenReader)} id={this.id}>
                  {srText}
                </h2>
              )}
              <ul className={css(styles.navList)}>{children}</ul>
            </section>
          </li>
        )}
      </NavContext.Consumer>
    );
  }
}
