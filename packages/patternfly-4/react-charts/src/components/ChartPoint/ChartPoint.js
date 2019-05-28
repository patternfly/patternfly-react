import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Point } from 'victory';
import { Helpers } from 'victory-core';
import pathHelpers from './path-helpers';

// Todo: Submit dash symbol to victory-core, providing PF4 doesn't need a smaller lineHeight for dash and minus?
class VictoryPoint extends Point {
  static propTypes = {
    ...Point.propTypes,
    symbol: PropTypes.oneOfType([
      PropTypes.oneOf(['circle', 'diamond', 'plus', 'minus', 'square', 'star', 'triangleDown', 'triangleUp', 'dash']),
      PropTypes.func
    ])
  };

  getPath = props => {
    const { datum, active, x, y } = props;
    const size = Helpers.evaluateProp(props.size, datum, active);
    if (props.getPath) {
      return props.getPath(x, y, size);
    }
    const pathFunctions = {
      circle: pathHelpers.circle,
      square: pathHelpers.square,
      diamond: pathHelpers.diamond,
      triangleDown: pathHelpers.triangleDown,
      triangleUp: pathHelpers.triangleUp,
      plus: pathHelpers.plus,
      minus: pathHelpers.minus,
      star: pathHelpers.star,
      dash: pathHelpers.dash
    };
    const symbol = Helpers.evaluateProp(props.symbol, datum, active);
    const symbolFunction = typeof pathFunctions[symbol] === 'function' ? pathFunctions[symbol] : pathFunctions.circle;
    return symbolFunction(x, y, size);
  };
}

const ChartPoint = props => <VictoryPoint {...props} />;

hoistNonReactStatics(ChartPoint, Point);

export default ChartPoint;
