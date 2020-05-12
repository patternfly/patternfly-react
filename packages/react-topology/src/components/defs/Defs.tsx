import * as React from 'react';
import { DefsState, DefsMap } from './SVGDefsProvider';
export class Defs extends React.PureComponent<{}, DefsState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }
  public setDefs(defs: DefsMap) {
    // setting the state will re-render this component
    this.setState({ defs: { ...defs } });
  }
  render() {
    const { defs } = this.state;
    return defs ? (
      <defs>
        {Object.keys(defs).map(id => (
          <React.Fragment key={id}>{defs[id].node}</React.Fragment>
        ))}
      </defs>
    ) : null;
  }
}
