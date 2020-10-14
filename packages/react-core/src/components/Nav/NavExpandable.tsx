import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { getUniqueId } from '../../helpers/util';
import { NavContext } from './Nav';
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
      id,
      groupId,
      isExpanded,
      onExpand,
      ouiaId,
      ouiaSafe,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      title,
      srText,
      children,
      className,
      isActive,
      ...props
    } = this.props;

    const { expandedState } = this.state;

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
            {...getOUIAProps(
              NavExpandable.displayName,
              this.props.ouiaId !== undefined ? this.props.ouiaId : this.state.ouiaStateId
            )}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => this.handleToggle(e, context.onToggle)}
            {...props}
          >
            <button
              className={styles.navLink}
              id={srText ? null : this.id}
              onClick={onClick}
              onMouseDown={e => e.preventDefault()}
              aria-expanded={expandedState}
            >
              {title}
              <span className={css(styles.navToggle)}>
                <span className={css(styles.navToggleIcon)}>
                  <AngleRightIcon aria-hidden="true" />
                </span>
              </span>
            </button>
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
