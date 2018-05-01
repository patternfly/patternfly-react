import { ListGroupItemProps } from '../ListGroup';
import { Omit } from '../../typeUtils';
import { SFC } from 'react';

export interface WizardSidebarGroupItemProps
  extends Omit<ListGroupItemProps, 'onClick'> {
  stepIndex: number;
  subStepIndex: number;
  activeSubStep?: string | number;
  label?: string;
  onClick?(stepIndex: number, subStepIndex: number): void;
  subStep?: string | number;
  title?: string;
}

declare const WizardSidebarGroupItem: SFC<WizardSidebarGroupItemProps>;

export default WizardSidebarGroupItem;
