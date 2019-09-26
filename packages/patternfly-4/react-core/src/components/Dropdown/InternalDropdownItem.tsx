import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
import { Tooltip } from '../Tooltip';

export interface InternalDropdownItemProps extends React.HTMLProps<HTMLAnchorElement> {
  /** Anything which can be rendered as dropdown item */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Indicates which component will be used as dropdown item */
  component?: React.ReactNode | string;
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
    keyHandler?: (index: number, direction: string) => void,
    sendRef?: (index: number, ref: any, isDisabled: boolean, isSeparator: boolean) => void
  };
  /** Callback for click event */
  onClick?: (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => void;
}

export class InternalDropdownItem extends React.Component<InternalDropdownItemProps> {
  ref = React.createRef<HTMLLIElement>();

  static defaultProps = {
    className: '',
    isHovered: false,
    component: 'a',
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
  };

  componentDidMount() {
    const { context, index, isDisabled, role } = this.props;
    context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
  }

  onKeyDown = (event: any) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) { return; }
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
    } else if (event.keyCode === KEY_CODES.ENTER) {
      const childNode = ((this.ref.current && this.ref.current.childNodes && this.ref.current.childNodes.length) ? this.ref.current.childNodes[0] : this.ref.current) as HTMLElement;
      if (childNode.click) {
        childNode.click();
      }
    }
  }

  render() {
    const {
      className,
      children,
      isHovered,
      context,
      onClick,
      component,
      role,
      isDisabled,
      index,
      href,
      tooltip,
      tooltipProps,
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
              role={role} 
              ref={this.ref} 
              onKeyDown={this.onKeyDown}
              onClick={(event: any) => {
                if (!isDisabled) {
                  onClick(event);
                  onSelect(event);
                }
              }}
            >
              {renderWithTooltip(
                isComponentReactElement ? React.cloneElement(Component as React.ReactHTMLElement<any>, {
                  ...additionalProps,
                  className: css(classes, itemClass)
                }) :
                <Component
                  {...additionalProps}
                  href={href || null}
                  className={css(classes, this.props.role !== 'separator' && itemClass)}
                >
                  {children}
                </Component>
              )}
            </li>
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}
