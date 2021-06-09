import * as React from 'react';
import { Helpers, Path } from 'victory-core';
import { PathHelpers, PathHelpersInterface } from './path-helpers';

export interface ChartPointProps {
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
   * Specifies the description of the point to assist with accessibility for screen readers
   */
  desc?: string | Function;
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
  origin?: { x?: number; y?: number };
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
   * The symbol the point should render
   */
  symbol?:
    | 'circle'
    | 'diamond'
    | 'eyeSlash'
    | 'plus'
    | 'minus'
    | 'square'
    | 'star'
    | 'triangleDown'
    | 'triangleLeft'
    | 'triangleRight'
    | 'triangleUp'
    | 'dash'
    | 'threshold'
    | Function;
  /**
   * Specifies the tab index
   */
  tabIndex?: number | Function;
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

const getPath = (props: ChartPointProps) => {
  const { x, y } = props;
  const size = Helpers.evaluateProp(props.size, props);
  if (props.getPath) {
    return props.getPath(x, y, size);
  }
  const pathFunctions = {
    circle: PathHelpers.circle,
    square: PathHelpers.square,
    diamond: PathHelpers.diamond,
    eyeSlash: PathHelpers.eyeSlash,
    triangleDown: PathHelpers.triangleDown,
    triangleLeft: PathHelpers.triangleLeft,
    triangleRight: PathHelpers.triangleRight,
    triangleUp: PathHelpers.triangleUp,
    plus: PathHelpers.plus,
    minus: PathHelpers.minus,
    star: PathHelpers.star,
    dash: PathHelpers.dash,
    threshold: PathHelpers.threshold
  };
  const symbol = Helpers.evaluateProp(props.symbol, props);
  const key: keyof PathHelpersInterface = symbol;
  const symbolFunction = typeof pathFunctions[key] === 'function' ? pathFunctions[key] : pathFunctions.square;
  return symbolFunction(x, y, size);
};

export const ChartPoint: React.FunctionComponent<ChartPointProps> = ({
  active,
  className,
  clipPath,
  datum,
  desc,
  events,
  pathComponent = <Path />,
  role = 'presentation',
  shapeRendering = 'auto',
  tabIndex,
  transform,
  ...rest
}: ChartPointProps) => {
  const props = {
    active,
    className,
    clipPath,
    datum,
    desc,
    events,
    role,
    shapeRendering,
    tabIndex,
    transform,
    ...rest
  };

  return React.cloneElement(pathComponent, {
    className,
    clipPath,
    d: getPath(props),
    desc: Helpers.evaluateProp(desc, props),
    ...events,
    role,
    shapeRendering,
    style: Helpers.evaluateStyle(rest.style, props),
    tabIndex: Helpers.evaluateProp(tabIndex, props),
    transform
  });
};
ChartPoint.displayName = 'ChartPoint';
