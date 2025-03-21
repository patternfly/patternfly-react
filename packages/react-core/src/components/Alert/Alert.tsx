import { Fragment, useEffect, useRef, useState, useContext } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import alertGroupStyles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { AlertIcon } from './AlertIcon';
import { capitalize, useOUIAProps, OUIAProps } from '../../helpers';
import { AlertContext } from './AlertContext';
import { AlertGroupContext } from './AlertGroupContext';
import maxLines from '@patternfly/react-tokens/dist/esm/c_alert__title_max_lines';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { AlertToggleExpandButton } from './AlertToggleExpandButton';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  custom = 'custom'
}

/** The main alert component. */

export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'>, OUIAProps {
  /** Close button; use the alert action close button component.  */
  actionClose?: React.ReactNode;
  /** Action links; use a single alert action link component or multiple wrapped in an array
   * or React fragment.
   */
  actionLinks?: React.ReactNode;
  /** Content rendered inside the alert. */
  children?: React.ReactNode;
  /** Additional classes to add to the alert.  */
  className?: string;
  /** Set a custom icon to the alert. If not set the icon is set according to the variant. */
  customIcon?: React.ReactNode;
  /** Uniquely identifies the alert. */
  id?: string;
  /** Flag indicating that the alert is expandable. */
  isExpandable?: boolean;
  /** Flag to indicate if the alert is inline. */
  isInline?: boolean;
  /** Flag to indicate if the alert is in a live region. */
  isLiveRegion?: boolean;
  /** Flag to indicate if the alert is plain. */
  isPlain?: boolean;
  /** Function to be executed on alert timeout. Relevant when the timeout prop is set. */
  onTimeout?: () => void;
  /** If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will
   * be dismissed after that amount of time in milliseconds.
   */
  timeout?: number | boolean;
  /** If the user hovers over the alert and `timeout` expires, this is how long to wait
   * before finally dismissing the alert.
   */
  timeoutAnimation?: number;
  /** Title of the alert.  */
  title: React.ReactNode;
  /** Sets the element to use as the alert title. Default is h4. */
  component?: keyof React.JSX.IntrinsicElements;
  /** Adds accessible text to the alert toggle. */
  toggleAriaLabel?: string;
  /** Position of the tooltip which is displayed if text is truncated. */
  tooltipPosition?:
    | TooltipPosition
    | 'auto'
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  /** Truncate title to number of lines. */
  truncateTitle?: number;
  /** Adds alert variant styles.  */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'custom';
  /** Variant label text for screen readers. */
  variantLabel?: string;
  /** Value to overwrite the randomly generated data-ouia-component-id.*/
  ouiaId?: number | string;
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe?: boolean;
}

export const Alert: React.FunctionComponent<AlertProps> = ({
  variant = AlertVariant.custom,
  isInline = false,
  isPlain = false,
  isLiveRegion = false,
  variantLabel = `${capitalize(variant)} alert:`,
  actionClose,
  actionLinks,
  title,
  component = 'h4',
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
  isExpandable = false,
  toggleAriaLabel = `${capitalize(variant)} alert details`,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  id,
  ...props
}: AlertProps) => {
  const ouiaProps = useOUIAProps(Alert.displayName, ouiaId, ouiaSafe, variant);
  const getHeadingContent = (
    <Fragment>
      <span className="pf-v6-screen-reader">{variantLabel}</span>
      {title}
    </Fragment>
  );

  const titleRef = useRef(null);
  const TitleComponent = component as any;

  const divRef = useRef<HTMLDivElement>(undefined);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  useEffect(() => {
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
  const shouldDismiss = timedOut && timedOutAnimation && !isMouseOver && !containsFocus;
  const [isDismissed, setIsDismissed] = useState(false);
  const { hasAnimations, updateTransitionEnd } = useContext(AlertGroupContext);
  const { offstageRight } = alertGroupStyles.modifiers;

  const getParentAlertGroupItem = () => divRef.current?.closest(`.${alertGroupStyles.alertGroupItem}`);
  useEffect(() => {
    const shouldSetDismissed = shouldDismiss && !isDismissed;
    if (!shouldSetDismissed) {
      return;
    }

    const alertGroupItem = getParentAlertGroupItem();
    alertGroupItem?.classList.add(offstageRight);

    if (hasAnimations) {
      updateTransitionEnd(() => {
        setIsDismissed(true);
      });
    } else {
      setIsDismissed(true);
    }
  }, [shouldDismiss, isDismissed]);

  useEffect(() => {
    const calculatedTimeout = timeout === true ? 8000 : Number(timeout);
    if (calculatedTimeout > 0) {
      const timer = setTimeout(() => setTimedOut(true), calculatedTimeout);
      return () => clearTimeout(timer);
    }
  }, [timeout]);
  useEffect(() => {
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
  useEffect(() => {
    if (containsFocus === false || isMouseOver === false) {
      const timer = setTimeout(() => setTimedOutAnimation(true), timeoutAnimation);
      return () => clearTimeout(timer);
    }
  }, [containsFocus, isMouseOver, timeoutAnimation]);
  useEffect(() => {
    isDismissed && onTimeout();
  }, [isDismissed, onTimeout]);
  useEffect(() => {
    const alertGroupItem = getParentAlertGroupItem();
    setTimeout(() => alertGroupItem?.classList.remove(alertGroupStyles.modifiers.offstageTop), 0);
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const onToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const myOnMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseOver(true);
    setTimedOutAnimation(false);
    onMouseEnter(ev);
  };

  const myOnMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseOver(false);
    onMouseLeave(ev);
  };

  if (shouldDismiss && isDismissed) {
    return null;
  }
  const Title = (
    <TitleComponent
      {...(isTooltipVisible && { tabIndex: 0 })}
      ref={titleRef}
      className={css(styles.alertTitle, truncateTitle && styles.modifiers.truncate)}
    >
      {getHeadingContent}
    </TitleComponent>
  );

  return (
    <div
      ref={divRef}
      className={css(
        styles.alert,
        isInline && styles.modifiers.inline,
        isPlain && styles.modifiers.plain,
        isExpandable && styles.modifiers.expandable,
        isExpanded && styles.modifiers.expanded,
        styles.modifiers[variant],
        className
      )}
      {...ouiaProps}
      {...(isLiveRegion && {
        'aria-live': 'polite',
        'aria-atomic': 'false'
      })}
      onMouseEnter={myOnMouseEnter}
      onMouseLeave={myOnMouseLeave}
      id={id}
      {...props}
    >
      {isExpandable && (
        <AlertContext.Provider value={{ title, variantLabel }}>
          <div className={css(styles.alertToggle)}>
            <AlertToggleExpandButton
              isExpanded={isExpanded}
              onToggleExpand={onToggleExpand}
              aria-label={toggleAriaLabel}
            />
          </div>
        </AlertContext.Provider>
      )}
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
      {children && (!isExpandable || (isExpandable && isExpanded)) && (
        <div className={css(styles.alertDescription)}>{children}</div>
      )}
      {actionLinks && <div className={css(styles.alertActionGroup)}>{actionLinks}</div>}
    </div>
  );
};
Alert.displayName = 'Alert';
