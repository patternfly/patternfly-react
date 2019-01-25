import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface TextContentProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const TextContent: FunctionComponent<TextContentProps>;

export default TextContent;
