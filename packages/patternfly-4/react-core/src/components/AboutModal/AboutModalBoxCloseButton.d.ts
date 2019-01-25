import { FunctionComponent, HTMLProps } from 'react';

export interface AboutModalBoxCloseButtonProps extends HTMLProps<HTMLDivElement> {
  onClose?: Function;
}

declare const AboutModalBoxCloseButton: FunctionComponent<AboutModalBoxCloseButtonProps>;

export default AboutModalBoxCloseButton;
