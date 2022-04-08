import * as React from 'react';
import SvgDropShadowFilter from '../svg/SvgDropShadowFilter';

export const NODE_SHADOW_FILTER_ID = 'NodeShadowsFilterId';
export const NODE_SHADOW_FILTER_ID_HOVER = 'NodeShadowsFilterId--hover';
export const NODE_SHADOW_FILTER_ID_DANGER = 'NodeShadowsFilterId--danger';

const NodeShadows: React.FunctionComponent = () => (
  <>
    <SvgDropShadowFilter id={NODE_SHADOW_FILTER_ID} />
    <SvgDropShadowFilter id={NODE_SHADOW_FILTER_ID_HOVER} dx={0} dy={3} stdDeviation={2} floodOpacity={0.2} />
    <SvgDropShadowFilter
      id={NODE_SHADOW_FILTER_ID_DANGER}
      dx={0}
      dy={0}
      stdDeviation={4}
      floodColor="#DB0000"
      floodOpacity={0.5}
    />
  </>
);

export default NodeShadows;
