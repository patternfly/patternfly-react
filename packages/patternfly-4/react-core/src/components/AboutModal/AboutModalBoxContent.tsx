import React, { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';
import contentStyles from '@patternfly/patternfly/components/Content/content.css';

export interface AboutModalBoxContentProps extends HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModalBoxContent */
  children: ReactNode;
  /** additional classes added to the AboutModalBoxContent */
  className?: string;
  /** id to use for About Modal Box aria described by */
  id: string;
  /** The Trademark info for the product */
  trademark: string;
};

const defaultProps = {
  className: ''
};

const AboutModalBoxContent: FunctionComponent<AboutModalBoxContentProps> = ({ children, className, trademark, id, ...props }: AboutModalBoxContentProps) => (
  /** Additional props are spread to the container <div> */
  <div {...props} className={css(styles.aboutModalBoxContent, className)} id={id}>
    <div className={css(contentStyles.content)}>{children}</div>
    <div className={css(styles.aboutModalBoxStrapline)}>
      <p className={css(titleStyles.title)}>{trademark}</p>
    </div>
  </div>
);

AboutModalBoxContent.defaultProps = defaultProps;

export default AboutModalBoxContent;
