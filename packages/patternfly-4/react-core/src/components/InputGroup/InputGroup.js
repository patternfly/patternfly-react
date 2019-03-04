import React from 'react';
import styles from '@patternfly/patternfly/components/InputGroup/input-group.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { FormSelect } from '../FormSelect';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';

const InputGroup = ({ className, children, ...props }) => {
  const formCtrls = [FormSelect, TextArea, TextInput].map(comp => comp.toString());
  const idItem = React.Children.toArray(children).find(
    child => !formCtrls.includes(child.type.toString()) && child.props.id
  );
  return (
    <div className={css(styles.inputGroup, className)} {...props}>
      {idItem
        ? React.Children.map(
            children,
            child =>
              formCtrls.includes(child.type.toString())
                ? React.cloneElement(child, { 'aria-describedby': idItem.props.id })
                : child
          )
        : children}
    </div>
  );
};

InputGroup.propTypes = {
  /** Additional classes added to the input group. */
  className: PropTypes.string,
  /** Content rendered inside the input group. */
  children: PropTypes.node.isRequired
};

InputGroup.defaultProps = {
  className: ''
};

export default InputGroup;
