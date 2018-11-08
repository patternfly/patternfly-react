import { HTMLProps, SFC, ReactType, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface ChartDonutProps extends HTMLProps<HTMLDivElement> {
}

declare const ChartDonut: SFC<ChartDonutProps>;

export default ChartDonut;
