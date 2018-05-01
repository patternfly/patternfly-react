import { SFC, HTMLAttributes } from 'react';

export interface EmptyStateInfoProps
  extends HTMLAttributes<HTMLParagraphElement> {}

declare const EmptyStateInfo: SFC<EmptyStateInfoProps>;

export default EmptyStateInfo;
