import { ReactElement, FunctionComponent } from 'react';

export interface WizardDrawerWrapperProps {
  /** The wizard content  */
  children: ReactElement;
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: boolean;
  /** The drawer component which wraps the wizard content */
  wrapper: (children: ReactElement) => JSX.Element;
}

export const WizardDrawerWrapper: FunctionComponent<WizardDrawerWrapperProps> = ({ hasDrawer, wrapper, children }) =>
  hasDrawer ? wrapper(children) : children;

WizardDrawerWrapper.displayName = 'WizardDrawerWrapper';
