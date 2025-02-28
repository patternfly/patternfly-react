import type { JSX } from 'react';

export interface WizardDrawerWrapperProps {
  /** The wizard content  */
  children: React.ReactElement<any>;
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: boolean;
  /** The drawer component which wraps the wizard content */
  wrapper: (children: React.ReactElement<any>) => JSX.Element;
}

export const WizardDrawerWrapper: React.FunctionComponent<WizardDrawerWrapperProps> = ({
  hasDrawer,
  wrapper,
  children
}) => (hasDrawer ? wrapper(children) : children);

WizardDrawerWrapper.displayName = 'WizardDrawerWrapper';
