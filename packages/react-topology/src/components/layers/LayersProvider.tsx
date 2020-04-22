import * as React from 'react';
import { DEFAULT_LAYER } from '../../const';
import LayersContext from './LayersContext';

type LayersProviderProps = {
  layers?: string[];
  children?: React.ReactNode;
};

type State = { [id: string]: Element };

export default class LayersProvider extends React.Component<LayersProviderProps, State> {
  constructor(props: LayersProviderProps) {
    super(props);
    this.state = {};
  }

  private contextValue = (id: string): Element => {
    if (this.state[id]) {
      return this.state[id];
    }
    throw new Error(`Unknown layer '${id}'`);
  };

  private setDomLayers = (node: SVGGElement | null, id: string) => {
    if (node && this.state[id] !== node) {
      this.setState((state) => ({ ...state, [id]: node }));
    }
  };

  getLayerNode = (id: string): Element => {
    const node = this.state[id];
    if (node) {
      return node;
    }
    throw new Error(`Unknown layer '${id}'`);
  };

  render() {
    const { layers, children } = this.props;
    if (layers && !layers.includes(DEFAULT_LAYER)) {
      throw new Error('Missing default layer.');
    }
    const layerIds = layers || [DEFAULT_LAYER];
    return (
      <LayersContext.Provider value={this.contextValue}>
        {layerIds.map((id) => (
          <g key={id} data-layer-id={id} ref={(r) => this.setDomLayers(r, id)}>
            {id === DEFAULT_LAYER && this.state[id] ? children : undefined}
          </g>
        ))}
      </LayersContext.Provider>
    );
  }
}
