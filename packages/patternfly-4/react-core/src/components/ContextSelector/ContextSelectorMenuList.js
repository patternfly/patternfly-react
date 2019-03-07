import React from 'react';
import styles from '@patternfly/patternfly/components/ContextSelector/context-selector.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the Context Selector Menu */
  children: PropTypes.node,
  /** Classess applied to root element of Context Selector menu */
  className: PropTypes.string,
  /** Flag to indicate if Context Selector menu is opened */
  isOpen: PropTypes.bool,
  /** Internal flag indicating whether select was opened via keyboard */
  openedOnEnter: PropTypes.bool,
  /** Additional props are spread to the container component */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true,
  openedOnEnter: false
};

class ContextSelectorMenuList extends React.Component {
  refsCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refsCollection[0].focus();
    }
  }

  sendRef = (index, ref) => {
    this.refsCollection[index] = ref;
  };

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        sendRef: this.sendRef,
        index
      })
    );
  }

  render() {
    const { className, isOpen, children, openedOnEnter, ...props } = this.props;

    return (
      <ul className={css(styles.contextSelectorMenuList, className)} hidden={!isOpen} role="menu" {...props}>
        {this.extendChildren()}
      </ul>
    );
  }
}

ContextSelectorMenuList.propTypes = propTypes;
ContextSelectorMenuList.defaultProps = defaultProps;

export default ContextSelectorMenuList;
