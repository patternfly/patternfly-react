import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ children, ...props }) => <React.Fragment {...props}>{children}</React.Fragment>;

AccordionItem.propTypes = {
  /** Content rendered inside the Accordion item */
  children: PropTypes.node,
  /** Additional props are spread to the container  */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

AccordionItem.defaultProps = {
  children: null
};

export default AccordionItem;
