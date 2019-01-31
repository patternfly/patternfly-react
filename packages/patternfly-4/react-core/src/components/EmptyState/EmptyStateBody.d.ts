import { FunctionComponent, HTMLProps } from 'react';

export interface EmptyStateBodyProps extends HTMLProps<HTMLParagraphElement> {}

declare const EmptyStateBody: FunctionComponent<EmptyStateBodyProps>;

export default EmptyStateBody;
