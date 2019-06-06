import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import titleStyles from '@patternfly/react-styles/css/components/Title/title';
import contentStyles from '@patternfly/react-styles/css/components/Content/content';

export interface AboutModalBoxContentProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the AboutModalBoxContent  */
  children: React.ReactNode;
  /** additional classes added to the AboutModalBoxContent  */
  className?: string;
  /** id to use for About Modal Box aria described by  */
  id: string;
  /** The Trademark info for the product  */
  trademark: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  noAboutModalBoxContentContainer?: boolean;
};

export const AboutModalBoxContent: React.SFC<AboutModalBoxContentProps> = ({
  children,
  className = '',
  trademark,
  id,
  noAboutModalBoxContentContainer = false,
  ...props
}: AboutModalBoxContentProps) => (
  <div className={css(styles.aboutModalBoxContent, className)} id={id} {...props}>
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
