import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css';
import titleStyles from '@patternfly/patternfly-next/components/Title/title.css';
import Title from '../Title/Title';

const propTypes = {
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Name of the Product */
  productName: PropTypes.string.isRequired,
  /** The Trademark info for the product */
  trademark: PropTypes.string.isRequired,
  /** id to used for Modal Box header */
  id: PropTypes.string.isRequired
};

const defaultProps = {
  className: ''
};

const AboutModalBoxHeader = ({ className, productName, trademark, id, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxHeader, className)}>
    <div className={css(styles.aboutModalBoxHeaderStrapline)}>
      <h2 className={css(titleStyles.title)}>{trademark}</h2>
    </div>
    <Title size="4xl" id={id}>
      {productName}
    </Title>
  </div>
);

AboutModalBoxHeader.propTypes = propTypes;
AboutModalBoxHeader.defaultProps = defaultProps;

export default AboutModalBoxHeader;
