import { FunctionComponent, ReactNode } from 'react';
import {
  SpaceProps,
  ColorProps,
  DisplayProps,
  MaxWidthProps,
  MinWidthProps,
  WidthProps,
  HeightProps,
  MaxHeightProps,
  MinHeightProps,
  VerticalAlignProps,
  FlexProps,
  OrderProps,
  FlexBasisProps,
  AlignSelfProps,
  FontSizeProps,
  BordersProps,
  BorderColorProps,
  BorderRadiusProps,
  BoxShadowProps,
  OpacityProps,
  OverflowProps,
  RatioProps,
  BackgroundProps,
  BackgroundImageProps,
  BackgroundSizeProps,
  BackgroundPositionProps,
  BackgroundRepeatProps,
  PositionProps,
  ZIndexProps,
  LeftProps,
  TopProps,
  RightProps,
  BottomProps
} from 'styled-system';

export interface StyledBoxProps
  extends SpaceProps,
    ColorProps,
    DisplayProps,
    MaxWidthProps,
    MinWidthProps,
    WidthProps,
    HeightProps,
    MaxHeightProps,
    MinHeightProps,
    VerticalAlignProps,
    FlexProps,
    OrderProps,
    FlexBasisProps,
    AlignSelfProps,
    FontSizeProps,
    BordersProps,
    BorderColorProps,
    BorderRadiusProps,
    BoxShadowProps,
    OpacityProps,
    OverflowProps,
    RatioProps,
    BackgroundProps,
    BackgroundImageProps,
    BackgroundSizeProps,
    BackgroundPositionProps,
    BackgroundRepeatProps,
    PositionProps,
    ZIndexProps,
    LeftProps,
    TopProps,
    RightProps,
    BottomProps {
  className?: string;
  children?: ReactNode;
  component?: string;
}

declare const StyledBox: FunctionComponent<StyledBoxProps>;

export default StyledBox;
