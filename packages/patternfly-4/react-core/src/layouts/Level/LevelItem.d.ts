import { FunctionComponent, HTMLProps } from 'react';

export interface LevelItemProps extends HTMLProps<HTMLDivElement> {
}

declare const LevelItem: FunctionComponent<LevelItemProps>;

export default LevelItem;
