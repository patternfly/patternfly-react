import { FunctionComponent, HTMLProps, ReactType } from 'react';
import { TitleSize, TitleLevel } from '../Title';
import { OneOf, Omit } from '../../helpers/typeUtils';

export interface CardHeaderProps extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {
  component?: ReactType<CardHeaderProps>;
  size?: OneOf<typeof TitleSize, keyof typeof TitleSize>;
  headingLevel?: TitleLevel;
}

declare const CardHeader: FunctionComponent<CardHeaderProps>;

export default CardHeader;
