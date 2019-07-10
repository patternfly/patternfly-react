import * as React from 'react';
import ReactDOM from 'react-dom';
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
    sendRef?: (index: number, ref: any, isDisabled: boolean) => void
  };
  /** Callback for click event */
  onClick?: (event:React.MouseEvent<HTMLAnchorElement>|React.KeyboardEvent) => void;
}

export class DropdownItem extends React.Component<InternalDropdownItemProps> {
  ref = React.createRef();

  static defaultProps = {
    children: null,
    className: '',
    isHovered: false,
    component: 'a',
    role: null,
    isDisabled: false,
    href: '',
    tooltip: null,
    tooltipProps: {},
    onClick: Function.prototype,
    index: -1,
    context: {
      keyHandler: Function.prototype,
      sendRef: Function.prototype
    }
  };

  componentDidMount() {
    this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
  }

  onKeyDown = event => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) return;
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
    } else if (event.keyCode === KEY_CODES.ENTER) {
      if (!this.ref.current.getAttribute) {
        ReactDOM.findDOMNode(this.ref.current).click(); // eslint-disable-line react/no-find-dom-node
      } else {
        this.ref.current.click && this.ref.current.click();
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
      component: Component,
      isDisabled,
      index,
      href,
      tooltip,
      tooltipProps,
      ...props
    } = this.props;
    const additionalProps = props;
    let classes;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
    }

    const renderWithTooltip = childNode =>
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
            <li role="none">
              {React.isValidElement(children)
                ? React.Children.map(children, child => {
                    const clonedElement = React.cloneElement(child, {
                      className: css(
                        isDisabled && disabledClass,
                        isHovered && hoverClass,
                        className,
                        itemClass,
                        child.props.className
                      ),
                      ref: this.ref,
                      onKeyDown: this.onKeyDown,
                      onClick: event => {
                        if (!isDisabled) {
                          onClick && onClick(event);
                          onSelect && onSelect(event);
                        }
                      }
                    });
                    return renderWithTooltip(clonedElement);
                  })
                : renderWithTooltip(
                    <Component
                      {...additionalProps}
                      href={href || null}
                      className={css(classes, this.props.role !== 'separator' && itemClass)}
                      ref={this.ref}
                      onKeyDown={this.onKeyDown}
                      onClick={event => {
                        if (!isDisabled) {
                          onClick && onClick(event);
                          onSelect && onSelect(event);
                        }
                      }}
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
