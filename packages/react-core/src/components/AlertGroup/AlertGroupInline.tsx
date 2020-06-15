import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AlertGroup/alert-group';
import { AlertGroupProps } from './AlertGroup';

/**
 *
 */
export function AlertGroupInline({ className, children, isToast, ...rest }: AlertGroupProps) {
  return (
    <ul className={css(styles.alertGroup, className, isToast ? styles.modifiers.toast : '')} {...rest}>
      {React.Children.toArray(children).map((Alert: React.ReactNode, index: number) => (
        <li key={index}>{Alert}</li>
      ))}
    </ul>
  );
}
