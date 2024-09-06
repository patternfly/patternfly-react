import defaultsDeep from 'lodash/defaultsDeep';

import { ThemeDefinition } from '../../themes/Theme';

/**
 * Returns series properties for Line chart
 *
 * @param serie
 * @param theme
 * @param isSkeleton
 * @private
 */
export const getLineSeries = (serie: any, theme: ThemeDefinition, isSkeleton: boolean) => {
  const defaults = {
    emphasis: {
      ...(isSkeleton ? { disabled: true } : { focus: 'adjacency' })
    },
    showSymbol: false,
    type: 'line'
  };
  return defaultsDeep(serie, defaults);
};
