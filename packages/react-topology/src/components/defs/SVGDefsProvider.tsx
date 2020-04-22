import * as React from 'react';
import SVGDefsContext, { SVGDefsContextProps } from './SVGDefsContext';

type DefsMap = {
  [id: string]: {
    count: number;
    node: React.ReactNode;
  };
};

export type DefsState = {
  defs?: DefsMap;
};

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
        {Object.keys(defs).map((id) => (
          <React.Fragment key={id}>{defs[id].node}</React.Fragment>
        ))}
      </defs>
    ) : null;
  }
}

export interface SVGDefsProviderProps {
  children?: React.ReactNode;
}

/**
 * Renders a `<defs>` element and sets up a {@link SVGDefsContext} provider such that child components
 * may contribute to the `<defs>` without the parent component needing explicit knowledge of each contribution.
 * This helps decouple the parent implementation from the children and ensures that duplicate defs entries,
 * such as filters, are eliminated.
 */
class SVGDefsProvider extends React.Component<SVGDefsProviderProps> {
  private readonly defsRef = React.createRef<Defs>();

  private readonly defs: DefsMap = {};

  private contextValue: SVGDefsContextProps = {
    addDef: (id, node) => {
      const defObj = this.defs[id];
      if (defObj) {
        defObj.count++;
      } else {
        this.defs[id] = {
          count: 1,
          node,
        };
        this.updateDefs();
      }
    },
    removeDef: (id) => {
      const defObj = this.defs[id];
      if (--defObj.count === 0) {
        delete this.defs[id];
        this.updateDefs();
      }
    },
  };

  private updateDefs() {
    // Set the defs directly on the child component so that only it will re-render.
    // Does not use `setState` because otherwise all child components would be re-renders again
    // when only the `Defs` component needs to be rendered.
    this.defsRef.current && this.defsRef.current.setDefs(this.defs);
  }

  render() {
    return (
      <SVGDefsContext.Provider value={this.contextValue}>
        <Defs ref={this.defsRef} />
        {this.props.children}
      </SVGDefsContext.Provider>
    );
  }
}

export default SVGDefsProvider;
