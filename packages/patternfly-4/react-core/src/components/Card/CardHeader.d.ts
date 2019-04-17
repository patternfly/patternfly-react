import { FunctionComponent, HTMLProps, ReactType } from 'react';
import { TitleSize, TitleLevel } from '../Title';
import { OneOf, Omit } from '../../helpers/typeUtils';

export interface CardHeaderProps extends HTMLProps<HTMLDivElement> {}

declare const CardHeader: FunctionComponent<CardHeaderProps>;

export default CardHeader;
