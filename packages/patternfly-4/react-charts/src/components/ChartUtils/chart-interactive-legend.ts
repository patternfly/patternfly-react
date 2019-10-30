import { chart_area_Opacity, chart_color_black_500 } from '@patternfly/react-tokens';

interface ChartInteractiveLegendInterface {
  // The names or groups of names associated with each data series
  // Example:
  // [ area-1, area-2, area-3 ]
  // [ [area-1, scatter-1], [area-2, scatter-2], [area-3, scatter-3] ]
  chartNames: [string | string[]];
  isHidden?: (index: number) => boolean; // Returns true if given index, associated with the legend item, is hidden
  legendName: string; // The name property associated with the legend
  onLegendClick?: (props: any) => void; // Called when legend item is clicked
}

interface ChartInteractiveLegendExtInterface extends ChartInteractiveLegendInterface {
  omitIndex?: number; // Used to omit child names when attaching events
  target?: 'data' | 'labels'; // Event target
}

// Returns child names for each series, except given ID index
const getChildNames = ({ chartNames, omitIndex }: ChartInteractiveLegendExtInterface) => {
  const result = [] as any;
  chartNames.map((chartName: any, index: number) => {
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

// Returns events for an interactive legend
export const getInteractiveLegendEvents = (props: ChartInteractiveLegendInterface) => {
  return [
    ...getInteractiveLegendTargetEvents({ ...props, target: 'data' }),
    ...getInteractiveLegendTargetEvents({ ...props, target: 'labels' })
  ];
};

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

// Returns styles for interactive legend items
export const getInteractiveLegendItemStyles = (hidden: boolean = false) => {
  return !hidden ? {} : {
    labels: {
      fill: chart_color_black_500.value
    },
    symbol: {
      fill: chart_color_black_500.value,
      type: 'eyeSlash'
    }
  };
};

// Returns targeted events for legend 'data' or 'labels'
const getInteractiveLegendTargetEvents = ({
  chartNames,
  isHidden = (index) => false,
  legendName,
  onLegendClick = (props) => null,
  target
}: ChartInteractiveLegendExtInterface) => {
  if (chartNames === undefined || legendName === undefined) {
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
        onClick: () => {
          return [
            {
              // Hide each data series individually
              target: 'data',
              mutation: (props: any) => {
                onLegendClick(props);
                return null;
              }
            }
          ];
        },
        onMouseOver: () => {
          return isHidden(index) ? null : [
            {
              // Mute all data series, except the data associated with this event
              childName: childNames,
              target: 'data',
              eventKey: 'all',
              mutation: (props: any) => {
                return {
                  style: {
                    ...props.style,
                    opacity: chart_area_Opacity.value
                  }
                } as any;
              }
            }, {
              // Mute all legend item symbols, except the symbol associated with this event
              childName: 'legend',
              target: 'data',
              eventKey: legendItems,
              mutation: (props: any) => {
                return isHidden(props.index) ? null : { // Skip if hidden
                  style: {
                    ...props.style,
                    opacity: chart_area_Opacity.value
                  }
                };
              }
            }, {
              // Mute all legend item labels, except the label associated with this event
              childName: 'legend',
              target: 'labels',
              eventKey: legendItems,
              mutation: (props: any) => {
                const column = props.datum && props.datum.column ? props.datum.column : 0;
                return isHidden(column) ? null : { // Skip if hidden
                  style: {
                    ...props.style,
                    opacity: chart_area_Opacity.value
                  }
                };
              }
            }
          ];
        },
        onMouseOut: () => {
          return [
            {
              // Restore all data series associated with this event
              childName: childNames,
              target: 'data',
              eventKey: 'all',
              mutation: () => null as any
            }, {
              // Restore all legend item symbols associated with this event
              childName: 'legend',
              target: 'data',
              eventKey: legendItems,
              mutation: () => null as any
            }, {
              // Restore all legend item labels associated with this event
              childName: 'legend',
              target: 'labels',
              eventKey: legendItems,
              mutation: () => null as any
            }
          ];
        }
      }
    };
  });
};
