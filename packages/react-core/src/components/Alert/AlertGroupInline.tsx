import { Children } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { AlertGroupProps } from './AlertGroup';
import { AlertProps } from '../Alert';
import { AlertGroupContext } from './AlertGroupContext';

export const AlertGroupInline: React.FunctionComponent<AlertGroupProps> = ({
  className,
  children,
  hasAnimations,
  isToast,
  isLiveRegion,
  onOverflowClick,
  overflowMessage,
  ...props
}: AlertGroupProps) => (
  <AlertGroupContext.Provider value={{ hasAnimations }}>
    <ul
      role="list"
      aria-live={isLiveRegion ? 'polite' : null}
      aria-atomic={isLiveRegion ? false : null}
      className={css(styles.alertGroup, className, isToast ? styles.modifiers.toast : '')}
      {...props}
    >
      {Children.toArray(children).map((alert, index) => (
        <li
          className={css(styles.alertGroupItem, hasAnimations && styles.modifiers.offstageTop)}
          key={
            (alert as React.ReactElement<AlertProps>).props?.id ||
            `alertGroupItem-${(alert as React.ReactElement<AlertProps>).key}` ||
            index
          }
        >
          {alert}
        </li>
      ))}
      {overflowMessage && (
        <li>
          <button onClick={onOverflowClick} className={css(styles.alertGroupOverflowButton)}>
            {overflowMessage}
          </button>
        </li>
      )}
    </ul>
  </AlertGroupContext.Provider>
);

AlertGroupInline.displayName = 'AlertGroupInline';
