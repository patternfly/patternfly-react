import { HTMLAttributes, ReactNode, SFC } from 'react';

export interface WizardSidebarProps extends HTMLAttributes<HTMLDivElement> {
  items?: ReactNode;
}

declare const WizardSidebar: SFC<WizardSidebarProps>;

export default WizardSidebar;
