import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/HelperText/helper-text';
import { css } from '@patternfly/react-styles';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export interface HelperTextItemProps extends React.HTMLProps<HTMLDivElement | HTMLLIElement> {
  /** Content rendered inside the helper text item. */
  children?: React.ReactNode;
  /** Additional classes applied to the helper text item. */
  className?: string;
  /** Sets the component type of the helper text item. */
  component?: 'div' | 'li';
  /** Status styling of the helper text item. Will also render a default icon, which can be overridden
   * with the icon prop.
   */
  status?: 'indeterminate' | 'warning' | 'success' | 'error';
  /** Custom icon prefixing the helper text. This property will override the default icon when the status property is passed in. */
  icon?: React.ReactNode;
  /** ID for the helper text item. The value of this prop can be passed into a form component's
   * aria-describedby prop when you intend for only specific helper text items to be announced to
   * assistive technologies.
   */
  id?: string;
  /** Text that is only accessible to screen readers in order to announce the status of a helper text item.
   * This prop can only be used when the status prop is also passed in.
   */
  screenReaderText?: string;
}

const defaultStatusIcons = {
  indeterminate: <MinusIcon />,
  warning: <ExclamationTriangleIcon />,
  success: <CheckCircleIcon />,
  error: <ExclamationCircleIcon />
};

export const HelperTextItem: React.FunctionComponent<HelperTextItemProps> = ({
  children,
  className,
  component = 'div',
  status,
  icon,
  id,
  screenReaderText = `${status} status`,
  ...props
}: HelperTextItemProps) => {
  const Component = component as any;
  return (
    <Component className={css(styles.helperTextItem, styles.modifiers[status], className)} id={id} {...props}>
      {(status || icon) && (
        <span className={css(styles.helperTextItemIcon)} aria-hidden>
          {icon || defaultStatusIcons[status]}
        </span>
      )}

      <span className={css(styles.helperTextItemText)}>
        {children}
        {status && <span className="pf-v5-screen-reader">: {screenReaderText};</span>}
      </span>
    </Component>
  );
};
HelperTextItem.displayName = 'HelperTextItem';
