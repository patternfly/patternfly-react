import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';
import { AlertGroupProps } from './AlertGroup';

export const AlertGroupInline: React.FunctionComponent<AlertGroupProps> = ({
  className,
  children,
  isToast,
  isLiveRegion,
  overflowedBy,
  onOverflowClick,
  overflowMessage,
  ...rest
}: AlertGroupProps) => (
  <ul
    aria-live={isLiveRegion ? 'polite' : null}
    aria-atomic={isLiveRegion ? false : null}
    className={css(styles.alertGroup, className, isToast ? styles.modifiers.toast : '')}
    {...rest}
  >
    {React.Children.toArray(children).map((Alert: React.ReactNode, index: number) => (
      <li key={index}>{Alert}</li>
    ))}
    {overflowMessage &&
    // {overflowedBy > 0 &&
      <li>
        <button onClick={onOverflowClick} className={css(styles.alertGroupOverflowButton)}>{overflowMessage}</button>
        {/* <button onClick={onOverflowClick} className={css(styles.alertGroupOverflowButton)}>{overflowMessage || "View " + overflowedBy + " more alerts"}</button> */}
      </li>
    }
  </ul>
);
AlertGroupInline.displayName = 'AlertGroupInline';
