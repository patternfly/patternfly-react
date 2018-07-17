import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit, OneOf } from '../../typeUtils';

export interface LevelItemProps extends HTMLProps<HTMLDivElement> {
}

declare const LevelItem: SFC<LevelItemProps>;

export default LevelItem;
