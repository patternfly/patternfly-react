import * as React from 'react';
import { useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, useOUIAProps, OUIAProps } from '../../helpers';
import { AlertContext } from './AlertContext';
import maxLines from '@patternfly/react-tokens/dist/js/c_alert__title_max_lines';
import { Tooltip } from '../Tooltip';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  default = 'default'
}

export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'>, OUIAProps {
  /** Adds Alert variant styles  */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** Flag to indicate if the Alert is inline */
  isInline?: boolean;
  /** Title of the Alert  */
  title: React.ReactNode;
  /** Close button; use the AlertActionCloseButton component  */
  actionClose?: React.ReactNode;
  /** Action links; use a single AlertActionLink component or multiple wrapped in an array or React.Fragment */
  actionLinks?: React.ReactNode;
  /** Content rendered inside the Alert */
  children?: React.ReactNode;
  /** Additional classes added to the Alert  */
  className?: string;
  /** Adds accessible text to the Alert */
  'aria-label'?: string;
  /** Variant label text for screen readers */
  variantLabel?: string;
  /** Flag to indicate if the Alert is in a live region */
  isLiveRegion?: boolean;
  /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will be dismissed after that amount of time in milliseconds. */
  timeout?: number | boolean;
  /** If the user hovers over the Alert and `timeout` expires, this is how long to wait before finally dismissing the Alert */
  timeoutAnimation?: number;
  /** Function to be executed on alert timeout. Relevant when the timeout prop is set */
  onTimeout?: () => void;
  /** Truncate title to number of lines */
  truncateTitle?: number;
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  /** Set a custom icon to the Alert. If not set the icon is set according to the variant */
  customIcon?: React.ReactNode;
}

export const Alert: React.FunctionComponent<AlertProps> = ({
  variant = AlertVariant.default,
  isInline = false,
  isLiveRegion = false,
  variantLabel = `${capitalize(variant)} alert:`,
  'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
  actionClose,
  actionLinks,
  title,
  children = '',
  className = '',
  ouiaId,
  ouiaSafe = true,
  timeout = false,
  timeoutAnimation = 3000,
  onTimeout = () => {},
  truncateTitle = 0,
  tooltipPosition,
  customIcon,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  ...props
}: AlertProps) => {
  const ouiaProps = useOUIAProps(Alert.displayName, ouiaId, ouiaSafe, variant);
  const getHeadingContent = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const titleRef = React.useRef(null);
  const divRef = React.useRef<HTMLDivElement>();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  React.useEffect(() => {
    if (!titleRef.current || !truncateTitle) {
      return;
    }
    titleRef.current.style.setProperty(maxLines.name, truncateTitle.toString());
    const showTooltip = titleRef.current && titleRef.current.offsetHeight < titleRef.current.scrollHeight;
    if (isTooltipVisible !== showTooltip) {
      setIsTooltipVisible(showTooltip);
    }
  }, [titleRef, truncateTitle, isTooltipVisible]);

  const [timedOut, setTimedOut] = useState(false);
  const [timedOutAnimation, setTimedOutAnimation] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState<boolean | undefined>();
  const [containsFocus, setContainsFocus] = useState<boolean | undefined>();
  const dismissed = timedOut && timedOutAnimation && !isMouseOver && !containsFocus;
  React.useEffect(() => {
    timeout = timeout === true ? 8000 : Number(timeout);
    if (timeout > 0) {
      const timer = setTimeout(() => setTimedOut(true), timeout);
      return () => clearTimeout(timer);
    }
  }, []);
  React.useEffect(() => {
    const onDocumentFocus = () => {
      if (divRef.current) {
        if (divRef.current.contains(document.activeElement)) {
          setContainsFocus(true);
          setTimedOutAnimation(false);
        } else if (containsFocus) {
          setContainsFocus(false);
        }
      }
    };

    document.addEventListener('focus', onDocumentFocus, true);

    return () => document.removeEventListener('focus', onDocumentFocus, true);
  }, [containsFocus]);
  React.useEffect(() => {
    if (containsFocus === false || isMouseOver === false) {
      const timer = setTimeout(() => setTimedOutAnimation(true), timeoutAnimation);
      return () => clearTimeout(timer);
    }
  }, [containsFocus, isMouseOver]);
  React.useEffect(() => {
    dismissed && onTimeout();
  }, [dismissed]);

  const myOnMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseOver(true);
    setTimedOutAnimation(false);
    onMouseEnter(ev);
  };

  const myOnMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseOver(false);
    onMouseLeave(ev);
  };

  if (dismissed) {
    return null;
  }
  const Title = (
    <h4
      {...(isTooltipVisible && { tabIndex: 0 })}
      ref={titleRef}
      className={css(styles.alertTitle, truncateTitle && styles.modifiers.truncate)}
    >
      {getHeadingContent}
    </h4>
  );

  return (
    <div
      ref={divRef}
      className={css(
        styles.alert,
        isInline && styles.modifiers.inline,
        styles.modifiers[variant as 'success' | 'danger' | 'warning' | 'info'],
        className
      )}
      aria-label={ariaLabel}
      {...ouiaProps}
      {...(isLiveRegion && {
        'aria-live': 'polite',
        'aria-atomic': 'false'
      })}
      onMouseEnter={myOnMouseEnter}
      onMouseLeave={myOnMouseLeave}
      {...props}
    >
      <AlertIcon variant={variant} customIcon={customIcon} />
      {isTooltipVisible ? (
        <Tooltip content={getHeadingContent} position={tooltipPosition}>
          {Title}
        </Tooltip>
      ) : (
        Title
      )}
      {actionClose && (
        <AlertContext.Provider value={{ title, variantLabel }}>
          <div className={css(styles.alertAction)}>{actionClose}</div>
        </AlertContext.Provider>
      )}
      {children && <div className={css(styles.alertDescription)}>{children}</div>}
      {actionLinks && <div className={css(styles.alertActionGroup)}>{actionLinks}</div>}
    </div>
  );
};
Alert.displayName = 'Alert';
