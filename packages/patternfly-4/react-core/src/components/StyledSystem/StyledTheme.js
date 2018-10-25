import {
  global_spacer_xs,
  global_spacer_sm,
  global_spacer_md,
  global_spacer_lg,
  global_spacer_xl,
  global_spacer_2xl,
  global_spacer_3xl,
  global_gutter,
  global_golden_ratio,
  global_FontSize_4xl,
  global_FontSize_3xl,
  global_FontSize_2xl,
  global_FontSize_xl,
  global_FontSize_lg,
  global_FontSize_md,
  global_FontSize_sm,
  global_FontSize_xs,
  global_FontFamily_sans_serif,
  global_FontFamily_monospace,
  global_FontWeight_light,
  global_FontWeight_normal,
  global_FontWeight_semi_bold,
  global_FontWeight_bold,
  global_link_FontWeight,
  global_LineHeight_sm,
  global_LineHeight_md,
  global_BorderWidth_sm,
  global_BorderWidth_md,
  global_BorderWidth_lg,
  global_BorderRadius_sm,
  global_BorderRadius_lg,
  global_BoxShadow_sm,
  global_BoxShadow_sm_left,
  global_BoxShadow_sm_right,
  global_BoxShadow_sm_bottom,
  global_BoxShadow_sm_top,
  global_BoxShadow_md,
  global_BoxShadow_md_left,
  global_BoxShadow_md_right,
  global_BoxShadow_md_bottom,
  global_BoxShadow_md_top,
  global_BoxShadow_lg,
  global_BoxShadow_lg_left,
  global_BoxShadow_lg_right,
  global_BoxShadow_lg_bottom,
  global_BoxShadow_lg_top,
  global_BoxShadow_inset,
  global_breakpoint_sm,
  global_breakpoint_md,
  global_breakpoint_lg,
  global_breakpoint_xl,
  global_BackgroundColor_100,
  global_BackgroundColor_200,
  global_BackgroundColor_300,
  global_BackgroundColor_light_100,
  global_BackgroundColor_light_200,
  global_BackgroundColor_light_300,
  global_BackgroundColor_dark_100,
  global_BackgroundColor_dark_200,
  global_BackgroundColor_dark_transparent_100,
  global_BackgroundColor_dark_transparent_200,
  global_Color_100,
  global_Color_200,
  global_Color_light_100,
  global_Color_light_200,
  global_Color_dark_100,
  global_Color_dark_200,
  global_active_color_100,
  global_active_color_200,
  global_active_color_300,
  global_disabled_color_100,
  global_disabled_color_200,
  global_primary_color_100,
  global_primary_color_200,
  global_primary_color_light_100,
  global_primary_color_dark_100,
  global_secondary_color_100,
  global_success_color_100,
  global_success_color_200,
  global_info_color_100,
  global_info_color_200,
  global_warning_color_100,
  global_warning_color_200,
  global_danger_color_100,
  global_danger_color_200,
  global_danger_color_300,
  global_link_Color,
  global_link_Color_hover,
  global_link_Color_light_hover,
  global_BorderColor,
  global_BorderColor_light,
  global_BorderColor_light_200,
  global_BorderColor_dark,
  global_ZIndex_xs,
  global_ZIndex_sm,
  global_ZIndex_md,
  global_ZIndex_lg,
  global_ZIndex_xl,
  global_ZIndex_2xl
} from '@patternfly/react-tokens';

/**
 * Maps to keys or array positions in the StyledTheme
 */
export const StyledConstants = {
  space: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    neg_sm: -1,
    neg_md: -2,
    neg_lg: -3,
    neg_xl: -4,
    neg_xxl: -5,
    neg_xxxl: -6,
    // gutter does not fit into the spacing scale theme, add values directly
    gutter: global_gutter.value,
    neg_gutter: `-${global_gutter.value}`
  },
  fonts: {
    sans_serif: 'sans_serif',
    monospace: 'monospace'
  },
  fontWeights: {
    light: 'light',
    normal: 'normal',
    semi_bold: 'semi_bold',
    bold: 'bold',
    link: 'link'
  },
  lineHeights: {
    sm: 'sm',
    md: 'md'
  },
  fontSizes: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
    xxxl: 6,
    xxxxl: 7
  },
  radii: {
    sm: 'sm',
    lg: 'lg'
  },
  borders: {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  },
  colors: {
    bg_100: 'bg_100',
    bg_200: 'bg_200',
    bg_300: 'bg_300',
    bg_light_100: 'bg_light_100',
    bg_light_200: 'bg_light_200',
    bg_light_300: 'bg_light_300',
    bg_dark_100: 'bg_dark_100',
    bg_dark_200: 'bg_dark_200',
    bg_dark_transparent_100: 'bg_dark_transparent_100',
    bg_dark_transparent_200: 'bg_dark_transparent_200',
    color_100: 'color_100',
    color_200: 'color_200',
    light_100: 'light_100',
    light_200: 'light_200',
    dark_100: 'dark_100',
    dark_200: 'dark_200',
    active_100: 'active_100',
    active_200: 'active_200',
    active_300: 'active_300',
    disabled_100: 'disabled_100',
    disabled_200: 'disabled_200',
    primary_100: 'primary_100',
    primary_200: 'primary_200',
    primary_light_100: 'primary_light_100',
    primary_dark_100: 'primary_dark_100',
    secondary_100: 'secondary_100',
    success_100: 'success_100',
    success_200: 'success_200',
    info_100: 'info_100',
    info_200: 'info_200',
    warning_100: 'warning_100',
    warning_200: 'warning_200',
    danger_100: 'danger_100',
    danger_200: 'danger_200',
    danger_300: 'danger_300',
    link: 'link',
    link_hover: 'link_hover',
    link_light_hover: 'link_light_hover',
    border: 'border',
    border_light: 'border_light',
    border_light_200: 'border_light_200',
    border_dark: 'border_dark'
  },
  // not themable by styled-system so adding values directly
  zIndex: {
    xs: global_ZIndex_xs.value,
    sm: global_ZIndex_sm.value,
    md: global_ZIndex_md.value,
    lg: global_ZIndex_lg.value,
    xl: global_ZIndex_xl.value,
    xxl: global_ZIndex_2xl.value
  },
  ratio: {
    golden: global_golden_ratio.value
  },
  // use values directly so that the user can concatenate multiple shadows
  // e.g. boxShadow={`${StyledConstants.sm_right}, ${StyledConstants.sm_bottom}`}
  shadows: {
    sm: global_BoxShadow_sm.value,
    sm_left: global_BoxShadow_sm_left.value,
    sm_right: global_BoxShadow_sm_right.value,
    sm_bottom: global_BoxShadow_sm_bottom.value,
    sm_top: global_BoxShadow_sm_top.value,
    md: global_BoxShadow_md.value,
    md_left: global_BoxShadow_md_left.value,
    md_right: global_BoxShadow_md_right.value,
    md_bottom: global_BoxShadow_md_bottom.value,
    md_top: global_BoxShadow_md_top.value,
    lg: global_BoxShadow_lg.value,
    lg_left: global_BoxShadow_lg_left.value,
    lg_right: global_BoxShadow_lg_right.value,
    lg_bottom: global_BoxShadow_lg_bottom.value,
    lg_top: global_BoxShadow_lg_top.value,
    inset: global_BoxShadow_inset.value
  }
};

export const StyledTheme = {
  // Array of viewport widths to use for min-width media queries
  breakpoints: [
    global_breakpoint_sm.value, // min-width 576px
    global_breakpoint_md.value, // min-width 768px
    global_breakpoint_lg.value, // min-width 992px
    global_breakpoint_xl.value // min-width 1200px
  ],

  // Array or Object: Values for borderRadius props
  radii: {
    sm: global_BorderRadius_sm.value,
    lg: global_BorderRadius_lg.value
  },

  // 	Array of numbers to use as a typographic scale
  fontSizes: [
    global_FontSize_xs.value,
    global_FontSize_sm.value,
    global_FontSize_md.value,
    global_FontSize_lg.value,
    global_FontSize_xl.value,
    global_FontSize_2xl.value,
    global_FontSize_3xl.value,
    global_FontSize_4xl.value
  ],

  // Array of numbers for use as margin and pixel values
  space: [
    global_spacer_xs.value,
    global_spacer_sm.value,
    global_spacer_md.value,
    global_spacer_lg.value,
    global_spacer_xl.value,
    global_spacer_2xl.value,
    global_spacer_3xl.value
  ],

  // Color names that can be used in color, bg, and borderColor props
  colors: {
    bg_100: global_BackgroundColor_100.value,
    bg_200: global_BackgroundColor_200.value,
    bg_300: global_BackgroundColor_300.value,
    bg_light_100: global_BackgroundColor_light_100.value,
    bg_light_200: global_BackgroundColor_light_200.value,
    bg_light_300: global_BackgroundColor_light_300.value,
    bg_dark_100: global_BackgroundColor_dark_100.value,
    bg_dark_200: global_BackgroundColor_dark_200.value,
    bg_dark_transparent_100: global_BackgroundColor_dark_transparent_100.value,
    bg_dark_transparent_200: global_BackgroundColor_dark_transparent_200.value,
    color_100: global_Color_100.value,
    color_200: global_Color_200.value,
    light_100: global_Color_light_100.value,
    light_200: global_Color_light_200.value,
    dark_100: global_Color_dark_100.value,
    dark_200: global_Color_dark_200.value,
    active_100: global_active_color_100.value,
    active_200: global_active_color_200.value,
    active_300: global_active_color_300.value,
    disabled_100: global_disabled_color_100.value,
    disabled_200: global_disabled_color_200.value,
    primary_100: global_primary_color_100.value,
    primary_200: global_primary_color_200.value,
    primary_light_100: global_primary_color_light_100.value,
    primary_dark_100: global_primary_color_dark_100.value,
    secondary_100: global_secondary_color_100.value,
    success_100: global_success_color_100.value,
    success_200: global_success_color_200.value,
    info_100: global_info_color_100.value,
    info_200: global_info_color_200.value,
    warning_100: global_warning_color_100.value,
    warning_200: global_warning_color_200.value,
    danger_100: global_danger_color_100.value,
    danger_200: global_danger_color_200.value,
    danger_300: global_danger_color_300.value,
    link: global_link_Color.value,
    link_hover: global_link_Color_hover.value,
    link_light_hover: global_link_Color_light_hover.value,
    border: global_BorderColor.value,
    border_light: global_BorderColor_light.value,
    border_light_200: global_BorderColor_light_200.value,
    border_dark: global_BorderColor_dark.value
  },

  // Array or Object: Values for the fontFamily prop
  fonts: {
    sans_serif: global_FontFamily_sans_serif.value,
    monospace: global_FontFamily_monospace.value
  },

  // Array or Object: Values for fontWeight prop
  fontWeights: {
    light: global_FontWeight_light.value,
    normal: global_FontWeight_normal.value,
    semi_bold: global_FontWeight_semi_bold.value,
    bold: global_FontWeight_bold.value,
    link: global_link_FontWeight.value
  },

  // Array or Object: Values for lineHeight prop
  lineHeights: {
    sm: global_LineHeight_sm.value,
    md: global_LineHeight_md.value
  },

  // Array or Object: Values for border props
  borders: {
    sm: `${global_BorderWidth_sm.value} solid`,
    md: `${global_BorderWidth_md.value} solid`,
    lg: `${global_BorderWidth_lg.value} solid`
  },

  // Array or Object: Values for boxShadow prop
  shadows: {
    sm: global_BoxShadow_sm.value,
    sm_left: global_BoxShadow_sm_left.value,
    sm_right: global_BoxShadow_sm_right.value,
    sm_bottom: global_BoxShadow_sm_bottom.value,
    sm_top: global_BoxShadow_sm_top.value,
    md: global_BoxShadow_md.value,
    md_left: global_BoxShadow_md_left.value,
    md_right: global_BoxShadow_md_right.value,
    md_bottom: global_BoxShadow_md_bottom.value,
    md_top: global_BoxShadow_md_top.value,
    lg: global_BoxShadow_lg.value,
    lg_left: global_BoxShadow_lg_left.value,
    lg_right: global_BoxShadow_lg_right.value,
    lg_bottom: global_BoxShadow_lg_bottom.value,
    lg_top: global_BoxShadow_lg_top.value,
    inset: global_BoxShadow_inset.value
  }
};