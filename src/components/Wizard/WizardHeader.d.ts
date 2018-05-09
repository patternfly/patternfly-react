import { SFC, MouseEvent } from 'react';
import { ModalHeaderProps } from '../Modal';

export interface WizardHeaderProps extends ModalHeaderProps {
  onClose(event: MouseEvent<HTMLButtonElement>): void;
  title?: string;
}

declare const WizardHeader: SFC<WizardHeaderProps>;

export default WizardHeader;
