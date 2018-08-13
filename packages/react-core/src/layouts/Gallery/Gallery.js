import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Gallery/styles.css';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

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
    className={css(styles.gallery, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)}
    {...props}
  >
    {children}
  </div>
);

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
