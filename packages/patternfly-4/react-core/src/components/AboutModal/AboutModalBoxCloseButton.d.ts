import { SFC, HTMLProps } from 'react';

export interface AboutModalBoxCloseButtonProps extends HTMLProps<HTMLDivElement> {
  onClose?: Function;
}

declare const AboutModalBoxCloseButton: SFC<AboutModalBoxCloseButtonProps>;

export default AboutModalBoxCloseButton;
