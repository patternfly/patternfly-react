import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryZoomContainer } from 'victory';

class ChartZoomContainer extends VictoryZoomContainer {
  static propTypes = {
    ...VictoryZoomContainer.propTypes
  };

  renderChildren() {
    const children = React.Children.toArray(this.props.children);
    return children.map((child) => {
      // Some victory components expect to control props like domain for
      // children, some props should be merged rather than overridden
      const style = _.merge(child.props.style, this.props.style);
      return React.cloneElement(child, Object.assign({}, child.props, this.props, { style }));
    });
  }

  render() {
    return (
      <VictoryZoomContainer {...this.props} />);
  }
}
// Note: VictoryZoomContainer.defaultEvents must be hoisted
hoistNonReactStatics(ChartZoomContainer, VictoryZoomContainer);

export default ChartZoomContainer;
