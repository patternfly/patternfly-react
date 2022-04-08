import * as React from 'react';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { global_palette_black_1000 as globalBlack1000 } from '@patternfly/react-tokens/dist/js/global_palette_black_1000';
import { SVGDefs } from '../defs';

interface SvgDropShadowFilterProps {
  // The unique ID that identifies the filter.
  // It is also used to uniquely identify the def entry to prevent duplicates.
  id: string;
  dx?: number;
  dy?: number;
  stdDeviation?: number;
  floodOpacity?: number;
  floodColor?: string;
}

const SvgDropShadowFilter: React.FunctionComponent<SvgDropShadowFilterProps> = ({
  id,
  dx = 0,
  dy = 1,
  stdDeviation = 2,
  floodColor = globalBlack1000.value,
  floodOpacity = 0.2
}) => {
  if (window.navigator.userAgent.includes('Edge')) {
    // feDropShadow is not supported by Edge
    return (
      <SVGDefs id={id}>
        <filter
          id={id}
          x={`-${stdDeviation * 12.5}%`}
          y={`-${stdDeviation * 12.5}%`}
          width={`${100 + stdDeviation * 25}%`}
          height={`${100 + stdDeviation * 25}%`}
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation={stdDeviation} />
          <feOffset dx={dx} dy={dy} result="offsetblur" />
          <feFlood floodColor={floodColor} floodOpacity={floodOpacity} />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </SVGDefs>
    );
  }

  return (
    <SVGDefs id={id}>
      <filter
        id={id}
        x={`-${stdDeviation * 12.5}%`}
        y={`-${stdDeviation * 12.5}%`}
        width={`${100 + stdDeviation * 25}%`}
        height={`${100 + stdDeviation * 25}%`}
      >
        <feDropShadow dx={dx} dy={dy} stdDeviation={stdDeviation} floodColor={floodColor} floodOpacity={floodOpacity} />
      </filter>
    </SVGDefs>
  );
};

export default SvgDropShadowFilter;
