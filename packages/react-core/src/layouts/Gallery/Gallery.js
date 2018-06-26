import React from 'react';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Gallery/styles.css';

export const GutterSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  gutter: PropTypes.oneOf(Object.keys(GutterSize))
};

const defaultProps = {
  children: null,
  className: '',
  gutter: null
};

const Gallery = ({ children, className, gutter, ...props }) => (
  <div
    className={css(
      styles.gallery,
      gutter &&
        getModifier(styles, `gutter-${gutter}`, styles.modifiers.gutter),
      className
    )}
    {...props}
  >
    {children}
  </div>
);

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
