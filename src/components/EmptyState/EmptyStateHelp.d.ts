import { SFC, HTMLAttributes } from 'react';

export interface EmptyStateHelpProps
  extends HTMLAttributes<HTMLParagraphElement> {}

declare const EmptyStateHelp: SFC<EmptyStateHelpProps>;

export default EmptyStateHelp;
