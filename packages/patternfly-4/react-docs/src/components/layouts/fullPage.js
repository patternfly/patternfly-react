import React from 'react';
import PropTypes from 'prop-types';
import { canUseDOM } from 'exenv';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ExampleLayout = ({ children }) => canUseDOM && children;

ExampleLayout.propTypes = propTypes;

export default ExampleLayout;
