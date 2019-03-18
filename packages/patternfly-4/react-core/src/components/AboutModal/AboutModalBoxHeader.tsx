import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import { Title } from '../Title/Title';

export interface AboutModalBoxHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the button */
  className?: string;
  /** Name of the Product */
  productName: string;
  /** id to used for Modal Box header */
  id: string;
};

const AboutModalBoxHeader: React.FunctionComponent<AboutModalBoxHeaderProps> = ({
  className = '',
  productName,
  id,
  ...props
}: AboutModalBoxHeaderProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} className={css(styles.aboutModalBoxHeader, className)}>
      <Title size="4xl" id={id}>
        {productName}
      </Title>
    </div>
  );

export default AboutModalBoxHeader;
