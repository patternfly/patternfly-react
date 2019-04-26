import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
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
  /** Additional props are spread to the container <select> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isExpanded: false,
  openedOnEnter: false,
  selected: ''
};

class SingleSelect extends React.Component {
  refCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      const selectedRef = this.refCollection.filter(ref => ref.classList.contains('pf-c-select__menu-item--match'));
      selectedRef && selectedRef[0] ? selectedRef[0].focus() : this.refCollection[0].focus();
    }
  }

  extendChildren() {
    const { selected } = this.props;
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        isSelected:
          selected && selected.constructor === Array
            ? selected && selected.includes(child.props.value)
            : selected === child.props.value,
        sendRef: this.sendRef,
        keyHandler: this.childKeyHandler,
        index
      })
    );
  }

  sendRef = (ref, index) => {
    this.refCollection[index] = ref;
  };

  childKeyHandler = (index, position) => {
    keyHandler(index, position, this.refCollection, this.props.children);
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
