import React from 'react';
import styles from '@patternfly/patternfly/components/ContextSelector/context-selector.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { ContextSelectorContext } from './contextSelectorConstants';

const propTypes = {
  /** Anything which can be rendered as Context Selector item */
  children: PropTypes.node,
  /** Classes applied to root element of the Context Selector item */
  className: PropTypes.string,
  /** Render Context  Selector item as disabled */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Callback for click event */
  onClick: PropTypes.func,
  /** Additional props are spread to the button element */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  isDisabled: false,
  onClick: () => {}
};

class ContextSelectorItem extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    /* eslint-disable-next-line */
    this.props.sendRef(this.props.index, this.ref.current);
  }

  render() {
    const { className, children, isHovered, onClick, isDisabled, index, sendRef, ...props } = this.props;
    return (
      <ContextSelectorContext.Consumer>
        {({ onSelect }) => (
          <li role="none">
            <button
              className={css(
                styles.contextSelectorMenuListItem,
                isDisabled && styles.modifiers.disabled,
                isHovered && styles.modifiers.hover,
                className
              )}
              ref={this.ref}
              onClick={event => {
                if (!isDisabled) {
                  onClick && onClick(event);
                  onSelect && onSelect(event, children);
                }
              }}
              {...props}
            >
              {children}
            </button>
          </li>
        )}
      </ContextSelectorContext.Consumer>
    );
  }
}

ContextSelectorItem.propTypes = propTypes;
ContextSelectorItem.defaultProps = defaultProps;

export default ContextSelectorItem;
