import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';
import contentStyles from '@patternfly/patternfly/components/Content/content.css';

const propTypes = {
  /** content rendered inside the AboutModalBoxContent */
  children: PropTypes.node.isRequired,
  /** additional classes added to the AboutModalBoxContent */
  className: PropTypes.string,
  /** id to use for About Modal Box aria described by */
  id: PropTypes.string.isRequired,
  /** The Trademark info for the product */
  trademark: PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: ''
};

const AboutModalBoxContent = ({ children, className, trademark, id, noAboutModalBoxContentContainer, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxContent, className)} id={id}>
    <div className={css('pf-c-about-modal-box__body')}>
      {noAboutModalBoxContentContainer
        ? children
        : <div className={css(contentStyles.content)}>{children}</div>
      }
    </div>
    <div className={css(styles.aboutModalBoxStrapline)}>
      <p className={css(titleStyles.title, titleStyles.modifiers.md)}>{trademark}</p>
    </div>
  </div>
);

AboutModalBoxContent.propTypes = propTypes;
AboutModalBoxContent.defaultProps = defaultProps;

export default AboutModalBoxContent;
