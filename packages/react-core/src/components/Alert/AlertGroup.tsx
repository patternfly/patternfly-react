import { useEffect, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { canUseDOM } from '../../helpers';
import { AlertGroupInline } from './AlertGroupInline';
import { useHasAnimations } from '../../helpers';

export interface AlertGroupProps extends Omit<React.HTMLProps<HTMLUListElement>, 'className'> {
  /** Additional classes added to the AlertGroup */
  className?: string;
  /** Alerts to be rendered in the AlertGroup */
  children?: React.ReactNode;
  /** @beta Flag to indicate whether Alerts are animated upon rendering and being dismissed. This is intended
   * to remain false for testing purposes only.
   */
  hasAnimations?: boolean;
  /** Toast notifications are positioned at the top right corner of the viewport */
  isToast?: boolean;
  /** Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology. */
  isLiveRegion?: boolean;
  /** Determine where the alert is appended to */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** Function to call if user clicks on overflow message */
  onOverflowClick?: () => void;
  /** Custom text to show for the overflow message */
  overflowMessage?: string;
  /** Adds an accessible label to the alert group. */
  'aria-label'?: string;
}

export const AlertGroup: React.FunctionComponent<AlertGroupProps> = ({
  className,
  children,
  hasAnimations: localHasAnimations,
  isToast,
  isLiveRegion,
  onOverflowClick,
  overflowMessage,
  'aria-label': ariaLabel,

  appendTo, // do not pass down to ul
  ...props
}: AlertGroupProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isContainerReady, setIsContainerReady] = useState(false);
  const hasAnimations = useHasAnimations(localHasAnimations);

  const getTargetElement = () => {
    if (typeof appendTo === 'function') {
      return appendTo();
    }
    return appendTo || document.body;
  };

  useEffect(() => {
    if (isToast && canUseDOM) {
      const container = document.createElement('div');
      const target = getTargetElement();
      containerRef.current = container;
      target.appendChild(container);
      setIsContainerReady(true);

      return () => {
        if (containerRef.current) {
          target.removeChild(containerRef.current);
          containerRef.current = null;
        }
        setIsContainerReady(false);
      };
    }
  }, [isToast, appendTo]);

  const alertGroup = (
    <AlertGroupInline
      onOverflowClick={onOverflowClick}
      className={className}
      isToast={isToast}
      isLiveRegion={isLiveRegion}
      overflowMessage={overflowMessage}
      aria-label={ariaLabel}
      hasAnimations={hasAnimations}
      {...props}
    >
      {children}
    </AlertGroupInline>
  );

  if (!isToast) {
    return alertGroup;
  }

  const container = containerRef.current;

  if (!canUseDOM || !container || !isContainerReady) {
    return null;
  }

  return ReactDOM.createPortal(alertGroup, container);
};
AlertGroup.displayName = 'AlertGroup';
