import { SFC, HTMLAttributes } from 'react';

export interface InfoTipToggleProps extends HTMLAttributes<HTMLAnchorElement> {
  open?: boolean;
  bsRole?: string;
}

declare const InfoTipToggle: SFC<InfoTipToggleProps>;

export default InfoTipToggle;
