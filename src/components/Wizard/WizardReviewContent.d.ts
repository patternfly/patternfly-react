import { SFC, HTMLAttributes } from 'react';

export interface WizardReviewContentProps
  extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

declare const WizardReviewContent: SFC<WizardReviewContentProps>;

export default WizardReviewContent;
