import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Content rendered inside the SingleSelect */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the SingleSelect control */
  className: PropTypes.string,
  /** Flag indicating the Select is expanded */
  isExpanded: PropTypes.bool,
  /** Currently selected option */
  selected: PropTypes.string,
  /** Additional props are spread to the container <select> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isExpanded: false,
  selected: ''
};

class SingleSelect extends React.Component {
  refCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refCollection[0].current.focus();
    }
  }

  extendChildren() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        selected: this.props.selected === child.props.label,
        sendRef: this.sendRef,
        keyHandler: this.keyHandler,
        index
      })
    );
  }

  sendRef = (ref, index) => {
    this.refCollection[index] = ref;
  };

  keyHandler = (index, position) => {
    const kids = this.props.children;
    if (!Array.isArray(kids)) return;
    let nextIndex;
    if (position === 'up') {
      if (index === 0) {
        // loop back to end
        nextIndex = kids.length - 1;
      } else {
        nextIndex = index - 1;
      }
    } else if (index === kids.length - 1) {
      // loop back to beginning
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    if (this.refCollection[nextIndex] === null) {
      this.keyHandler(nextIndex, position);
    } else {
      this.refCollection[nextIndex].current.focus();
    }
  };

  render() {
    const { children, className, isExpanded, openedOnEnter, selected, ...props } = this.props;
    this.renderedChildren = this.extendChildren();
    return (
      <ul {...props} className={css(styles.selectMenu, className)} role="listbox">
        {this.renderedChildren}
      </ul>
    );
  }
}

SingleSelect.propTypes = propTypes;
SingleSelect.defaultProps = defaultProps;

export default SingleSelect;
