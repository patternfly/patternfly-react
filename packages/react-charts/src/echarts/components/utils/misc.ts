/**
 * Copied from exenv
 * @private
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Returns the class name that will be applied to the outermost div rendered by the chart's container
 * @private
 */
export const getClassName = (className: string) => {
  let cleanClassName;

  // Cleanup class name
  if (className) {
    cleanClassName = className
      .replace(/pf-v6-c-chart/g, '')
      .replace(/pf-c-chart/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return cleanClassName?.length ? `pf-v6-c-chart ${cleanClassName}` : 'pf-v6-c-chart';
};
