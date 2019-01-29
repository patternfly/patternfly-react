import React from 'react';
import PropTypes from 'prop-types';
import { Title, TitleSize } from '../Title';

const PopoverHeader = ({ children, id, ...rest }) => (
  <Title size={TitleSize.xl} id={id} {...rest}>
    {children}
  </Title>
);

PopoverHeader.propTypes = {
  /** popover id */
  id: PropTypes.string.isRequired,
  /** header node */
  children: PropTypes.node.isRequired
};

export default PopoverHeader;
