import defaultsDeep from 'lodash/defaultsDeep';

import { ThemeDefinition } from '../../themes/Theme';

/**
 * Returns series properties for Sankey chart
 *
 * @param serie
 * @param theme
 * @param isSkeleton
 * @private
 */
export const getSankeySeries = (serie: any, theme: ThemeDefinition, isSkeleton: boolean) => {
  const defaults = {
    data: serie.data.map((datum: any, index: number) => ({
      itemStyle: {
        color: theme?.color[index % theme?.color.length]
      }
    })),
    ...(isSkeleton ? { draggable: false } : {}),
    emphasis: {
      ...(isSkeleton ? { disabled: true } : { focus: 'adjacency' })
    },
    layout: 'none',
    lineStyle: {
      color: 'source',
      opacity: 0.6
    },
    type: 'sankey'
  };
  return defaultsDeep(serie, defaults);
};
