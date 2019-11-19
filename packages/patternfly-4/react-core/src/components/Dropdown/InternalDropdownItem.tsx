import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
import { Tooltip } from '../Tooltip';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';

export interface InternalDropdownItemProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Anything which can be rendered as dropdown item */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Class applied to list element */
  listItemClassName?: string;
  /** Indicates which component will be used as dropdown item */
  component?: React.ReactNode | string;
  /** Variant of item */
  variant?: 'item' | 'icon';
  /** Role for the item */
  role?: string;
  /** Render dropdown item as disabled option */
  isDisabled?: boolean;
  /** Forces display of the hover state of the element */
  isHovered?: boolean;
  /** Default hyperlink location */
  href?: string;
  /** Tooltip to display when hovered over the item */
  tooltip?: React.ReactNode;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
  index?: number;
  context?: {
    keyHandler?: (index: number, direction: string) => void;
    sendRef?: (index: number, ref: any, isDisabled: boolean, isSeparator: boolean) => void;
  };
  /** Callback for click event */
  onClick?: (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => void;
  /** ID for the list element */
  id?: string;
  /** ID for the component element */
  componentID?: string;
}

export class InternalDropdownItem extends React.Component<InternalDropdownItemProps> {
  ref = React.createRef<HTMLLIElement>();

  static defaultProps = {
    className: '',
    isHovered: false,
    component: 'a',
    variant: 'item',
    role: 'none',
    isDisabled: false,
    href: '',
    tooltipProps: {},
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => undefined as any,
    onSelect: () => undefined as any,
    index: -1,
    context: {
      keyHandler: Function.prototype,
      sendRef: Function.prototype
    },
    id: '',
    componentID: ''
  };

  componentDidMount() {
    const { context, index, isDisabled, role } = this.props;
    context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
  }

  componentDidUpdate() {
    const { context, index, isDisabled, role } = this.props;
    context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
  }

  onKeyDown = (event: any) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    event.preventDefault();
    if (event.key === 'ArrowUp') {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
    } else if (event.key === 'ArrowDown') {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
    } else if (event.key === 'Enter' || event.key === ' ') {
      const childNode = (this.ref.current && this.ref.current.childNodes && this.ref.current.childNodes.length
        ? this.ref.current.childNodes[0]
        : this.ref.current) as HTMLElement;
      if (childNode.click) {
        childNode.click();
      }
    }
  };

  render() {
    const {
      className,
      children,
      isHovered,
      context,
      onClick,
      component,
      variant,
      role,
      isDisabled,
      index,
      href,
      tooltip,
      tooltipProps,
      id,
      componentID,
      listItemClassName,
      ...additionalProps
    } = this.props;
    const Component = component as any;
    let isComponentReactElement = false;
    let classes: string;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
    } else if (React.isValidElement(Component)) {
      // Render a custom wrapper component, for example router Link component
      // instead of our wrapper
      isComponentReactElement = true;
    }

    const renderWithTooltip = (childNode: React.ReactNode) =>
      tooltip ? (
        <Tooltip content={tooltip} {...tooltipProps}>
          {childNode}
        </Tooltip>
      ) : (
        childNode
      );

    return (
      <DropdownContext.Consumer>
        {({ onSelect, itemClass, disabledClass, hoverClass }) => {
          if (this.props.role === 'separator') {
            classes = className;
          } else {
            classes = css(isDisabled && disabledClass, isHovered && hoverClass, className);
          }
          return (
            <li
              className={listItemClassName || null}
              role={role}
              ref={this.ref}
              onKeyDown={this.onKeyDown}
              onClick={(event: any) => {
                if (!isDisabled) {
                  onClick(event);
                  onSelect(event);
                }
              }}
              id={id}
            >
              {renderWithTooltip(
                isComponentReactElement ? (
                  React.cloneElement(Component as React.ReactHTMLElement<any>, {
                    ...additionalProps,
                    className: css(classes, itemClass, variant === 'icon' && styles.modifiers.icon)
                  })
                ) : (
                  <Component
                    {...additionalProps}
                    href={href || null}
                    className={css(
                      classes,
                      this.props.role !== 'separator' && itemClass,
                      variant === 'icon' && styles.modifiers.icon
                    )}
                    id={componentID}
                  >
                    {children}
                  </Component>
                )
              )}
            </li>
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}
