import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { css } from '@patternfly/react-styles';
import { keyHandler } from '../../helpers/util';

const propTypes = {
  /** Content rendered inside the SingleSelect */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the SingleSelect control */
  className: PropTypes.string,
  /** Flag indicating the Select is expanded */
  isExpanded: PropTypes.bool,
  /** Internal flag indicating whether select was opened via keyboard */
  openedOnEnter: PropTypes.bool,
  /** Currently selected option */
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Internal handler for ref handling */
  sendRef: PropTypes.function,
  /** Additional props are spread to the container <select> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  className: '',
  isExpanded: false,
  openedOnEnter: false,
  selected: '',
  sendRef: Function.prototype
};

class SingleSelect extends React.Component {
  refCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      const selectedRef = this.refCollection.filter(ref => ref.classList.contains('pf-m-selected'));
      selectedRef && selectedRef[0] ? selectedRef[0].focus() : this.refCollection[0].focus();
    }
  }

  extendChildren() {
    const { selected, sendRef } = this.props;
    return React.Children.map(this.props.children, (child, index) => {
      const isSelected =
        selected && selected.constructor === Array
          ? selected && selected.includes(child.props.value)
          : selected === child.props.value;
      return React.cloneElement(child, {
        id: `${child.props.value}-${index}`,
        isSelected,
        sendRef,
        sendListRef: this.sendListRef,
        keyHandler: this.childKeyHandler,
        index
      });
    });
  }

  childKeyHandler = (index, position) => {
    keyHandler(index, position, this.refCollection, this.props.children);
  };

  sendListRef = (ref, index) => {
    this.refCollection[index] = ref;
  };

  render() {
    const { children, className, isExpanded, openedOnEnter, selected, sendRef, ...props } = this.props;
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
