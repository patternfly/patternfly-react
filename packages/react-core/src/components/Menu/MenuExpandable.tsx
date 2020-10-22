import * as React from 'react';
// import styles from '@patternfly/react-styles/css/components/Nav/nav';
import styles from '@patternfly/react-styles/css/components/Menu/menu';
import { css } from '@patternfly/react-styles';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { getUniqueId } from '../../helpers/util';
import { MenuContext } from './MenuContext';
import { PickOptional } from '../../helpers/typeUtils';
import { getOUIAProps, OUIAProps, getDefaultOUIAId } from '../../helpers';

export interface MenuExpandableProps
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

interface MenuExpandableState {
  expandedState: boolean;
  ouiaStateId: string;
}

export class MenuExpandable extends React.Component<MenuExpandableProps, MenuExpandableState> {
  static displayName = 'MenuExpandable';
  static defaultProps: PickOptional<MenuExpandableProps> = {
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
    ouiaStateId: getDefaultOUIAId(MenuExpandable.displayName)
  };

  componentDidMount() {
    this.setState({ expandedState: this.props.isExpanded });
  }

  componentDidUpdate(prevProps: MenuExpandableProps) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      // id,
      title,
      srText,
      // children,
      className,
      // isActive,
      // groupId,
      // isExpanded,
      // onExpand,
      // ouiaId,
      // ouiaSafe,
      ...props
    } = this.props;

    const { expandedState } = this.state;

    const onClick = () => {
      this.setState(prevState => ({ expandedState: !prevState.expandedState }));
    };

    return (
      <MenuContext.Consumer>
        {(context: any) => (
          <li
            className={css(
              styles.menuListItem,
              styles.menuItemToggleIcon,
              // styles.modifiers.expandable,
              // expandedState && styles.modifiers.expanded,
              // isActive && styles.modifiers.current,
              className
            )}
            {...getOUIAProps(
              MenuContext.displayName,
              this.props.ouiaId !== undefined ? this.props.ouiaId : this.state.ouiaStateId
            )}
            onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => this.handleToggle(e, context.onToggle)}
            {...props}
          >
            <button
              className={styles.menuItem}
              id={srText ? null : this.id}
              onClick={onClick}
              onMouseDown={e => e.preventDefault()}
              aria-expanded={expandedState}
            >
              {title}
              <div className={css(styles.menuItemMain)}>
                <span className={css(styles.menuItemToggleIcon)}>
                  <AngleRightIcon aria-hidden="true" />
                </span>
              </div>
            </button>
            {/* <section className={css(styles.navSubnav)} aria-labelledby={this.id} hidden={expandedState ? null : true}>
              {srText && (
                <h2 className={css(a11yStyles.screenReader)} id={this.id}>
                  {srText}
                </h2>
              )}
              <ul className={css(styles.navList)}>{children}</ul>
            </section> */}
          </li>
        )}
      </MenuContext.Consumer>
    );
  }
}
