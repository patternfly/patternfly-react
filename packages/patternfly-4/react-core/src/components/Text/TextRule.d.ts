import { FunctionComponent, HTMLProps } from 'react';

export interface TextRuleProps extends HTMLProps<HTMLHRElement> {
  className?: string;
}

declare const TextRule: FunctionComponent<TextRuleProps>;

export default TextRule;
