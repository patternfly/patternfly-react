import React from 'react';
import PropTypes from 'prop-types';
import {
  propTypes as basePropTypes,
  defaultProps as baseDefaultProps
} from './common';
import { iconMap } from './icons';

const propTypes = {
  name: PropTypes.string.isRequired,
  ...basePropTypes
};

const defaultProps = baseDefaultProps;

const Icon = ({ name, ...props }) => {
  const IconComponent = iconMap.get(name);
  return <IconComponent {...props} />;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
