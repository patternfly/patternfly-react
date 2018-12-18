import { SFC, HTMLProps } from 'react';

export interface EmptyStateBodyProps extends HTMLProps<HTMLParagraphElement> {}

declare const EmptyStateBody: SFC<EmptyStateBodyProps>;

export default EmptyStateBody;
