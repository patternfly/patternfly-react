import * as React from 'react';
import * as d3 from 'd3';
import { observer } from 'mobx-react';
import { action, autorun, IReactionDisposer } from 'mobx';
import ElementContext from '../utils/ElementContext';
import useCallbackRef from '../utils/useCallbackRef';
import Point from '../geom/Point';
import { isGraph, ModelKind } from '../types';
import { ATTR_DATA_KIND } from '../const';

export type PanZoomTransform = {
  x: number;
  y: number;
  k: number;
};

const ZOOM_EXTENT: [number, number] = [0.25, 4];

export type PanZoomRef = (node: SVGGElement | null) => void;

// Used to send events prevented by d3.zoom to the document allowing modals, dropdowns, etc, to close
const propagatePanZoomMouseEvent = (e: Event): void => {
  document.dispatchEvent(new MouseEvent(e.type, e));
};

export const usePanZoom = (zoomExtent: [number, number] = ZOOM_EXTENT): PanZoomRef => {
  const element = React.useContext(ElementContext);
  if (!isGraph(element)) {
    throw new Error('usePanZoom must be used within the scope of a Graph');
  }
  const elementRef = React.useRef(element);
  elementRef.current = element;

  const refCallback = useCallbackRef<PanZoomRef>(
    React.useCallback(
      (node: SVGGElement | null) => {
        let disposeListener: IReactionDisposer | undefined;
        if (node) {
          // TODO fix any type
          const $svg = d3.select(node.ownerSVGElement) as any;
          if (node && node.ownerSVGElement) {
            node.ownerSVGElement.addEventListener('mousedown', propagatePanZoomMouseEvent);
            node.ownerSVGElement.addEventListener('click', propagatePanZoomMouseEvent);
          }
          const zoom = d3
            .zoom()
            .scaleExtent(zoomExtent)
            .on(
              'zoom',
              action(() => {
                elementRef.current.setPosition(
                  new Point(d3.event.transform.x, d3.event.transform.y),
                );
                elementRef.current.setScale(d3.event.transform.k);
              }),
            )
            .filter(() => {
              if (d3.event.ctrlKey || d3.event.button) {
                return false;
              }
              // only allow zoom from double clicking the graph directly
              if (d3.event.type === 'dblclick') {
                // check if target is not within a node or edge
                const svg = node.ownerSVGElement;
                let p: Node | null = d3.event.target;
                while (p && p !== svg) {
                  if (p instanceof Element) {
                    const kind = p.getAttribute(ATTR_DATA_KIND);
                    if (kind) {
                      if (kind !== ModelKind.graph) {
                        return false;
                      }
                      break;
                    }
                  }
                  p = p.parentNode;
                }
              }
              return true;
            });
          zoom($svg);

          // Update the d3 transform whenever the scale or bounds change.
          // This is kinda hacky because when d3 has already made the most recent transform update,
          // we listen for the model change, due to the above, only to update the d3 transform again.
          disposeListener = autorun(() => {
            const scale = elementRef.current.getScale();

            // update the min scaling value such that the user can zoom out to the new scale in case
            // it is smaller than the default zoom out scale
            zoom.scaleExtent([Math.min(scale, zoomExtent[0]), zoomExtent[1]]);
            const b = elementRef.current.getBounds();

            // update d3 zoom data directly
            // eslint-disable-next-line no-underscore-dangle
            Object.assign($svg.node().__zoom, {
              k: scale,
              x: b.x,
              y: b.y,
            });
          });

          // disable double click zoom
          // $svg.on('dblclick.zoom', null);
        }
        return () => {
          disposeListener && disposeListener();
          if (node) {
            // remove all zoom listeners
            d3.select(node.ownerSVGElement).on('.zoom', null);
            if (node.ownerSVGElement) {
              node.ownerSVGElement.removeEventListener('mousedown', propagatePanZoomMouseEvent);
              node.ownerSVGElement.removeEventListener('click', propagatePanZoomMouseEvent);
            }
          }
        };
      },
      [zoomExtent],
    ),
  );

  return refCallback;
};

export type WithPanZoomProps = {
  panZoomRef: PanZoomRef;
};

export const withPanZoom = (zoomExtent: [number, number] = ZOOM_EXTENT) => <
  P extends WithPanZoomProps
>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const Component: React.FC<Omit<P, keyof WithPanZoomProps>> = (props) => {
    const panZoomRef = usePanZoom(zoomExtent);
    return <WrappedComponent {...(props as any)} panZoomRef={panZoomRef} />;
  };
  return observer(Component);
};
