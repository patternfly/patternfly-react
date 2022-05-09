/* eslint-disable camelcase */
import chart_bullet_Height from '@patternfly/react-tokens/dist/esm/chart_bullet_Height';
import chart_bullet_comparative_measure_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_Fill_Color';
import chart_bullet_comparative_measure_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_stroke_Color';
import chart_bullet_comparative_measure_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_stroke_Width';
import chart_bullet_comparative_measure_error_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_Fill_Color';
import chart_bullet_comparative_measure_error_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_stroke_Color';
import chart_bullet_comparative_measure_error_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_error_stroke_Width';
import chart_bullet_comparative_measure_warning_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_Fill_Color';
import chart_bullet_comparative_measure_warning_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_stroke_Color';
import chart_bullet_comparative_measure_warning_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_comparative_measure_warning_stroke_Width';
import chart_bullet_group_title_divider_Fill_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_group_title_divider_Fill_Color';
import chart_bullet_group_title_divider_stroke_Color from '@patternfly/react-tokens/dist/esm/chart_bullet_group_title_divider_stroke_Color';
import chart_bullet_group_title_divider_stroke_Width from '@patternfly/react-tokens/dist/esm/chart_bullet_group_title_divider_stroke_Width';
import chart_bullet_qualitative_range_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_100';
import chart_bullet_qualitative_range_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_200';
import chart_bullet_qualitative_range_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_300';
import chart_bullet_qualitative_range_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_400';
import chart_bullet_qualitative_range_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_qualitative_range_ColorScale_500';
import chart_bullet_negative_measure_ColorScale_100 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_100';
import chart_bullet_negative_measure_ColorScale_200 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_200';
import chart_bullet_negative_measure_ColorScale_300 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_300';
import chart_bullet_negative_measure_ColorScale_400 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_400';
import chart_bullet_negative_measure_ColorScale_500 from '@patternfly/react-tokens/dist/esm/chart_bullet_negative_measure_ColorScale_500';
import chart_global_layout_Padding from '@patternfly/react-tokens/dist/esm/chart_global_layout_Padding';

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
        fill: chart_bullet_comparative_measure_error_Fill_Color.var,
        stroke: chart_bullet_comparative_measure_error_stroke_Color.var,
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
        fill: chart_bullet_comparative_measure_Fill_Color.var,
        stroke: chart_bullet_comparative_measure_stroke_Color.var,
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
        fill: chart_bullet_comparative_measure_warning_Fill_Color.var,
        stroke: chart_bullet_comparative_measure_warning_stroke_Color.var,
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
    } as any // Victory incorrectly typed ThemeBaseProps.padding as number instead of PaddingProps
  },
  line: {
    style: {
      data: {
        fill: chart_bullet_group_title_divider_Fill_Color.var,
        stroke: chart_bullet_group_title_divider_stroke_Color.var,
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
      chart_bullet_negative_measure_ColorScale_100.var,
      chart_bullet_negative_measure_ColorScale_200.var,
      chart_bullet_negative_measure_ColorScale_300.var,
      chart_bullet_negative_measure_ColorScale_400.var,
      chart_bullet_negative_measure_ColorScale_500.var
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
      chart_bullet_qualitative_range_ColorScale_100.var,
      chart_bullet_qualitative_range_ColorScale_200.var,
      chart_bullet_qualitative_range_ColorScale_300.var,
      chart_bullet_qualitative_range_ColorScale_400.var,
      chart_bullet_qualitative_range_ColorScale_500.var
    ],
    height: chart_bullet_Height.value
  }
};
