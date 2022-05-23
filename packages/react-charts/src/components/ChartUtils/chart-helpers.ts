// Misc util functions

interface ChartClassNameInterface {
  className?: string;
}

/**
 * Copied from exenv
 * @private
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Returns the class name that will be applied to the outer-most div rendered by the chart's container
 * @private
 */
export const getClassName = ({ className }: ChartClassNameInterface) => {
  let cleanClassName;

  // Workaround for VictoryContainer class name
  if (className) {
    cleanClassName = className
      .replace(/VictoryContainer/g, '')
      .replace(/pf-c-chart/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return cleanClassName && cleanClassName.length ? `pf-c-chart ${cleanClassName}` : 'pf-c-chart';
};
