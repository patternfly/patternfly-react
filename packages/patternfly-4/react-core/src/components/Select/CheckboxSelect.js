import React from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { default as formStyles } from '@patternfly/patternfly/components/Form/form.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { keyHandler } from '../../helpers/util';

const propTypes = {
  /** Content rendered inside the CheckboxSelect */
  children: PropTypes.node.isRequired,
  /** Additional classes added to the CheckboxSelect control */
  className: PropTypes.string,
  /** Flag indicating the Select is expanded */
  isExpanded: PropTypes.bool,
  /** Flag indicating whether checkboxes are grouped */
  isGrouped: PropTypes.bool,
  /** Internal flag indicating whether select was opened via keyboard */
  openedOnEnter: PropTypes.bool,
  /** Currently checked options */
  checked: PropTypes.arrayOf(PropTypes.string),
  /** Additional props are spread to the container <select> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isExpanded: false,
  isGrouped: false,
  openedOnEnter: false,
  checked: []
};

class CheckboxSelect extends React.Component {
  refCollection = [];

  componentDidMount() {
    if (this.props.openedOnEnter) {
      this.refCollection[0].focus();
    }
  }

  extendChildren() {
    const { children, isGrouped, checked } = this.props;
    if (isGrouped) {
      let index = 0;
      return React.Children.map(children, group =>
        React.cloneElement(group, {
          children: group.props.children.map(option =>
            React.cloneElement(option, {
              isChecked: checked && checked.includes(option.props.value),
              sendRef: this.sendRef,
              keyHandler: this.childKeyHandler,
              index: index++
            })
          )
        })
      );
    }
    return React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isChecked: checked && checked.includes(child.props.value),
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
    keyHandler(index, position, this.refCollection, this.props.isGrouped ? this.refCollection : this.props.children);
  };

  render() {
    const { children, className, isExpanded, openedOnEnter, checked, isGrouped, ...props } = this.props;
    this.renderedChildren = this.extendChildren();
    return (
      <div className={css(styles.selectMenu, className)}>
        <form noValidate className={css(formStyles.form)}>
          <fieldset {...props} className={css(formStyles.formFieldset)}>
            {this.renderedChildren}
          </fieldset>
        </form>
      </div>
    );
  }
}

CheckboxSelect.propTypes = propTypes;
CheckboxSelect.defaultProps = defaultProps;

export default CheckboxSelect;
