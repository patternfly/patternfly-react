import { ModalProps } from '../Modal';
import { SFC } from 'react';

export interface WizardProps extends ModalProps {}

declare const Wizard: SFC<WizardProps>;

export default Wizard;
