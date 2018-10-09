import React from 'react';
import styles from '@patternfly/patternfly-next/layouts/Page/page.css';
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
  variant: PropTypes.oneOf(Object.values(PageSectionVariants))
};

const defaultProps = {
  children: null,
  className: '',
  variant: 'default'
};

const PageSection = ({ className, children, variant, ...props }) => {
  const variantStyle = {
    [PageSectionVariants.default]: '',
    [PageSectionVariants.light]: styles.modifiers.light,
    [PageSectionVariants.dark]: styles.modifiers.dark_200,
    [PageSectionVariants.darker]: styles.modifiers.dark_100
  };

  return (
    <section {...props} className={css(styles.pageMainSection, variantStyle[variant], className)}>
      {children}
    </section>
  );
};

PageSection.propTypes = propTypes;
PageSection.defaultProps = defaultProps;

export default PageSection;
