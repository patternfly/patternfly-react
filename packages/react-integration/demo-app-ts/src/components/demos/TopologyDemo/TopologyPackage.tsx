import * as React from 'react';
import { action } from 'mobx';
import * as _ from 'lodash';
import {
  createTopologyControlButtons,
  defaultControlButtonsOptions,
  EdgeModel,
  Model,
  NodeModel,
  NodeShape,
  SELECTION_EVENT,
  SelectionEventListener,
  TopologyControlBar,
  TopologySideBar,
  TopologyView,
  useEventListener,
  useVisualizationController,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';
import stylesComponentFactory from './components/stylesComponentFactory';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownToggle,
  Flex,
  Select,
  SelectOption,
  SelectVariant,
  Split,
  SplitItem,
  TextInput,
  ToolbarItem,
  Tooltip
} from '@patternfly/react-core';
import defaultLayoutFactory from './layouts/defaultLayoutFactory';
import defaultComponentFactory from './components/defaultComponentFactory';
import {
  DefaultEdgeOptions,
  DefaultNodeOptions,
  generateDataModel,
  generateEdge,
  generateNode,
  GeneratorEdgeOptions,
  GeneratorNodeOptions
} from './data/generator';
import {
  NODE_STATUSES,
  EDGE_ANIMATION_SPEEDS,
  EDGE_STYLES,
  EDGE_TERMINAL_TYPES,
  NODE_SHAPES
} from './utils/styleUtils';

const GRAPH_LAYOUT_OPTIONS = ['x', 'y', 'visible', 'style', 'layout', 'scale', 'scaleExtent', 'layers'];
const NODE_LAYOUT_OPTIONS = ['x', 'y', 'visible', 'style', 'collapsed', 'width', 'height', 'shape'];

interface TopologyViewComponentProps {
  useSidebar: boolean;
  sideBarResizable?: boolean;
}

const TopologyViewComponent: React.FunctionComponent<TopologyViewComponentProps> = ({
  useSidebar,
  sideBarResizable = false
}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>();
  const [layoutDropdownOpen, setLayoutDropdownOpen] = React.useState(false);
  const [layout, setLayout] = React.useState('ColaNoForce');
  const [nodeOptionsOpen, setNodeOptionsOpen] = React.useState<boolean>(false);
  const [nodeShapesOpen, setNodeShapesOpen] = React.useState<boolean>(false);
  const [nodeOptions, setNodeOptions] = React.useState<GeneratorNodeOptions>(DefaultNodeOptions);
  const [edgeOptionsOpen, setEdgeOptionsOpen] = React.useState<boolean>(false);
  const [edgeOptions, setEdgeOptions] = React.useState<GeneratorEdgeOptions>(DefaultEdgeOptions);
  const [savedModel, setSavedModel] = React.useState<Model>();
  const [modelSaved, setModelSaved] = React.useState<boolean>(false);
  const newNodeCount = React.useRef(0);
  const [numNodes, setNumNodes] = React.useState<number | undefined>(6);
  const [numEdges, setNumEdges] = React.useState<number | undefined>(2);
  const [numGroups, setNumGroups] = React.useState<number | undefined>(1);
  const [medScale, setMedScale] = React.useState<number | undefined>(0.5);
  const [lowScale, setLowScale] = React.useState<number | undefined>(0.3);
  const [creationCounts, setCreationCounts] = React.useState<{ numNodes: number; numEdges: number; numGroups: number }>(
    { numNodes, numEdges, numGroups }
  );
  const controller = useVisualizationController();

  React.useEffect(() => {
    const dataModel = generateDataModel(
      creationCounts.numNodes,
      creationCounts.numGroups,
      creationCounts.numEdges,
      nodeOptions,
      edgeOptions
    );

    const model = {
      graph: {
        id: 'g1',
        type: 'graph',
        layout
      },
      ...dataModel
    };

    controller.fromModel(model, false);
    // Don't update on option changes, its handled differently to not re-layout
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [creationCounts, layout]);

  useEventListener<SelectionEventListener>(SELECTION_EVENT, ids => {
    setSelectedIds(ids);
  });

  React.useEffect(() => {
    controller.getGraph().setDetailsLevelThresholds({
      low: lowScale,
      medium: medScale
    });
  }, [controller, lowScale, medScale]);

  const topologySideBar = (
    <TopologySideBar show={_.size(selectedIds) > 0} resizable={sideBarResizable} onClose={() => setSelectedIds([])}>
      <div style={{ marginTop: 27, marginLeft: 20, height: '800px' }}>{_.head(selectedIds)}</div>
    </TopologySideBar>
  );

  const updateLayout = (newLayout: string) => {
    setLayout(newLayout);
    setLayoutDropdownOpen(false);
  };

  const layoutDropdown = (
    <Split>
      <SplitItem>
        <label className="pf-u-display-inline-block pf-u-mr-md pf-u-mt-sm">Layout</label>
      </SplitItem>
      <SplitItem>
        <Dropdown
          position={DropdownPosition.right}
          toggle={<DropdownToggle onToggle={() => setLayoutDropdownOpen(!layoutDropdownOpen)}>{layout}</DropdownToggle>}
          isOpen={layoutDropdownOpen}
          dropdownItems={[
            <DropdownItem key={1} onClick={() => updateLayout('Force')}>
              Force
            </DropdownItem>,
            <DropdownItem key={2} onClick={() => updateLayout('Dagre')}>
              Dagre
            </DropdownItem>,
            <DropdownItem key={3} onClick={() => updateLayout('Cola')}>
              Cola
            </DropdownItem>,
            <DropdownItem key={4} onClick={() => updateLayout('ColaNoForce')}>
              ColaNoForce
            </DropdownItem>,
            <DropdownItem key={5} onClick={() => updateLayout('Grid')}>
              Grid
            </DropdownItem>,
            <DropdownItem key={6} onClick={() => updateLayout('Concentric')}>
              Concentric
            </DropdownItem>,
            <DropdownItem key={7} onClick={() => updateLayout('BreadthFirst')}>
              BreadthFirst
            </DropdownItem>
          ]}
        />
      </SplitItem>
    </Split>
  );

  React.useEffect(() => {
    const currentModel = controller.toModel();
    const nodes = currentModel.nodes;
    if (nodes.length) {
      const updatedNodes: NodeModel[] = nodes.map((node, index) => {
        if (node.group) {
          return node;
        }
        return {
          ...node,
          ...generateNode(index, nodeOptions)
        };
      });
      controller.fromModel({ nodes: updatedNodes, edges: currentModel.edges });
    }
    // Don't update on controller change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeOptions]);

  const renderNodeOptionsDropdown = () => {
    const selectContent = (
      <div>
        <SelectOption
          value="Labels"
          isChecked={nodeOptions.nodeLabels}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeLabels: !prev.nodeLabels }))}
        />
        <SelectOption
          value="Secondary Labels"
          isChecked={nodeOptions.nodeSecondaryLabels}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeSecondaryLabels: !prev.nodeSecondaryLabels }))}
        />
        <SelectOption
          value="Status"
          isChecked={nodeOptions.statuses.length > 1}
          onClick={() =>
            setNodeOptions(prev => ({
              ...prev,
              statuses: prev.statuses.length > 1 ? DefaultNodeOptions.statuses : NODE_STATUSES
            }))
          }
        />
        <SelectOption
          value="Decorators"
          isChecked={nodeOptions.statusDecorators}
          onClick={() =>
            setNodeOptions(prev => ({
              ...prev,
              statusDecorators: !prev.statusDecorators,
              showDecorators: !prev.showDecorators
            }))
          }
        />
        <SelectOption
          value="Badges"
          isChecked={nodeOptions.nodeBadges}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeBadges: !prev.nodeBadges }))}
        />
        <SelectOption
          value="Icons"
          isChecked={nodeOptions.nodeIcons}
          onClick={() => setNodeOptions(prev => ({ ...prev, nodeIcons: !prev.nodeIcons }))}
        />
        <SelectOption
          value="Context Menus"
          isChecked={nodeOptions.contextMenus}
          onClick={() => setNodeOptions(prev => ({ ...prev, contextMenus: !prev.contextMenus }))}
        />
      </div>
    );

    return (
      <Select
        variant={SelectVariant.checkbox}
        customContent={selectContent}
        onToggle={() => setNodeOptionsOpen(prev => !prev)}
        onSelect={() => {}}
        isCheckboxSelectionBadgeHidden
        isOpen={nodeOptionsOpen}
        placeholderText="Node options"
      />
    );
  };

  const toggleNodeShape = (shape: NodeShape): void => {
    const index = nodeOptions.shapes.indexOf(shape);
    if (index >= 0) {
      setNodeOptions(prev => ({
        ...prev,
        shapes: [...prev.shapes.slice(0, index), ...prev.shapes.slice(index + 1)]
      }));
    } else {
      setNodeOptions(prev => ({
        ...prev,
        shapes: [...prev.shapes, shape]
      }));
    }
  };

  const renderNodeShapesDropdown = () => {
    const selectContent = (
      <div>
        {NODE_SHAPES.map(shape => (
          <SelectOption
            key={shape}
            value={shape}
            isChecked={nodeOptions.shapes.includes(shape)}
            onClick={() => toggleNodeShape(shape)}
          />
        ))}
      </div>
    );

    return (
      <Select
        variant={SelectVariant.checkbox}
        customContent={selectContent}
        onToggle={() => setNodeShapesOpen(prev => !prev)}
        onSelect={() => {}}
        isCheckboxSelectionBadgeHidden
        isOpen={nodeShapesOpen}
        placeholderText="Node shapes"
      />
    );
  };

  React.useEffect(() => {
    const currentModel = controller.toModel();
    const edges = currentModel.edges;
    if (edges.length) {
      const updatedEdges: EdgeModel[] = edges.map((edge, index) => ({
        ...edge,
        ...generateEdge(index, edge.source, edge.target, edgeOptions)
      }));
      controller.fromModel({ edges: updatedEdges, nodes: currentModel.nodes });
    }
  }, [edgeOptions, controller]);

  const renderEdgeOptionsDropdown = () => {
    const selectContent = (
      <div>
        <SelectOption
          value="Status"
          isChecked={edgeOptions.edgeStatuses.length > 1}
          onClick={() =>
            setEdgeOptions(prev => ({
              ...prev,
              edgeStatuses: prev.edgeStatuses.length > 1 ? DefaultEdgeOptions.edgeStatuses : NODE_STATUSES
            }))
          }
        />
        <SelectOption
          value="Styles"
          isChecked={edgeOptions.edgeStyles.length > 1}
          onClick={() =>
            setEdgeOptions(prev => ({
              ...prev,
              edgeStyles: prev.edgeStyles.length > 1 ? DefaultEdgeOptions.edgeStyles : EDGE_STYLES
            }))
          }
        />
        <SelectOption
          value="Animations"
          isChecked={edgeOptions.edgeAnimations.length > 1}
          onClick={() =>
            setEdgeOptions(prev => ({
              ...prev,
              edgeAnimations: prev.edgeAnimations.length > 1 ? DefaultEdgeOptions.edgeAnimations : EDGE_ANIMATION_SPEEDS
            }))
          }
        />
        <SelectOption
          value="Terminal types"
          isChecked={edgeOptions.terminalTypes.length > 1}
          onClick={() =>
            setEdgeOptions(prev => ({
              ...prev,
              terminalTypes: prev.terminalTypes.length > 1 ? DefaultEdgeOptions.terminalTypes : EDGE_TERMINAL_TYPES
            }))
          }
        />
        <SelectOption
          value="Tags"
          isChecked={edgeOptions.edgeTags}
          onClick={() => setEdgeOptions(prev => ({ ...prev, edgeTags: !prev.edgeTags }))}
        />
      </div>
    );

    return (
      <Select
        variant={SelectVariant.checkbox}
        customContent={selectContent}
        onToggle={() => setEdgeOptionsOpen(prev => !prev)}
        onSelect={() => {}}
        isCheckboxSelectionBadgeHidden
        isOpen={edgeOptionsOpen}
        placeholderText="Edge options"
      />
    );
  };

  const saveModel = () => {
    setSavedModel(controller.toModel());
    setModelSaved(true);
    window.setTimeout(() => {
      setModelSaved(false);
    }, 2000);
  };

  const restoreLayout = () => {
    if (savedModel) {
      const currentModel = controller.toModel();
      currentModel.graph = {
        ...currentModel.graph,
        ..._.pick(savedModel.graph, GRAPH_LAYOUT_OPTIONS)
      };
      currentModel.nodes = currentModel.nodes.map(n => {
        const savedNode = savedModel.nodes.find(sn => sn.id === n.id);
        if (!savedNode) {
          return n;
        }
        return {
          ...n,
          ..._.pick(savedNode, NODE_LAYOUT_OPTIONS)
        };
      });
      controller.fromModel(currentModel, false);

      if (savedModel.graph.layout !== layout) {
        setLayout(savedModel.graph.layout);
      }
    }
  };

  const addNode = () => {
    const newNode = {
      id: `new-node-${newNodeCount.current++}`,
      type: 'node',
      width: 100,
      height: 100,
      data: {}
    };
    const currentModel = controller.toModel();
    currentModel.nodes.push(newNode);
    controller.fromModel(currentModel);
  };

  const removeSelectedNode = () => {
    const currentModel = controller.toModel();
    const selectedIndex = currentModel.nodes.findIndex(n => n.id === selectedIds[0]);
    currentModel.nodes = [
      ...currentModel.nodes.slice(0, selectedIndex),
      ...currentModel.nodes.slice(selectedIndex + 1)
    ];
    const effectedEdges = currentModel.edges.filter(e => e.source === selectedIds[0] || e.target === selectedIds[0]);
    effectedEdges.forEach(e => {
      const effectedIndex = currentModel.edges.findIndex(edge => edge.id === e.id);
      currentModel.edges = [
        ...currentModel.edges.slice(0, effectedIndex),
        ...currentModel.edges.slice(effectedIndex + 1)
      ];
    });
    currentModel.nodes
      .filter(n => n.group)
      .forEach(g => {
        const childIndex = g.children.findIndex(c => c === selectedIds[0]);
        if (childIndex) {
          g.children = [...g.children.slice(0, childIndex), ...g.children.slice(childIndex + 1)];
        }
      });

    controller.fromModel(currentModel);
    setSelectedIds([]);
  };

  const updateValue = (value: number, min: number, max: number, setter: any): void => {
    if (value >= min && value <= max) {
      setter(value);
    }
  };

  const contextToolbar = (
    <>
      <ToolbarItem>
        <Flex wrap="no-wrap">
          <span>Nodes:</span>
          <TextInput
            aria-label="nodes"
            type="number"
            value={numNodes || ''}
            onChange={(val: string) => (val ? updateValue(parseInt(val), 0, 9999, setNumNodes) : setNumNodes(0))}
          />
          <span>Edges:</span>
          <TextInput
            aria-label="edges"
            type="number"
            value={numEdges}
            onChange={(val: string) => (val ? updateValue(parseInt(val), 0, 200, setNumEdges) : setNumEdges(0))}
          />
          <span>Groups:</span>
          <TextInput
            aria-label="groups"
            type="number"
            value={numGroups}
            onChange={(val: string) => (val ? updateValue(parseInt(val), 0, 100, setNumGroups) : setNumGroups(0))}
          />
          <Button
            variant="link"
            isDisabled={numNodes === undefined || numNodes < 2 || numEdges === undefined || numGroups === undefined}
            onClick={() => setCreationCounts({ numNodes, numEdges, numGroups })}
          >
            Apply
          </Button>
        </Flex>
      </ToolbarItem>
      <ToolbarItem>{renderNodeOptionsDropdown()}</ToolbarItem>
      <ToolbarItem>{renderNodeShapesDropdown()}</ToolbarItem>
      <ToolbarItem>{renderEdgeOptionsDropdown()}</ToolbarItem>
    </>
  );

  const viewToolbar = (
    <>
      <ToolbarItem>{layoutDropdown}</ToolbarItem>
      <ToolbarItem>
        <Tooltip content="Layout info saved" trigger="manual" isVisible={modelSaved}>
          <Button variant="secondary" onClick={saveModel}>
            Save Layout Info
          </Button>
        </Tooltip>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={restoreLayout}>
          Restore Layout Info
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={addNode}>
          Add Node
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary" onClick={removeSelectedNode} isDisabled={!selectedIds || selectedIds.length === 0}>
          Remove Node
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Flex wrap="no-wrap">
          <span id="med-scale">Medium Scale:</span>
          <TextInput
            aria-labelledby="med-scale"
            max={1.0}
            min={lowScale}
            step={0.01}
            value={medScale}
            type="number"
            onChange={val => {
              const newValue = parseFloat(val);
              if (!Number.isNaN(newValue) && newValue > lowScale && newValue >= 0.01 && newValue <= 1.0) {
                setMedScale(parseFloat(val));
              }
            }}
          />
          <span id="low-scale">Low Scale:</span>
          <TextInput
            aria-labelledby="low-scale"
            max={medScale}
            min={0.01}
            step={0.01}
            value={lowScale}
            type="number"
            onChange={val => {
              const newValue = parseFloat(val);
              if (!Number.isNaN(newValue) && newValue < medScale && newValue >= 0.01 && newValue <= 1.0) {
                setLowScale(parseFloat(val));
              }
            }}
          />
        </Flex>
      </ToolbarItem>
    </>
  );

  return (
    <TopologyView
      controlBar={
        <TopologyControlBar
          controlButtons={createTopologyControlButtons({
            ...defaultControlButtonsOptions,
            zoomInCallback: action(() => {
              controller.getGraph().scaleBy(4 / 3);
            }),
            zoomOutCallback: action(() => {
              controller.getGraph().scaleBy(0.75);
            }),
            fitToScreenCallback: action(() => {
              controller.getGraph().fit(80);
            }),
            resetViewCallback: action(() => {
              controller.getGraph().reset();
              controller.getGraph().layout();
            }),
            legend: false
          })}
        />
      }
      contextToolbar={contextToolbar}
      viewToolbar={viewToolbar}
      sideBar={useSidebar && topologySideBar}
      sideBarOpen={useSidebar && _.size(selectedIds) > 0}
      sideBarResizable={sideBarResizable}
    >
      <VisualizationSurface state={{ selectedIds }} />
    </TopologyView>
  );
};

export const Topology = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);

  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar={false} />
    </VisualizationProvider>
  );
});

export const WithSideBar = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);

  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar />
    </VisualizationProvider>
  );
});

export const WithResizableSideBar = React.memo(() => {
  const controller = new Visualization();
  controller.registerLayoutFactory(defaultLayoutFactory);
  controller.registerComponentFactory(defaultComponentFactory);
  controller.registerComponentFactory(stylesComponentFactory);
  return (
    <VisualizationProvider controller={controller}>
      <TopologyViewComponent useSidebar sideBarResizable />
    </VisualizationProvider>
  );
});
