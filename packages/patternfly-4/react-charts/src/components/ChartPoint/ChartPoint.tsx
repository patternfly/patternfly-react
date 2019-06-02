import * as React from 'react';
import { Helpers } from 'victory-core';
import { PathHelpers } from './path-helpers';
import { ChartPath } from './ChartPath';

export interface ChartPointProps {
  active?: boolean;
  className?: string;
  clipPath?: string;
  data?: any;
  datum?: any;
  events?: any;
  getPath?: Function;
  id?: number | string;
  index?: number | string;
  origin?: { x?: number, y?: number };
  pathComponent?: React.ReactElement<any>;
  polar?: boolean;
  role?: string;
  scale?: any;
  shapeRendering?: string;
  size?: number | Function;
  style?: any;
  symbol?: 'circle' | 'diamond' | 'plus' | 'minus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'dash' |
    Function;
  transform?: string;
  x?: number;
  y?: number;
}

export const ChartPoint: React.FunctionComponent<ChartPointProps> = ({
  active,
  className,
  clipPath,
  datum,
  events,
  pathComponent = <ChartPath />,
  role,
  shapeRendering,
  transform,
  ...rest
}: ChartPointProps) => {
  const getPath = (props: ChartPointProps) => {
    const { datum, active, x, y } = props;
    const size = Helpers.evaluateProp(props.size, datum, active);
    if (props.getPath) {
      return props.getPath(x, y, size);
    }
    const pathFunctions: any = {
      circle: PathHelpers.circle,
      square: PathHelpers.square,
      diamond: PathHelpers.diamond,
      triangleDown: PathHelpers.triangleDown,
      triangleUp: PathHelpers.triangleUp,
      plus: PathHelpers.plus,
      minus: PathHelpers.minus,
      star: PathHelpers.star,
      dash: PathHelpers.dash
    };
    const symbol = Helpers.evaluateProp(props.symbol, datum, active);
    const symbolFunction = typeof pathFunctions[symbol] === 'function' ? pathFunctions[symbol] : pathFunctions.circle;
    return symbolFunction(x, y, size);
  };

  return React.cloneElement(pathComponent, {
    className,
    clipPath,
    d: getPath({datum, active, ...rest}),
    events,
    role,
    shapeRendering,
    style: Helpers.evaluateStyle(rest.style, datum, active),
    transform
  });
};
