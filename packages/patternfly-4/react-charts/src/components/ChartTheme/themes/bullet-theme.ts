/* eslint-disable camelcase */
import {
  chart_bullet_Height,
  chart_bullet_comparative_measure_Fill_Color,
  chart_bullet_comparative_measure_stroke_Color,
  chart_bullet_comparative_measure_stroke_Width,
  chart_bullet_comparative_measure_error_Fill_Color,
  chart_bullet_comparative_measure_error_stroke_Color,
  chart_bullet_comparative_measure_error_stroke_Width,
  chart_bullet_comparative_measure_warning_Fill_Color,
  chart_bullet_comparative_measure_warning_stroke_Color,
  chart_bullet_comparative_measure_warning_stroke_Width,
  chart_bullet_group_title_divider_Fill_Color,
  chart_bullet_group_title_divider_stroke_Color,
  chart_bullet_group_title_divider_stroke_Width,
  chart_color_black_100,
  chart_color_black_200,
  chart_color_black_300,
  chart_color_black_400,
  chart_color_black_500,
  chart_color_red_100,
  chart_color_red_200,
  chart_color_red_300,
  chart_color_red_400,
  chart_color_red_500,
  chart_global_layout_Padding
} from '@patternfly/react-tokens';

// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit#
// See https://www.patternfly.org/v3/pattern-library/data-visualization/bullet-chart/#design

// Bullet theme
export const BulletTheme = {
  chart: {
    height: chart_bullet_Height.value
  }
};

// Bullet comparative measure error theme
export const BulletComparativeErrorMeasureTheme = {
  bar: {
    height: chart_bullet_Height.value,
    style: {
      data: {
        fill: chart_bullet_comparative_measure_error_Fill_Color.value,
        stroke: chart_bullet_comparative_measure_error_stroke_Color.value,
        strokeWidth: chart_bullet_comparative_measure_error_stroke_Width.value
      }
    }
  }
};

// Bullet comparative measure theme
export const BulletComparativeMeasureTheme = {
  bar: {
    height: chart_bullet_Height.value,
    style: {
      data: {
        fill: chart_bullet_comparative_measure_Fill_Color.value,
        stroke: chart_bullet_comparative_measure_stroke_Color.value,
        strokeWidth: chart_bullet_comparative_measure_stroke_Width.value
      }
    }
  }
};

// Bullet comparative measure warning theme
export const BulletComparativeWarningMeasureTheme = {
  bar: {
    height: chart_bullet_Height.value,
    style: {
      data: {
        fill: chart_bullet_comparative_measure_warning_Fill_Color.value,
        stroke: chart_bullet_comparative_measure_warning_stroke_Color.value,
        strokeWidth: chart_bullet_comparative_measure_warning_stroke_Width.value
      }
    }
  }
};

// Bullet group title theme
export const BulletGroupTitleTheme = {
  chart: {
    padding: {
      bottom: 0,
      left: 0,
      right: 0,
      top: chart_global_layout_Padding.value
    }
  },
  line: {
    style: {
      data: {
        fill: chart_bullet_group_title_divider_Fill_Color.value,
        stroke: chart_bullet_group_title_divider_stroke_Color.value,
        strokeWidth: chart_bullet_group_title_divider_stroke_Width.value
      }
    }
  }
};

// Bullet primary dot measure theme
export const BulletPrimaryDotMeasureTheme = {
  group: {
    height: chart_bullet_Height.value
  }
};

// Bullet primary negative measure theme
export const BulletPrimaryNegativeMeasureTheme = {
  group: {
    colorScale: [
      chart_color_red_100.value,
      chart_color_red_200.value,
      chart_color_red_300.value,
      chart_color_red_400.value,
      chart_color_red_500.value
    ],
    height: chart_bullet_Height.value
  }
};

// Bullet primary segmented measure theme
export const BulletPrimarySegmentedMeasureTheme = {
  group: {
    height: chart_bullet_Height.value
  }
};

// Bullet qualitative range theme
export const BulletQualitativeRangeTheme = {
  group: {
    colorScale: [
      chart_color_black_100.value,
      chart_color_black_200.value,
      chart_color_black_300.value,
      chart_color_black_400.value,
      chart_color_black_500.value
    ],
    height: chart_bullet_Height.value
  }
};
