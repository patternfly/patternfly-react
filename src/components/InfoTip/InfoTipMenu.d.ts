import { HTMLAttributes, ComponentClass } from 'react';

export interface InfoTipMenuProps extends HTMLAttributes<HTMLDivElement> {
  bsRole?: string;
  rootCloseEvent?: 'click' | 'mousedown';
}

declare const InfoTipMenu: ComponentClass<InfoTipMenuProps>;

export default InfoTipMenu;
