/* eslint-disable camelcase */
import chart_area_Opacity from '@patternfly/react-tokens/dist/esm/chart_area_Opacity';
import chart_global_label_Fill from '@patternfly/react-tokens/dist/esm/chart_global_label_Fill';
import { Helpers } from 'victory-core';

interface ChartInteractiveLegendInterface {
  // The names or groups of names associated with each data series
  // Example:
  // [ area-1, area-2, area-3 ]
  // [ [area-1, scatter-1], [area-2, scatter-2], [area-3, scatter-3] ]
  chartNames: [string | string[]];
  isDataHidden?: (data: any) => boolean; // Returns true if given data is hidden -- helpful when bar charts are hidden
  isHidden?: (index: number) => boolean; // Returns true if given index, associated with the legend item, is hidden
  legendName: string; // The name property associated with the legend
  onLegendClick?: (props: any) => void; // Called when legend item is clicked
}

interface ChartInteractiveLegendExtInterface extends ChartInteractiveLegendInterface {
  omitIndex?: number; // Used to omit child names when attaching events
  target?: 'data' | 'labels' | 'parent'; // Event target
}

/**
 * Returns child names for each series, except given ID index
 * @private
 */
const getChildNames = ({ chartNames, omitIndex }: ChartInteractiveLegendExtInterface) => {
  const result = [] as any;
  chartNames.forEach((chartName: any, index: number) => {
    if (index !== omitIndex) {
      if (Array.isArray(chartName)) {
        chartName.forEach(name => result.push(name));
      } else {
        result.push(chartName);
      }
    }
  });
  return result;
};

/**
 * Returns events for an interactive legend
 *
 * @param props See ChartInteractiveLegendInterface
 * @public
 */
export const getInteractiveLegendEvents = (props: ChartInteractiveLegendInterface) => [
  ...getInteractiveLegendTargetEvents({ ...props, target: 'data' }), // Legend symbols
  ...getInteractiveLegendTargetEvents({ ...props, target: 'labels' }) // Legend labels
];

// Returns legend items, except given ID index
const getInteractiveLegendItems = ({ chartNames, omitIndex }: ChartInteractiveLegendExtInterface) => {
  const result = [] as any;
  chartNames.map((_, index: number) => {
    if (index !== omitIndex) {
      result.push(index);
    }
  });
  return result;
};

/**
 * Returns styles for interactive legend items
 * @private
 */
export const getInteractiveLegendItemStyles = (hidden = false) =>
  !hidden
    ? {}
    : {
        labels: {
          fill: chart_global_label_Fill.var
        },
        symbol: {
          fill: chart_global_label_Fill.var,
          type: 'eyeSlash'
        }
      };

// Returns targeted events for legend 'data' or 'labels'
const getInteractiveLegendTargetEvents = ({
  chartNames,
  isDataHidden = () => false,
  isHidden = () => false,
  legendName,
  onLegendClick = () => null,
  target
}: ChartInteractiveLegendExtInterface) => {
  if (chartNames === undefined || legendName === undefined) {
    // eslint-disable-next-line no-console
    console.error('getInteractiveLegendTargetEvents:', 'requires chartNames and legendName to be specified');
    return [];
  }
  return chartNames.map((_, index) => {
    // Get IDs to attach events to, except the IDs associated with this event.
    //
    // For example, if the current event key is 0, we need IDs associated with events 1 and 2. If the current event
    // key is 1, we need IDs associated with events 0 and 2. And so on...
    const childNames = getChildNames({ chartNames, legendName, omitIndex: index });
    const legendItems = getInteractiveLegendItems({ chartNames, legendName, omitIndex: index });

    return {
      childName: legendName,
      target,
      eventKey: index,
      eventHandlers: {
        onClick: () => [
          {
            // Hide each data series individually
            target: 'data',
            mutation: (props: any) => {
              onLegendClick(props);
              return null;
            }
          }
        ],
        onMouseOver: () =>
          isHidden(index)
            ? null
            : [
                {
                  // Mute all data series, except the data associated with this event
                  childName: childNames,
                  target: 'data',
                  eventKey: 'all',
                  mutation: (props: any) =>
                    isDataHidden(props.data)
                      ? null
                      : ({
                          // Skip if hidden
                          style:
                            props.slice !== undefined // Support for pie chart
                              ? {
                                  ...Helpers.evaluateStyle(props.style, props),
                                  ...(index !== props.slice.index && { opacity: chart_area_Opacity.value }),
                                  ...(props.data[props.slice.index]._fill && {
                                    fill: props.data[props.slice.index]._fill
                                  })
                                }
                              : {
                                  ...Helpers.evaluateStyle(props.style, props),
                                  opacity: chart_area_Opacity.value
                                }
                        } as any)
                },
                {
                  // Mute all legend item symbols, except the symbol associated with this event
                  childName: legendName,
                  target: 'data',
                  eventKey: legendItems,
                  mutation: (props: any) =>
                    isHidden(props.index)
                      ? null
                      : {
                          // Skip if hidden
                          style: {
                            ...Helpers.evaluateStyle(props.style, props),
                            opacity: chart_area_Opacity.value
                          }
                        }
                },
                {
                  // Mute all legend item labels, except the label associated with this event
                  childName: legendName,
                  target: 'labels',
                  eventKey: legendItems,
                  mutation: (props: any) => {
                    const column = props.datum && props.datum.column ? props.datum.column : 0;
                    return isHidden(column)
                      ? null
                      : {
                          // Skip if hidden
                          style: {
                            ...Helpers.evaluateStyle(props.style, props),
                            opacity: chart_area_Opacity.value
                          }
                        };
                  }
                }
              ],
        onMouseOut: () => [
          {
            // Restore all data series associated with this event
            childName: 'all',
            target: 'data',
            eventKey: 'all',
            mutation: () => null as any
          },
          {
            // Restore all legend item symbols associated with this event
            childName: legendName,
            target: 'data',
            eventKey: legendItems,
            mutation: () => null as any
          },
          {
            // Restore all legend item labels associated with this event
            childName: legendName,
            target: 'labels',
            eventKey: legendItems,
            mutation: () => null as any
          }
        ]
      }
    };
  });
};
