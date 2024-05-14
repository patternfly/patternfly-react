/* eslint-disable camelcase */
import chart_donut_threshold_second_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_second_Color';
import chart_donut_threshold_third_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_third_Color';
import chart_donut_threshold_first_Color from '@patternfly/react-tokens/dist/esm/chart_donut_threshold_first_Color';
import chart_axis_grid_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_grid_stroke_Color';
import chart_axis_tick_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_axis_tick_stroke_Color';
import chart_bullet_comparative_measure_error_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_Fill_Color';
import chart_bullet_comparative_measure_error_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_stroke_Color';
import chart_bullet_Height from '@patternfly/react-tokens/dist/esm/chart_bullet_Height';
import chart_bullet_comparative_measure_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_Fill_Color';
import chart_bullet_comparative_measure_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_stroke_Color';
import chart_bullet_comparative_measure_warning_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_Fill_Color';
import chart_bullet_comparative_measure_warning_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_stroke_Color';
import chart_bullet_group_title_divider_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_group_title_divider_Fill_Color';
import chart_bullet_group_title_divider_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_group_title_divider_stroke_Color';
import chart_bullet_negative_measure_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_100';
import chart_bullet_negative_measure_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_200';
import chart_bullet_negative_measure_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_300';
import chart_bullet_negative_measure_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_400';
import chart_bullet_negative_measure_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_500';
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';
import chart_bullet_qualitative_range_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_200';
import chart_bullet_qualitative_range_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_300';
import chart_bullet_qualitative_range_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_400';
import chart_bullet_qualitative_range_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_500';
import { ChartComponentThemeDefinition, ChartThemeDefinition } from '../ChartTheme';

interface ColorThemeInterface {
  COLOR_SCALE: string[];
}

/**
 * Victory color theme
 * @private
 */
export const ColorTheme = (props: ColorThemeInterface): ChartThemeDefinition => {
  const { COLOR_SCALE } = props;

  return {
    area: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        }
      }
    },
    axis: {
      colorScale: COLOR_SCALE
    },
    bar: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          fill: COLOR_SCALE[0]
        }
      }
    },
    boxplot: {
      colorScale: COLOR_SCALE,
      style: {
        q1: {
          fill: COLOR_SCALE[0]
        },
        q3: {
          fill: COLOR_SCALE[0]
        }
      }
    },
    candlestick: {
      colorScale: COLOR_SCALE
    },
    chart: {
      colorScale: COLOR_SCALE
    },
    errorbar: {
      colorScale: COLOR_SCALE
    },
    group: {
      colorScale: COLOR_SCALE
    },
    legend: {
      colorScale: COLOR_SCALE
    },
    line: {
      colorScale: COLOR_SCALE,
      style: {
        data: {
          stroke: COLOR_SCALE[0]
        }
      }
    },
    pie: {
      colorScale: COLOR_SCALE
    },
    scatter: {
      colorScale: COLOR_SCALE
    },
    stack: {
      colorScale: COLOR_SCALE
    },
    voronoi: {
      colorScale: COLOR_SCALE
    }
  };
};

/**
 * Component color theme
 * @private
 * @beta
 */
export const ColorComponentTheme = (props: ColorThemeInterface): ChartComponentThemeDefinition => {
  const { COLOR_SCALE } = props;

  return {
    axis: {
      axis: {
        style: {
          grid: {
            stroke: chart_axis_grid_stroke_Color.var
          },
          ticks: {
            stroke: chart_axis_tick_stroke_Color.var
          }
        }
      }
    },
    bullet: {
      // TBD...
    },
    bulletComparativeErrorMeasure: {
      bar: {
        style: {
          data: {
            fill: chart_bullet_comparative_measure_error_Fill_Color.var,
            stroke: chart_bullet_comparative_measure_error_stroke_Color.var
          }
        }
      }
    },
    bulletComparativeMeasure: {
      bar: {
        height: chart_bullet_Height.value,
        style: {
          data: {
            fill: chart_bullet_comparative_measure_Fill_Color.var,
            stroke: chart_bullet_comparative_measure_stroke_Color.var
          }
        }
      }
    },
    bulletComparativeWarningMeasure: {
      bar: {
        height: chart_bullet_Height.value,
        style: {
          data: {
            fill: chart_bullet_comparative_measure_warning_Fill_Color.var,
            stroke: chart_bullet_comparative_measure_warning_stroke_Color.var
          }
        }
      }
    },
    bulletGroupTitle: {
      line: {
        style: {
          data: {
            fill: chart_bullet_group_title_divider_Fill_Color.var,
            stroke: chart_bullet_group_title_divider_stroke_Color.var
          }
        }
      }
    },
    bulletPrimaryDotMeasure: {
      // TBD...
    },
    bulletPrimarySegmentedMeasure: {
      // TBD...
    },
    bulletQualitativeRange: {
      group: {
        colorScale: [
          chart_bullet_qualitative_range_ColorScale_100.var,
          chart_bullet_qualitative_range_ColorScale_200.var,
          chart_bullet_qualitative_range_ColorScale_300.var,
          chart_bullet_qualitative_range_ColorScale_400.var,
          chart_bullet_qualitative_range_ColorScale_500.var
        ]
      }
    },
    bulletPrimaryNegativeMeasure: {
      group: {
        colorScale: [
          chart_bullet_negative_measure_ColorScale_100.var,
          chart_bullet_negative_measure_ColorScale_200.var,
          chart_bullet_negative_measure_ColorScale_300.var,
          chart_bullet_negative_measure_ColorScale_400.var,
          chart_bullet_negative_measure_ColorScale_500.var
        ]
      }
    },
    donut: {
      // TBD...
    },
    donutThresholdDynamic: {
      legend: {
        // Merge just the first color of dynamic (blue, green, etc.) with static (grey) for expected colorScale
        colorScale: [COLOR_SCALE[0], chart_donut_threshold_second_Color.var, chart_donut_threshold_third_Color.var]
      },
      // Merge the threshold colors in case users want to show the unused data
      pie: {
        colorScale: [
          COLOR_SCALE[0],
          chart_donut_threshold_first_Color.var,
          chart_donut_threshold_second_Color.var,
          chart_donut_threshold_third_Color.var
        ]
      }
    },
    donutThresholdStatic: {
      pie: {
        colorScale: [
          chart_donut_threshold_first_Color.var,
          chart_donut_threshold_second_Color.var,
          chart_donut_threshold_third_Color.var
        ]
      }
    },
    donutUtilization: {
      legend: {
        colorScale: [
          COLOR_SCALE[0],
          chart_donut_threshold_first_Color.var,
          chart_donut_threshold_second_Color.var,
          chart_donut_threshold_third_Color.var
        ]
      },
      pie: {
        colorScale: [COLOR_SCALE[0], chart_donut_threshold_first_Color.var]
      }
    },
    label: {
      // TBD...
    },
    threshold: {
      // TBD...
    }
  };
};
