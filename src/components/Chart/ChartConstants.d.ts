import { ComponentType } from 'react';
import { ChartConfiguration } from 'c3';

export interface ChartProps extends ChartConfiguration {
  title?: string;
}

export type ChartType = ComponentType<ChartProps>;
