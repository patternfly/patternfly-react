import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryZoomContainer } from 'victory';

class ChartZoomContainer extends VictoryZoomContainer {
  static propTypes = {
    ...VictoryZoomContainer.propTypes,
  };
  static role = "container";

  render() {
    return (
      <VictoryZoomContainer {...this.props} />);
  }
}
// Note: VictoryZoomContainer.defaultEvents must be hoisted
hoistNonReactStatics(ChartZoomContainer, VictoryZoomContainer);
export default ChartZoomContainer;
