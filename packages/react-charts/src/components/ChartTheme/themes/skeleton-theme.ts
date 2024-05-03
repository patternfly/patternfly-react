/* eslint-disable camelcase */
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';

const DEFAULT_COLOR = chart_bullet_qualitative_range_ColorScale_100.var;

// Labels
const LABEL_PROPS = {
  fill: 'transparent',
  stroke: 'transparent'
};
const LABEL_CENTERED_PROPS = {
  ...LABEL_PROPS
};

/**
 * Victory theme properties only
 * @private
 */
export const SkeletonTheme = {
  skeleton: {
    backgroundStyle: {
      fill: DEFAULT_COLOR
    },
    style: LABEL_CENTERED_PROPS
  },
  area: {
    style: {
      data: {
        fill: DEFAULT_COLOR
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  axis: {
    style: {
      axis: {
        fill: 'transparent',
        stroke: DEFAULT_COLOR
      },
      axisLabel: {
        ...LABEL_CENTERED_PROPS,
        fill: DEFAULT_COLOR,
        stroke: 'transparent'
      },
      grid: {
        fill: 'transparent',
        stroke: 'transparent'
      },
      ticks: {
        fill: 'transparent',
        stroke: DEFAULT_COLOR
      },
      tickLabels: {
        ...LABEL_PROPS,
        fill: 'transparent'
      }
    }
  },
  bar: {
    style: {
      data: {
        fill: DEFAULT_COLOR,
        stroke: DEFAULT_COLOR
      },
      labels: LABEL_PROPS
    }
  },
  boxplot: {
    style: {
      max: {
        stroke: DEFAULT_COLOR
      },
      maxLabels: LABEL_PROPS,
      median: {
        stroke: DEFAULT_COLOR
      },
      medianLabels: LABEL_PROPS,
      min: {
        stroke: DEFAULT_COLOR
      },
      minLabels: LABEL_PROPS,
      q1: {
        fill: DEFAULT_COLOR
      },
      q1Labels: LABEL_PROPS,
      q3: {
        fill: DEFAULT_COLOR
      },
      q3Labels: LABEL_PROPS
    }
  },
  candlestick: {
    style: {
      data: {
        stroke: DEFAULT_COLOR
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  chart: {
    // TBD...
  },
  errorbar: {
    style: {
      data: {
        fill: 'transparent',
        stroke: DEFAULT_COLOR
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  group: {
    // TBD...
  },
  legend: {
    style: {
      labels: LABEL_PROPS,
      title: {
        ...LABEL_PROPS
      }
    }
  },
  line: {
    style: {
      data: {
        fill: 'transparent',
        stroke: DEFAULT_COLOR
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  pie: {
    style: {
      data: {
        stroke: 'transparent'
      },
      labels: {
        ...LABEL_PROPS
      }
    }
  },
  scatter: {
    style: {
      data: {
        fill: DEFAULT_COLOR,
        stroke: 'transparent'
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  stack: {
    // TBD...
  },
  tooltip: {
    flyoutStyle: {
      fill: 'transparent', // background
      stroke: 'transparent' // border
    },
    style: {
      fill: 'transparent' // text
    }
  },
  voronoi: {
    style: {
      data: {
        fill: DEFAULT_COLOR,
        stroke: DEFAULT_COLOR
      },
      labels: {
        ...LABEL_CENTERED_PROPS,
        fill: 'transparent' // text
      },
      // Note: These properties override tooltip
      flyout: {
        fill: 'transparent', // background
        stroke: 'transparent' // border
      }
    }
  }
};
