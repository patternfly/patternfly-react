import { SFC, HTMLProps, ReactNode } from 'react';

export interface TextContentProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const TextContent: SFC<TextContentProps>;

export default TextContent;
