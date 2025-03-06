/**
 * Copied from exenv
 *
 * @private Not intended as public API and subject to change
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Returns the class name that will be applied to the outermost div rendered by the chart's container
 *
 * @private Not intended as public API and subject to change
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

/**
 * Get computed style value -- see https://github.com/apache/echarts/issues/19743
 *
 * Note that Victory uses the style property to apply CSS variables. However, ECharts' LineChart uses `fill` and
 * `stroke` attributes, which doesn't work with CSS variables. In addition, using CSS variables with Sankey
 * causes sever flashing during mouse hover. Therefore, we will obtain the CSS computed value from the DOM.
 *
 * @public
 * @beta
 */
export const getComputedStyleValue = (token: { name: string; value: string | number; var: string }) => {
  let result: any;

  if (canUseDOM) {
    result = window.getComputedStyle(document.body)?.getPropertyValue(token.name);

    if (result === '') {
      result = undefined;
    } else if (!isNaN(result) || result === 'true' || result === 'false') {
      result = JSON.parse(result);
    }
  }
  return result !== undefined ? result : token.value;
};
