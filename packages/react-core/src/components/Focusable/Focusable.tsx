import * as React from 'react';
import { css } from '@patternfly/react-styles';

export interface FocusableProps {
  children?: string | React.ReactElement;
  /** Any additional classes to apply to the focusable element */
  className?: string;
  /** An HTML element to use as the container */
  component?: React.ElementType;
  /** Sets the tabindex value */
  tabIndex?: number;
  /** Whether an intermediary DOM node container is needed */
  withContainer?: boolean;
  /** A prop for dynamically controlling focusability */
  isFocusable?: boolean;
}

const renderElement = ({ children, tabIndex, className, component: Component, ...props }: FocusableProps) =>
  typeof children === 'object'
    ? React.cloneElement(children as React.ReactElement, {
        tabIndex,
        className: css(className),
        ...props
      })
    : React.createElement(Component, { tabIndex, className: css(className), ...props }, children);

const Focusable: React.FunctionComponent<FocusableProps> = ({
  children,
  className,
  component: Component = 'div',
  tabIndex = 0,
  isFocusable = true,
  withContainer = false,
  ...props
}) => {
  const focusableElement = children as React.ReactElement;

  const getDefaultTabIndex = () =>
    !isFocusable || focusableElement.props.isDisabled || focusableElement.props.disabled ? tabIndex : null;

  return withContainer ? (
    <Component className={css(className)} tabIndex={getDefaultTabIndex()} {...props}>
      {children}
    </Component>
  ) : (
    renderElement({ children, tabIndex, className, component: Component, ...props })
  );
};

export { Focusable };
