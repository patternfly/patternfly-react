import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';
import titleStyles from '@patternfly/patternfly/components/Title/title.css';
import contentStyles from '@patternfly/patternfly/components/Content/content.css';

export interface AboutModalBoxContentProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModalBoxContent */
  children: React.ReactNode;
  /** additional classes added to the AboutModalBoxContent */
  className?: string;
  /** id to use for About Modal Box aria described by */
  id: string;
  /** The Trademark info for the product */
  trademark: string;
};

const AboutModalBoxContent: React.FunctionComponent<AboutModalBoxContentProps> = ({
  children,
  className = '',
  trademark,
  id,
  ...props
}: AboutModalBoxContentProps) => (
    /** Additional props are spread to the container <div> */
    <div {...props} className={css(styles.aboutModalBoxContent, className)} id={id}>
      <div className={css(contentStyles.content)}>{children}</div>
      <div className={css(styles.aboutModalBoxStrapline)}>
        <p className={css(titleStyles.title)}>{trademark}</p>
      </div>
    </div>
  );

export default AboutModalBoxContent;
