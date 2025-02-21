import defaultsDeep from 'lodash/defaultsDeep';

import { ThemeDefinition } from '../../themes/Theme';

export const getLineSeries = (serie: any, theme: ThemeDefinition, isSkeleton: boolean) => {
  const defaults = {
    emphasis: {
      ...(isSkeleton ? { disabled: true } : { focus: 'adjacency' })
    },
    type: 'line'
  };
  return defaultsDeep(serie, defaults);
};
