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
    sendRef?: (index: number, ref: any, isDisabled: boolean) => void
  };
  /** Callback for click event */
  onClick?: (event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => void;
}

export class InternalDropdownItem extends React.Component<InternalDropdownItemProps> {
  ref = React.createRef<HTMLElement>();

  static defaultProps = {
    className: '',
    isHovered: false,
    component: 'a',
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
    this.props.context.sendRef(this.props.index, this.ref.current, this.props.isDisabled);
  }

  onKeyDown = (event: any) => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) { return };
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ARROW_UP) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.UP);
    } else if (event.keyCode === KEY_CODES.ARROW_DOWN) {
      this.props.context.keyHandler(this.props.index, KEYHANDLER_DIRECTION.DOWN);
    } else if (event.keyCode === KEY_CODES.ENTER && this.ref.current && this.ref.current.click) {
      this.ref.current.click();
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
      isDisabled,
      index,
      href,
      tooltip,
      tooltipProps,
      ...additionalProps
    } = this.props;
    const Component = component as any;
    let classes;
    if (Component === 'a') {
      additionalProps['aria-disabled'] = isDisabled;
      additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
    } else if (Component === 'button') {
      additionalProps.disabled = isDisabled;
      additionalProps.type = additionalProps.type || 'button';
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
            <li role="none">
              {React.isValidElement(children)
                ? React.Children.map(children, child => {
                    const toClone = child as React.ReactHTMLElement<any>;
                    const clonedElement = React.cloneElement(toClone, {
                      className: 's',
                      ref: this.ref,
                      onKeyDown: this.onKeyDown,
                      onClick: (event: React.MouseEvent) => {
                        if (!isDisabled) {
                          onClick(event);
                          onSelect();
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
                      onClick={(event: MouseEvent) => {
                        if (!isDisabled) {
                          onClick(event);
                          onSelect();
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
