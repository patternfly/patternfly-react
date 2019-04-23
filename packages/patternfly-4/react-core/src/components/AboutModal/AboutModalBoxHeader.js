import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import { Title } from '../Title';

const propTypes = {
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Name of the Product */
  productName: PropTypes.string,
  /** id to used for Modal Box header */
  id: PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  productName: ''
};

const AboutModalBoxHeader = ({ className, productName, id, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxHeader, className)}>
    <Title headingLevel="h1" size="4xl" id={id}>
      {productName}
    </Title>
  </div>
);

AboutModalBoxHeader.propTypes = propTypes;
AboutModalBoxHeader.defaultProps = defaultProps;

export default AboutModalBoxHeader;
