import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';
import { AlertGroupProps } from './AlertGroup';
import { AlertProps } from '../Alert';

export const AlertGroupInline: React.FunctionComponent<AlertGroupProps> = ({
  className,
  children,
  isToast,
  isLiveRegion,
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
    {React.Children.toArray(children).map((alert, index) => (
      <li key={(alert as React.ReactElement<AlertProps>).props?.id || index}>{alert}</li>
    ))}
    {overflowMessage && (
      <li>
        <button onClick={onOverflowClick} className={css(styles.alertGroupOverflowButton)}>
          {overflowMessage}
        </button>
      </li>
    )}
  </ul>
);
AlertGroupInline.displayName = 'AlertGroupInline';
