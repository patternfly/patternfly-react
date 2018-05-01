import { SFC } from 'react';
import { LabelProps } from './Label';

export interface DisposableLabelProps extends LabelProps {}

declare const DisposableLabel: SFC<DisposableLabelProps>;

export default DisposableLabel;
