import React from 'react';
import TextInput from './TextInput';
import PropTypes from 'prop-types';

const ForwardRefWrapper = React.forwardRef((props, ref) => <TextInput innerRef={ref} {...props} />);
ForwardRefWrapper.displayName = 'TextInput';

export default ForwardRefWrapper;
