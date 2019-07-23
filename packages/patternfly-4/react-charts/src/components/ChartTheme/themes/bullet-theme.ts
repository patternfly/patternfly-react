/* eslint-disable camelcase */
import {
  chart_bullet_comparative_measure_line_warning_stroke_Color,
  chart_bullet_comparative_measure_line_error_stroke_Color,
  chart_bullet_zero_line_stroke_Color,
  chart_bullet_zero_line_BorderWidth,
  chart_bullet_negative_primary_measure_stroke_Color,
  chart_color_black_100,
  chart_color_black_200,
  chart_color_black_300,
  chart_color_black_400,
  chart_color_black_500,
  global_danger_color_200
} from '@patternfly/react-tokens';

// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit#
// See https://www.patternfly.org/v3/pattern-library/data-visualization/bullet-chart/#design

// Bullet theme
export const BulletTheme = {
  chart: {
    height: 140
  }
};

// Bullet comparative measure error theme
export const BulletComparativeErrorMeasureTheme = {
  bar: {
    height: 140, // Todo: add pfcore var
    style: {
      data: {
        fill: chart_bullet_comparative_measure_line_error_stroke_Color.value, // Todo: add pfcore var
        stroke: chart_bullet_comparative_measure_line_error_stroke_Color.value,
        strokeWidth: 2 // chart_bullet_comparative_measure_line_error_BorderWidth.value // Todo: fix name
      }
    }
  }
};

// Bullet comparative measure theme
export const BulletComparativeMeasureTheme = {
  bar: {
    height: 140, // Todo: adjust chart_bullet_Height.value
    style: {
      data: {
        fill: chart_bullet_zero_line_stroke_Color.value, // Todo: add pfcore var
        stroke: chart_bullet_zero_line_stroke_Color.value,
        strokeWidth: chart_bullet_zero_line_BorderWidth.value // Todo: fix name
      }
    }
  }
};

// Bullet comparative measure warning theme
export const BulletComparativeWarningMeasureTheme = {
  bar: {
    height: 140, // Todo: adjust chart_bullet_Height.value
    style: {
      data: {
        fill: chart_bullet_comparative_measure_line_warning_stroke_Color.value, // Todo: add pfcore var
        stroke: chart_bullet_comparative_measure_line_warning_stroke_Color.value,
        strokeWidth: 2 // chart_bullet_comparative_measure_line_warning_BorderWidth.value // Todo: fix name
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
      top: 50
    }
  },
  line: {
    style: {
      data: {
        fill: '#ededed', // Todo: add pfcore var
        stroke: '#ededed', // Todo: add pfcore var
        strokeWidth: 2 // Todo: add pfcore var
      }
    }
  }
};

// Bullet primary dot measure theme
export const BulletPrimaryDotMeasureTheme = {
  group: {
    height: 140, // Todo: adjust chart_bullet_Height.value
  }
};

// Bullet primary negative measure theme
export const BulletPrimaryNegativeMeasureTheme = {
  group: {
    colorScale: [
      chart_bullet_negative_primary_measure_stroke_Color.value, // Todo: fix name
      global_danger_color_200.value // Todo: add red color family
    ],
    height: 140, // Todo: adjust chart_bullet_Height.value
  }
};

// Bullet primary segmented measure theme
export const BulletPrimarySegmentedMeasureTheme = {
  group: {
    height: 140, // Todo: adjust chart_bullet_Height.value
  }
};

// Bullet qualitative range theme
export const BulletQualitativeRangeTheme = {
  group: {
    colorScale: [
      chart_color_black_100.value, // Todo: pf-core color family should start with pf-color-black-200 (#EDEDED)
      chart_color_black_200.value,
      chart_color_black_300.value,
      chart_color_black_400.value,
      chart_color_black_500.value
    ],
    height: 140, // Todo: adjust chart_bullet_Height.value
  }
};
