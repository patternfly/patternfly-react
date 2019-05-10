import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import { Title } from '../../Title';

export interface AboutModalBoxHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /** additional classes added to the button  */
  className?: string;
  /** Name of the Product  */
  productName?: string;
  /** id to used for Modal Box header  */
  id: string;
}

export const AboutModalBoxHeader: React.SFC<AboutModalBoxHeaderProps> = ({
  className = '',
  productName = '',
  id,
  ...props
}: AboutModalBoxHeaderProps) => (
  <div {...props} className={css(styles.aboutModalBoxHeader, className)}>
    <Title headingLevel="h1" size="4xl" id={id}>
      {productName}
    </Title>
  </div>
);
