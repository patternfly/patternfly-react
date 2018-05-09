import { MouseEvent, SFC } from 'react';
import { ListGroupItemProps } from '../ListGroup';
import { Omit } from '../../typeUtils';

export interface WizardReviewStepProps
  extends Omit<ListGroupItemProps, 'onClick'> {
  collapsed?: boolean;
  onClick?(event: MouseEvent<HTMLAnchorElement>): void;
  title?: string;
}

declare const WizardReviewStep: SFC<WizardReviewStepProps>;

export default WizardReviewStep;
