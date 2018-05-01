import { SFC, HTMLAttributes } from 'react';

export interface EmptyStateTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {}

declare const EmptyStateTitle: SFC<EmptyStateTitleProps>;

export default EmptyStateTitle;
