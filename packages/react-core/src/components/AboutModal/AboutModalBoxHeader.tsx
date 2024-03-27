import { HTMLProps, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import { Title } from '../Title';

export interface AboutModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  /** Name of the product  */
  productName?: string;
  /** Id to use for about modal box header  */
  id: string;
}

export const AboutModalBoxHeader: FunctionComponent<AboutModalBoxHeaderProps> = ({
  productName,
  id,
  ...props
}: AboutModalBoxHeaderProps) => (
  <div className={css(styles.aboutModalBoxHeader)} {...props}>
    <Title headingLevel="h1" size="4xl" id={id}>
      {productName}
    </Title>
  </div>
);
AboutModalBoxHeader.displayName = 'AboutModalBoxHeader';
