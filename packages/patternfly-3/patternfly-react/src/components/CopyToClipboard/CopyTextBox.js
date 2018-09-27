import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '../..';
import { noop } from '../../common/helpers';

const CopyTextBox = ({ innerRef, children, id }) => (
  <Form.FormControl
    inputRef={innerRef}
    aria-label={id}
    bsClass="form-control text-overflow-pf"
    type="text"
    value={children}
    onChange={noop}
    className="copytoclipboard-pf-textbox"
    style={{ height: '24px' }}
  />
);

CopyTextBox.propTypes = {
  /** Reference to the input box for selecting text */
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.instanceOf(Element) })]),
  /** Short aria description of the copy to clipboard text */
  id: PropTypes.string.isRequired,
  /** Text to display inside the input form */
  children: PropTypes.string.isRequired
};

CopyTextBox.defaultProps = {
  innerRef: null
};

export default React.forwardRef(({ children, ...props }, ref) => (
  <CopyTextBox innerRef={ref} {...props}>
    {children}
  </CopyTextBox>
));
