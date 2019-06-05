/* eslint-disable camelcase */
import { global_FontFamily_sans_serif } from '@patternfly/react-tokens';

// TODO Replace values with PF css variable when available

// Typography
const TYPOGRAPHY_FONT_FAMILY = global_FontFamily_sans_serif.value;
const TYPOGRAPHY_LETTER_SPACING = 'normal';
const TYPOGRAPHY_FONT_SIZE = 14; // Value must be in pixles

// Labels
const LABEL_PROPS = {
  fontFamily: TYPOGRAPHY_FONT_FAMILY,
  fontSize: TYPOGRAPHY_FONT_SIZE,
  letterSpacing: TYPOGRAPHY_LETTER_SPACING,
  padding: 10, // Value must be in pixles
  stroke: 'transparent'
};
const LABEL_CENTERED_PROPS = {
  ...LABEL_PROPS,
  textAnchor: 'middle'
};

// Layout
const LAYOUT_PROPS = {
  padding: 50,
  height: 300,
  width: 450
};

// Strokes
const STROKE_LINE_CAP = 'round';
const STROKE_LINE_JOIN = 'round';

// Victory theme properties only
export const BaseTheme = {
  area: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fillOpacity: 0.4,
        strokeWidth: 2
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  axis: {
    ...LAYOUT_PROPS,
    style: {
      axis: {
        strokeWidth: 1,
        strokeLinecap: STROKE_LINE_CAP,
        strokeLinejoin: STROKE_LINE_JOIN
      },
      axisLabel: {
        ...LABEL_CENTERED_PROPS,
        padding: 100
      },
      grid: {
        fill: 'none',
        stroke: 'none', // Todo: Need to show for one axis only
        pointerEvents: 'painted'
      },
      ticks: {
        fill: 'transparent',
        size: 1,
        stroke: 'transparent'
      },
      tickLabels: LABEL_PROPS
    }
  },
  bar: {
    ...LAYOUT_PROPS,
    barWidth: 10,
    style: {
      data: {
        stroke: 'none'
      },
      labels: LABEL_PROPS
    }
  },
  boxplot: {
    ...LAYOUT_PROPS,
    style: {
      max: {
        padding: 8,
        strokeWidth: 1
      },
      maxLabels: LABEL_PROPS,
      median: {
        padding: 8,
        strokeWidth: 1
      },
      medianLabels: LABEL_PROPS,
      min: {
        padding: 8,
        strokeWidth: 1
      },
      minLabels: LABEL_PROPS,
      q1: {
        padding: 8
      },
      q1Labels: LABEL_PROPS,
      q3: {
        padding: 8
      },
      q3Labels: LABEL_PROPS
    },
    boxWidth: 20
  },
  candlestick: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        strokeWidth: 1
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  chart: {
    ...LAYOUT_PROPS,
    style: {
      parent: {
        border: `1px solid`
      }
    }
  },
  errorbar: {
    ...LAYOUT_PROPS,
    borderWidth: 8,
    style: {
      data: {
        fill: 'transparent',
        strokeWidth: 2
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  group: {
    ...LAYOUT_PROPS
  },
  legend: {
    gutter: 20,
    orientation: 'horizontal',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'square'
      },
      labels: LABEL_PROPS,
      title: {
        ...LABEL_PROPS,
        fontSize: TYPOGRAPHY_FONT_SIZE,
        padding: 2
      }
    }
  },
  line: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: 'transparent',
        strokeWidth: 2
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  pie: {
    padding: 8,
    style: {
      data: {
        padding: 8,
        // stroke: 'transparent',
        strokeWidth: 1
      },
      labels: {
        ...LABEL_PROPS,
        padding: 8
      }
    },
    height: 230,
    width: 230
  },
  scatter: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: LABEL_CENTERED_PROPS
    }
  },
  stack: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        strokeWidth: 1
      }
    }
  },
  tooltip: {
    cornerRadius: 0,
    flyoutStyle: {
      cornerRadius: 0,
      strokeWidth: 0,
      pointerEvents: 'none'
    },
    pointerLength: 10,
    pointerWidth: 20,
    style: {
      ...LABEL_CENTERED_PROPS,
      padding: 16,
      pointerEvents: 'none'
    }
  },
  voronoi: {
    ...LAYOUT_PROPS,
    style: {
      data: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 0
      },
      labels: {
        ...LABEL_CENTERED_PROPS,
        padding: 8,
        pointerEvents: 'none'
      },
      // Note: These properties override tooltip
      flyout: {
        strokeWidth: 1,
        pointerEvents: 'none'
      }
    }
  }
};
