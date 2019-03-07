import React, { HTMLProps, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import Title from '../Title/Title';

export interface AboutModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  /** additional classes added to the button */
  className?: string;
  /** Name of the Product */
  productName: string;
  /** id to used for Modal Box header */
  id: string;
};

const defaultProps = {
  className: ''
};

const AboutModalBoxHeader: FunctionComponent<AboutModalBoxHeaderProps> = ({ className, productName, id, ...props }: AboutModalBoxHeaderProps) => (
  /** Additional props are spread to the container <div> */
  <div {...props} className={css(styles.aboutModalBoxHeader, className)}>
    <Title size="4xl" id={id}>
      {productName}
    </Title>
  </div>
);

AboutModalBoxHeader.defaultProps = defaultProps;

export default AboutModalBoxHeader;
