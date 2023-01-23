import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Topology/topology-components';
import { hullPath } from '../utils/svg-utils';
import DefaultCreateConnector from '../components/DefaultCreateConnector';
import Point from '../geom/Point';
import Layer from '../components/layers/Layer';
import { ContextMenu, ContextMenuItem } from '../components/contextmenu';
import { AnchorEnd, Graph, GraphElement, isGraph, isNode, LabelPosition, Node } from '../types';
import {
  DragEvent,
  DragObjectWithType,
  DragOperationWithType,
  DragSourceMonitor,
  DragSourceSpec,
  DragSpecOperationType
} from './dnd-types';
import { useDndDrag } from './useDndDrag';
import { TOP_LAYER } from '../const';
import { useCombineRefs, useHover } from '../utils';

export const CREATE_CONNECTOR_OPERATION = '#createconnector#';
export const CREATE_CONNECTOR_DROP_TYPE = '#createConnector#';

export interface ConnectorChoice {
  label: string;
}

export interface CreateConnectorOptions {
  handleAngle?: number;
  handleAngleTop?: number;
  handleLength?: number;
  dragItem?: DragObjectWithType;
  dragOperation?: DragOperationWithType;
  hideConnectorMenu?: boolean;
}

interface ConnectorComponentProps {
  startPoint: Point;
  endPoint: Point;
  hints: string[];
  dragging: boolean;
  hover?: boolean;
}

type CreateConnectorRenderer = React.ComponentType<ConnectorComponentProps>;

type OnCreateResult = ConnectorChoice[] | void | undefined | null | React.ReactElement[];

type CreateConnectorWidgetProps = {
  element: Node;
  onKeepAlive: (isAlive: boolean) => void;
  onCreate: (
    element: Node,
    target: Node | Graph,
    event: DragEvent,
    dropHints?: string[] | undefined,
    choice?: ConnectorChoice
  ) => Promise<OnCreateResult> | OnCreateResult;
  ConnectorComponent: CreateConnectorRenderer;
  contextMenuClass?: string;
} & CreateConnectorOptions;

interface CollectProps {
  event?: DragEvent;
  dragging: boolean;
  hints?: string[] | undefined;
}

interface PromptData {
  element: Node;
  target: Node | Graph;
  event: DragEvent;
  choices: ConnectorChoice[] | React.ReactElement[];
}

const isReactElementArray = (choices: ConnectorChoice[] | React.ReactElement[]): choices is React.ReactElement[] =>
  React.isValidElement(choices[0]);

const DEFAULT_HANDLE_ANGLE = Math.PI / 180;
const DEFAULT_HANDLE_ANGLE_TOP = 1.5 * Math.PI;
const DEFAULT_HANDLE_LENGTH = 32;

const CreateConnectorWidget: React.FunctionComponent<CreateConnectorWidgetProps> = observer(props => {
  const {
    element,
    onKeepAlive,
    onCreate,
    ConnectorComponent,
    handleAngle = DEFAULT_HANDLE_ANGLE,
    handleAngleTop = DEFAULT_HANDLE_ANGLE_TOP,
    handleLength = DEFAULT_HANDLE_LENGTH,
    contextMenuClass,
    dragItem,
    dragOperation,
    hideConnectorMenu
  } = props;
  const [prompt, setPrompt] = React.useState<PromptData | null>(null);
  const [active, setActive] = React.useState(false);
  const hintsRef = React.useRef<string[] | undefined>();

  const spec = React.useMemo(() => {
    const dragSourceSpec: DragSourceSpec<
      DragObjectWithType,
      DragSpecOperationType<DragOperationWithType>,
      GraphElement,
      CollectProps,
      CreateConnectorWidgetProps
    > = {
      item: dragItem || { type: CREATE_CONNECTOR_DROP_TYPE },
      operation: dragOperation || { type: CREATE_CONNECTOR_OPERATION },
      begin: (monitor: DragSourceMonitor, dragProps: any) => {
        setActive(true);
        return dragProps.element;
      },
      drag: (event: DragEvent, monitor: DragSourceMonitor, p: CreateConnectorWidgetProps) => {
        p.element.raise();
      },
      end: async (dropResult: GraphElement, monitor: DragSourceMonitor, dragProps: CreateConnectorWidgetProps) => {
        const event = monitor.getDragEvent();
        if ((isNode(dropResult) || isGraph(dropResult)) && event) {
          const choices = await dragProps.onCreate(dragProps.element, dropResult, event, monitor.getDropHints());
          if (choices && choices.length && !hideConnectorMenu) {
            setPrompt({ element: dragProps.element, target: dropResult, event, choices });
            return;
          }
        }
        setActive(false);
        dragProps.onKeepAlive(false);
      },
      collect: monitor => ({
        dragging: !!monitor.getItem(),
        event: monitor.isDragging() ? monitor.getDragEvent() : undefined,
        hints: monitor.getDropHints()
      })
    };
    return dragSourceSpec;
  }, [setActive, dragItem, dragOperation, hideConnectorMenu]);
  const [{ dragging, event, hints }, dragRef] = useDndDrag(spec, props);
  const [hover, hoverRef] = useHover();
  const refs = useCombineRefs(dragRef, hoverRef);

  if (!active && dragging && !event) {
    // another connector is dragging right now
    return null;
  }

  if (dragging) {
    // store the latest hints
    hintsRef.current = hints;
  }

  const dragEvent = prompt ? prompt.event : event;

  let startPoint: Point;
  let endPoint: Point;

  if (dragEvent) {
    endPoint = new Point(dragEvent.x, dragEvent.y);
    startPoint = element.getAnchor(AnchorEnd.source).getLocation(endPoint);
  } else {
    const bounds = element.getBounds();
    const isRightLabel = element.getLabelPosition() === LabelPosition.right;
    const referencePoint = isRightLabel
      ? new Point(bounds.x + bounds.width / 2, bounds.y)
      : new Point(bounds.right(), Math.tan(handleAngle) * (bounds.width / 2) + bounds.y + bounds.height / 2);
    startPoint = element.getAnchor(AnchorEnd.source).getLocation(referencePoint);
    endPoint = new Point(
      Math.cos(isRightLabel ? handleAngleTop : handleAngle) * handleLength + startPoint.x,
      Math.sin(isRightLabel ? handleAngleTop : handleAngle) * handleLength + startPoint.y
    );
  }

  // bring into the coordinate space of the element
  element.translateFromParent(startPoint);
  element.translateFromParent(endPoint);

  return (
    <>
      <Layer id={TOP_LAYER}>
        <g
          className={css(styles.topologyDefaultCreateConnector)}
          ref={refs}
          onMouseEnter={!active ? () => onKeepAlive(true) : undefined}
          onMouseLeave={!active ? () => onKeepAlive(false) : undefined}
        >
          <ConnectorComponent
            startPoint={startPoint}
            endPoint={endPoint}
            dragging={dragging}
            hints={hintsRef.current || []}
            hover={hover}
          />
          <path
            d={hullPath(
              [
                [startPoint.x, startPoint.y],
                [endPoint.x, endPoint.y]
              ],
              7
            )}
            fillOpacity="0"
          />
        </g>
      </Layer>
      {prompt && (
        <ContextMenu
          reference={{ x: prompt.event.pageX, y: prompt.event.pageY }}
          className={contextMenuClass}
          open
          onRequestClose={() => {
            setActive(false);
            onKeepAlive(false);
          }}
        >
          {isReactElementArray(prompt.choices)
            ? prompt.choices
            : prompt.choices.map((c: ConnectorChoice) => (
                <ContextMenuItem
                  key={c.label}
                  onClick={() => {
                    onCreate(prompt.element, prompt.target, prompt.event, hintsRef.current, c);
                  }}
                >
                  {c.label}
                </ContextMenuItem>
              ))}
        </ContextMenu>
      )}
    </>
  );
});

interface ElementProps {
  element: Node;
}

export interface WithCreateConnectorProps {
  onShowCreateConnector: () => void;
  onHideCreateConnector: () => void;
}

export const withCreateConnector = <P extends WithCreateConnectorProps & ElementProps>(
  onCreate: React.ComponentProps<typeof CreateConnectorWidget>['onCreate'],
  ConnectorComponent: CreateConnectorRenderer = DefaultCreateConnector,
  contextMenuClass?: string,
  options?: CreateConnectorOptions
) => (WrappedComponent: React.ComponentType<Partial<P>>) => {
  const Component: React.FunctionComponent<Omit<P, keyof WithCreateConnectorProps>> = props => {
    const [show, setShow] = React.useState(false);
    const [alive, setKeepAlive] = React.useState(false);
    const onShowCreateConnector = React.useCallback(() => setShow(true), []);
    const onHideCreateConnector = React.useCallback(() => setShow(false), []);
    const onKeepAlive = React.useCallback((isAlive: boolean) => setKeepAlive(isAlive), [setKeepAlive]);
    return (
      <>
        <WrappedComponent
          {...(props as any)}
          onShowCreateConnector={onShowCreateConnector}
          onHideCreateConnector={onHideCreateConnector}
        />
        {(show || alive) && (
          <CreateConnectorWidget
            {...options}
            element={props.element}
            onCreate={onCreate}
            onKeepAlive={onKeepAlive}
            ConnectorComponent={ConnectorComponent}
            contextMenuClass={contextMenuClass}
          />
        )}
      </>
    );
  };
  Component.displayName = `withCreateConnector(${WrappedComponent.displayName || WrappedComponent.name})`;
  return observer(Component);
};
