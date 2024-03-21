import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AboutModalBox/about-modal-box';
import contentStyles from '@patternfly/react-styles/css/components/Content/content';

export interface AboutModalBoxContentProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the about modal box content */
  children: ReactNode;
  /** The trademark info for the product  */
  trademark: string;
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  hasNoContentContainer?: boolean;
}

export const AboutModalBoxContent: FunctionComponent<AboutModalBoxContentProps> = ({
  children,
  trademark,
  hasNoContentContainer = false,
  ...props
}: AboutModalBoxContentProps) => (
  <div className={css(styles.aboutModalBoxContent)} {...props}>
    <div className={css(`${styles.aboutModalBox}__body`)}>
      {hasNoContentContainer ? children : <div className={css(contentStyles.content)}>{children}</div>}
    </div>
    <p className={css(styles.aboutModalBoxStrapline)}>{trademark}</p>
  </div>
);
AboutModalBoxContent.displayName = 'AboutModalBoxContent';
