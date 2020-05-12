import * as React from 'react';
import { action } from 'mobx';
import { isNode, AnchorEnd } from '../types';
import ElementContext from '../utils/ElementContext';
import SVGAnchor from '../anchors/SVGAnchor';

export type SvgAnchorRef = (node: SVGElement | null) => void;

export const useSvgAnchor = (
  end: AnchorEnd = AnchorEnd.both,
  type: string = ''
): ((node: SVGElement | null) => void) => {
  const element = React.useContext(ElementContext);
  if (!isNode(element)) {
    throw new Error('useSvgAnchor must be used within the scope of a Node');
  }

  const setAnchorSvgRef = React.useCallback<SvgAnchorRef>(
    action((node: SVGElement | null) => {
      if (node) {
        const anchor = new SVGAnchor(element);
        anchor.setSVGElement(node);
        element.setAnchor(anchor, end, type);
      }
    }),
    [element, type, end]
  );

  return setAnchorSvgRef;
};

export interface WithSvgAnchorProps {
  svgAnchorRef: SvgAnchorRef;
}

export const withSvgAnchor = (end?: AnchorEnd, type?: string) => <P extends WithSvgAnchorProps>() => (
  WrappedComponent: React.ComponentType<P>
) => {
  const Component: React.FC<Omit<P, keyof WithSvgAnchorProps>> = props => {
    const svgAnchorRef = useSvgAnchor(end, type);
    return <WrappedComponent {...(props as any)} svgAnchorRef={svgAnchorRef} />;
  };
  return Component;
};
