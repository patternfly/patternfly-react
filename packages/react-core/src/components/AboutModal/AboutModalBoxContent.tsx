import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import contentStyles from '@patternfly/react-styles/css/components/Content/content';

export interface AboutModalBoxContentProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModalBoxContent  */
  children: React.ReactNode;
  /** additional classes added to the AboutModalBoxContent  */
  className?: string;
  /** The Trademark info for the product  */
  trademark: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  noAboutModalBoxContentContainer?: boolean;
}

export const AboutModalBoxContent: React.FunctionComponent<AboutModalBoxContentProps> = ({
  children,
  className,
  trademark,
  noAboutModalBoxContentContainer = false,
  ...props
}: AboutModalBoxContentProps) => (
  <div className={css(styles.aboutModalBoxContent, className)} {...props}>
    <div className={css('pf-c-about-modal-box__body')}>
      {noAboutModalBoxContentContainer ? children : <div className={css(contentStyles.content)}>{children}</div>}
    </div>
    <p className={css(styles.aboutModalBoxStrapline)}>{trademark}</p>
  </div>
);
AboutModalBoxContent.displayName = 'AboutModalBoxContent';
