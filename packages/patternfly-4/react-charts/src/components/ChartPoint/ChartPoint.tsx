import * as React from 'react';
import { Helpers, Path } from 'victory-core';
import { PathHelpers } from './path-helpers';

export interface ChartPointProps {
  /**
   * See Victory type docs: https://formidable.com/open-source/victory/docs/victory-primitives#point
   */
  ' '?: any;
  /**
   * A flag signifying whether the component is active
   */
  active?: boolean;
  /**
   * The class name that will be applied to the rendered element
   */
  className?: string;
  /**
   * TRhe clip path
   */
  clipPath?: string;
  /**
   * The entire dataset
   */
  data?: any[];
  /**
   * The data point corresponding to this point
   */
  datum?: any;
  /**
   * Events to attach to the rendered element
   */
  events?: any;
  /**
   * A function to return symbol paths
   */
  getPath?: Function;
  /**
   * An id to apply to the rendered component
   */
  id?: number | string;
  /**
   * The index of this point within the dataset
   */
  index?: number | string;
  /**
   * The svg coordinates of the center point of a polar chart
   */
  origin?: { x?: number, y?: number };
  /**
   * The rendered path element
   */
  pathComponent?: React.ReactElement<any>;
  /**
   * A flag specifying whether the component is part of a polar chart
   */
  polar?: boolean;
  /**
   * The aria role to assign to the element
   */
  role?: string;
  /**
   * The x and y scale of the parent chart with domain and range applied
   */
  scale?: any;
  /**
   * The shape rendering attribute to apply to the rendered path
   */
  shapeRendering?: string;
  /**
   * The size of the point
   */
  size?: number | Function;
  /**
   * The styles to apply to the rendered element
   */
  style?: any;
  /**
   * The 'circle', 'diamond', 'plus', 'minus', 'square', 'star', 'triangleDown', 'triangleUp', or 'dash' which symbol
   * the point should render
   */
  symbol?: 'circle' | 'diamond' | 'plus' | 'minus' | 'square' | 'star' | 'triangleDown' | 'triangleUp' | 'dash' |
    Function;
  /**
   * A transform that will be supplied to elements this component renders
   */
  transform?: string;
  /**
   * The x coordinate of the center of the point
   */
  x?: number;
  /**
   * The y coordinate of the center of the point
   */
  y?: number;
}

export const ChartPoint: React.FunctionComponent<ChartPointProps> = ({
  active,
  className,
  clipPath,
  datum,
  events,
  pathComponent = <Path />,
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
