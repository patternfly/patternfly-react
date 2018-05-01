import { SFC } from 'react';
import { ModalFooterProps } from '../Modal';
import { Wizard } from '.';

export interface WizardFooterProps extends ModalFooterProps {}

declare const WizardFooter: SFC<WizardFooterProps>;

export default WizardFooter;
