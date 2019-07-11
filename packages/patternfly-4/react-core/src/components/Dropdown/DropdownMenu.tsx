import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { keyHandler } from '../../helpers/util';
import { DropdownPosition, DropdownArrowContext, DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';

export interface DropdownMenuProps {
  /** Anything which can be rendered as dropdown items */
  children?: React.ReactNode; 
  /** Classess applied to root element of dropdown menu */
  className?: string; 
  /** Flag to indicate if menu is opened */
  isOpen?: boolean; 
  /** Flag to indicate if menu should be opened on enter */
  openedOnEnter?: boolean; 
  /** Flag to indicate if the first dropdown item should gain initial focus, set false when adding
   * a specific auto-focus item (like a current selection) otherwise leave as true 
   */
  autoFocus?: boolean;
  /** Indicates which component will be used as dropdown menu */
  component?: React.ReactNode; 
  /** Indicates where menu will be alligned horizontally */
  position?: DropdownPosition | 'right' | 'left';
  /** Flag to indicate if menu is grouped */
  isGrouped?: boolean; 
}

export interface DropdownMenuItem extends React.HTMLAttributes<any> {
  isDisabled: boolean;
  disabled: boolean;
  isHovered: boolean;
  ref: React.RefObject<any>;
}

export class DropdownMenu extends React.Component<DropdownMenuProps> {
  refsCollection = [] as React.RefObject<HTMLElement>[];

  static defaultProps = {
    className: '',
    isOpen: true,
    openedOnEnter: false,
    autoFocus: true,
    position: DropdownPosition.left,
    component: 'ul',
    isGrouped: false
  };

  componentDidMount() {
    const { autoFocus } = this.props;

    if (this.props.component === 'ul' && autoFocus) {
      const focusTarget = this.refsCollection.find(
        ref => ref && (ref.current && !ref.current.hasAttribute('disabled'))
      );
      if (focusTarget && focusTarget.current) {
        if (focusTarget.current.focus) {
          focusTarget.current.focus();
        }
        else {
          const searchedFocusTarget = ReactDOM.findDOMNode(focusTarget.current) as HTMLElement;
          searchedFocusTarget.focus()
        }
      }
      else if (focusTarget) {
        ; // eslint-disable-line react/no-find-dom-node
      }
    }
  }

  childKeyHandler = (index: number, position: string, custom = false) => {
    keyHandler(
      index,
      position,
      this.refsCollection,
      this.props.isGrouped ? this.refsCollection : React.Children.toArray(this.props.children),
      custom
    );
  };

  sendRef = (index: number, node: any, isDisabled: boolean) => {
    if (!node.getAttribute) {
      // eslint-disable-line react/no-find-dom-node
      this.refsCollection[index] = { current: ReactDOM.findDOMNode(node) as HTMLElement }; 
    } else if (isDisabled || node.getAttribute('role') === 'separator') {
      this.refsCollection[index] = null;
    } else {
      this.refsCollection[index] = node;
    }
  };

  extendChildren() {
    const { children, isGrouped } = this.props;
    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, groupedChildren => {
          const group = groupedChildren as React.ReactElement<{children: React.ReactNode}>;
          return React.cloneElement(group, {
            children:
              (group.props.children.constructor === Array &&
                React.Children.map(group.props.children as React.ReactElement<any>,
                  (option: React.ReactElement<any>) =>
                    React.cloneElement(option, {
                      index: index++
                    })
                  )) ||
                React.cloneElement(group.props.children as React.ReactElement<any>, {
                  index: index++
                })
          });
      });
    }
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child as React.ReactElement<any>, {
        index
      })
    );
  }

  extendCustomChildren() {
    const mappedChildren = React.Children.map(this.props.children, (child0, index) => {
      const child = child0 as React.ReactElement<DropdownMenuItem>;
      const mappedChild = React.cloneElement(child, {
        ref: React.createRef(),
        className: `${css(
          child.props.isDisabled && styles.modifiers.disabled,
          child.props.isHovered && styles.modifiers.hover,
          styles.dropdownMenuItem
        )}${child.props.className ? child.props.className : ''}`,
        tabIndex: -1,
        onKeyDown: (event: React.KeyboardEvent<any>) => {
          if (event.keyCode === KEY_CODES.TAB) { return };
          event.preventDefault();
          if (event.keyCode === KEY_CODES.ARROW_UP) {
            keyHandler(index, KEYHANDLER_DIRECTION.UP, this.refsCollection, React.Children.toArray(this.props.children), true);
          } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
            keyHandler(index, KEYHANDLER_DIRECTION.DOWN, this.refsCollection, React.Children.toArray(this.props.children), true);
          }
        }
      });
      !mappedChild.props.disabled
        ? (this.refsCollection[index] = mappedChild.props.ref)
        : (this.refsCollection[index] = null);
      return mappedChild;
    });
    return mappedChildren;
  }

  render() {
    const {
      className,
      isOpen,
      position,
      children,
      component,
      isGrouped,
      openedOnEnter,
      ...props
    } = this.props;
    const Component = component as any;
    return (
      <DropdownArrowContext.Provider
        value={{
          keyHandler: this.childKeyHandler,
          sendRef: this.sendRef
        }}
      >
        {Component === 'div' ? (
          <DropdownContext.Consumer>
            {({ onSelect, menuClass }) => (
              <ul
                className={css(
                  menuClass,
                  position === DropdownPosition.right && styles.modifiers.alignRight,
                  className
                )}
                hidden={!isOpen}
                onClick={event => onSelect && onSelect(event)}
              >
                <Component {...props}>{this.extendCustomChildren()}</Component>
              </ul>
            )}
          </DropdownContext.Consumer>
        ) : (
          (isGrouped && (
            <DropdownContext.Consumer>
              {({ menuClass }) => (
                <div
                  {...props}
                  className={css(
                    menuClass,
                    position === DropdownPosition.right && styles.modifiers.alignRight,
                    className
                  )}
                  hidden={!isOpen}
                  role="menu"
                >
                  {this.extendChildren()}
                </div>
              )}
            </DropdownContext.Consumer>
          )) || (
            <DropdownContext.Consumer>
              {({ menuClass }) => (
                <Component
                  {...props}
                  className={css(
                    menuClass,
                    position === DropdownPosition.right && styles.modifiers.alignRight,
                    className
                  )}
                  hidden={!isOpen}
                  role="menu"
                >
                  {this.extendChildren()}
                </Component>
              )}
            </DropdownContext.Consumer>
          )
        )}
      </DropdownArrowContext.Provider>
    );
  }
}
