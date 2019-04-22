import React from 'react';
import styles from '@patternfly/patternfly/components/Page/page.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

export const PageSectionVariants = {
  default: 'default',
  light: 'light',
  dark: 'dark',
  darker: 'darker'
};

const propTypes = {
  /** Content rendered inside the section */
  children: PropTypes.node,
  /** Additional classes added to the section */
  className: PropTypes.string,
  /** Section background color variant */
  variant: PropTypes.oneOf(Object.values(PageSectionVariants)),
  /** Modifies a main page section to have no padding */
  noPadding: PropTypes.bool,
  /** Modifies a main page section to have no padding on mobile */
  noPaddingMobile: PropTypes.bool,
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  variant: 'default',
  noPadding: false,
  noPaddingMobile: false
};

const PageSection = ({ className, children, variant, noPadding, noPaddingMobile, ...props }) => {
  const variantStyle = {
    [PageSectionVariants.default]: '',
    [PageSectionVariants.light]: styles.modifiers.light,
    [PageSectionVariants.dark]: styles.modifiers.dark_200,
    [PageSectionVariants.darker]: styles.modifiers.dark_100
  };

  return (
    <section {...props} className={css(styles.pageMainSection, noPadding && styles.modifiers.noPadding, noPaddingMobile && styles.modifiers.noPaddingMobile, variantStyle[variant], className)}>
      {children}
    </section>
  );
};

PageSection.propTypes = propTypes;
PageSection.defaultProps = defaultProps;

export default PageSection;
