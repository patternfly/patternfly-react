import { HTMLProps, SFC, ReactType } from 'react';

export interface BullseyeProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<BullseyeProps>;
}

declare const Bullseye: SFC<BullseyeProps>;

export default Bullseye;
