import * as Examples from './components/demos';

interface DemoInterface {
  /** ID for the demo, it will be used to help generate general ids to help with testing */
  id: string;
  /** The name of the demo */
  name: string;
  /** Demo component associated with the demo  */
  componentType: any;
  /** Flag if this is the default demo */
  isDefault?: boolean;
}
/** Add the name of the demo and it's component here to have them show up in the demo app */
export const Demos: DemoInterface[] = [
  {
    id: 'topology-demo',
    name: 'Topology Demo',
    componentType: Examples.TopologyDemo
  },
  {
    id: 'topology-simple-graph-class-demo',
    name: 'Topology Simple Graph Class Demo',
    componentType: Examples.TopologySimpleGraphClassDemo
  },
  {
    id: 'topology-simple-graph-hooks-demo',
    name: 'Topology Simple Graph Hooks Demo',
    componentType: Examples.TopologySimpleGraphHooksDemo
  },
  {
    id: 'topology-control-bar-demo',
    name: 'Topology Control Bar Demo',
    componentType: Examples.TopologyControlBarDemo
  },
  {
    id: 'topology-sidepanel-demo',
    name: 'Topology Side Panel Demo',
    componentType: Examples.TopologySidePanelDemo
  },
  {
    id: 'topology-dashed-edges-demo',
    name: 'Topology Dashed Edges Demo',
    componentType: Examples.TopologyDashedEdgesDemo
  }
];

export default Demos;
