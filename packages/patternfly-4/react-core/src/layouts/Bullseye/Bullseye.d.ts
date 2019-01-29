import { FunctionComponent, HTMLProps, ReactType } from 'react';

export interface BullseyeProps extends HTMLProps<HTMLDivElement> {
  component?: ReactType<BullseyeProps>;
}

declare const Bullseye: FunctionComponent<BullseyeProps>;

export default Bullseye;
