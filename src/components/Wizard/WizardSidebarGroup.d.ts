import { SFC } from 'react';
import { ListGroupProps } from '../ListGroup';

export interface WizardSidebarGroupProps extends ListGroupProps {
  activeStep?: string | number;
  step?: string | number;
}

declare const WizardSidebarGroup: SFC<WizardSidebarGroupProps>;

export default WizardSidebarGroup;
