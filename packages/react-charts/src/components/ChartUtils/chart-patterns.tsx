import * as React from 'react';
import uniqueId from 'lodash/uniqueId';

// @beta
interface PatternPropsInterface {
  children?: any;
  colorScale?: any;
  hasPatterns?: boolean | boolean[];
  isPatternDefs?: boolean;
  offset?: number;
  patternId?: string;
  patternScale?: string[];
  patternUnshiftIndex?: number;
  themeColorScale?: string[];
}

/**
 * Patterns were pulled from v3.0.3 of the script below, which uses the MIT license.
 * See https://github.com/highcharts/pattern-fill/blob/master/pattern-fill-v2.js
 * @private
 */
const patterns: any = [
  // Set 1
  {
    // Left diagonal lines
    d: 'M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Right diagonal lines
    d: 'M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Vertical offset line
    d: 'M 2 0 L 2 5 M 4 0 L 4 5',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Horizontal lines
    d: 'M 0 2 L 5 2 M 0 4 L 5 4',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Vertical wave
    d: 'M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },

  // Set 2
  {
    // Horizontal wave
    d: 'M 0 0 L 5 10 L 10 0',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Squares
    d: 'M 3 3 L 8 3 L 8 8 L 3 8 Z',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Circles
    d: 'M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Left diagonal lines (thin)
    d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Right diagonal lines (thin)
    d: 'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },

  // Set 3
  {
    // Diamonds
    d: 'M 2 5 L 5 2 L 8 5 L 5 8 Z',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Thin vertical lines
    d: 'M 3 0 L 3 10 M 8 0 L 8 10',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Left zig zag
    d: 'M 10 3 L 5 3 L 5 0 M 5 10 L 5 7 L 0 7',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  },
  {
    // Thin horizontal lines
    d: 'M 0 3 L 10 3 M 0 8 L 10 8',
    height: 5,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    patternTransform: 'scale(1.4 1.4)',
    strokeWidth: 2,
    width: 5,
    x: 0,
    y: 0
  },
  {
    // Right zig zag
    d: 'M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7',
    height: 10,
    fill: 'none',
    patternContentUnits: 'userSpaceOnUse',
    patternUnits: 'userSpaceOnUse',
    strokeWidth: 2,
    width: 10,
    x: 0,
    y: 0
  }
];

/**
 * Helper function to return a pattern ID
 * @private
 */
export const getPatternId = () => uniqueId('pf-pattern');

/**
 * Helper function to return pattern defs ID
 * @private
 */
export const getPatternDefsId = (prefix: string, index: number) => {
  const id = `${prefix}:${index}`;
  return id;
};

/**
 * Helper function to return pattern defs
 * @private
 */
export const getPatternDefs = ({
  colorScale,
  offset = 0,
  patternId,
  patternUnshiftIndex = 0
}: PatternPropsInterface) => {
  const defaultPatterns = [...patterns];

  // Move the given pattern index to top of scale, used to sync patterns with ChartDonutThreshold
  if (patternUnshiftIndex > 0 && patternUnshiftIndex < defaultPatterns.length) {
    defaultPatterns.unshift(defaultPatterns.splice(patternUnshiftIndex, 1)[0]);
  }

  // This is wrapped in an empty tag so Victory does not apply child props to defs
  const defs = (
    <React.Fragment key={`defs`}>
      <defs>
        {colorScale.map((color: string, index: number) => {
          const { d, fill, stroke = color, strokeWidth, ...rest } = defaultPatterns[
            (index + offset) % defaultPatterns.length
          ];
          const id = getPatternDefsId(patternId, index);
          return (
            <pattern id={id} key={id} {...rest}>
              <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} />
            </pattern>
          );
        })}
      </defs>
    </React.Fragment>
  );
  return defs;
};

/**
 * Helper function to return pattern IDs to use as color scale
 * @private
 */
export const getPatternScale = (colorScale: string[], patternId: string) =>
  colorScale.map((val: any, index: number) => `url(#${getPatternDefsId(patternId, index)})`);

/**
 * Helper function to return default color scale
 * @private
 */
export const getDefaultColorScale = (colorScale: string[], themeColorScale: string[]) => {
  const result: string[] = [];
  const colors = colorScale ? colorScale : themeColorScale;

  colors.forEach(val => result.push(val));
  return result;
};

/**
 * Merge pattern IDs with `data.fill` property, used by interactive pie chart legend
 * @private
 */
export const getDefaultData = (data: any, patternScale: string[]) => {
  if (!patternScale) {
    return data;
  }
  return data.map((datum: any, index: number) => {
    const pattern = patternScale[index % patternScale.length];
    return {
      ...(pattern && { _fill: pattern }),
      ...datum
    };
  });
};

/**
 * Helper function to return default pattern scale
 * @private
 */
export const getDefaultPatternScale = ({ colorScale, patternId, patternScale }: PatternPropsInterface) => {
  if (patternScale) {
    return patternScale;
  }
  const defaultPatternScale = getPatternScale(colorScale, patternId);
  return defaultPatternScale && defaultPatternScale.length > 0 ? defaultPatternScale : undefined;
};

/**
 * Helper function to return default pattern props
 * @private
 */
export const useDefaultPatternProps = ({
  colorScale,
  hasPatterns,
  patternScale,
  themeColorScale
}: PatternPropsInterface) => {
  const defaultColorScale = getDefaultColorScale(colorScale, themeColorScale);
  let defaultPatternScale = patternScale;
  let isPatternDefs = !patternScale && hasPatterns !== undefined;
  const patternId = React.useMemo(() => (isPatternDefs ? getPatternId() : undefined), [isPatternDefs]);

  if (isPatternDefs) {
    defaultPatternScale = getDefaultPatternScale({
      colorScale: defaultColorScale,
      patternId,
      patternScale
    });
  }

  // Initialize pattern visibility
  if (Array.isArray(hasPatterns)) {
    for (let i = 0; i < defaultPatternScale.length; i++) {
      if (!(i < hasPatterns.length && hasPatterns[i])) {
        defaultPatternScale[i] = null;
      }
    }
  } else if (hasPatterns === false) {
    defaultPatternScale = undefined;
    isPatternDefs = false;
  }
  return { defaultColorScale, defaultPatternScale, isPatternDefs, patternId };
};

/**
 * Helper function to render children with patterns
 * @private
 */
export const renderChildrenWithPatterns = ({ children, patternScale }: PatternPropsInterface) =>
  React.Children.toArray(children).map((child, index) => {
    if (React.isValidElement(child)) {
      const { ...childProps } = child.props;
      const style = childProps.style ? { ...childProps.style } : {};

      // Merge pattern IDs with `style.data.fill` property
      if (patternScale) {
        const pattern = patternScale[index % patternScale.length];
        style.data = {
          ...(pattern && { fill: pattern }),
          ...style.data
        };
      }
      const _child = React.cloneElement(child, {
        ...(patternScale && { patternScale }),
        ...childProps,
        style // Override child props
      });
      return _child;
    }
    return child;
  });
