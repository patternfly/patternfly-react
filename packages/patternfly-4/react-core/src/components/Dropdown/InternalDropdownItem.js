import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { componentShape } from '../../helpers/componentShape';
import { DropdownContext } from './dropdownConstants';
import { KEY_CODES, KEYHANDLER_DIRECTION } from '../../helpers/constants';
import { Tooltip } from '../Tooltip';

const propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
  /** Role for the item */
  role: PropTypes.string,
  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Default hyperlink location */
  href: PropTypes.string,
  /** Tooltip to display when hovered over the item */
  tooltip: PropTypes.node,
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps: PropTypes.any,
  index: PropTypes.number,
  context: PropTypes.shape({
    keyHandler: PropTypes.func,
    sendRef: PropTypes.func
  }),
  /** Callback for click event */
  onClick: PropTypes.func,
  /** Additional props are spread to the container component */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
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

class DropdownItem extends React.Component {
  ref = React.createRef();

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

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
