import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';
import { GutterSize, getGutterModifier } from '../../styles/gutters';

const propTypes = {
  /** content rendered inside the Gallery layout */
  children: PropTypes.any,
  /** additional classes added to the Gallery layout */
  className: PropTypes.string,
  /** Adds space between children. Options are sm, md or lg */
  gutter: PropTypes.oneOf(Object.keys(GutterSize)),
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
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
