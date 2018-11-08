/* eslint-disable camelcase */
import {
  global_active_color_100,
  global_active_color_200,
  global_active_color_300,
  global_Color_dark_100,
  global_Color_dark_200,
  global_Color_light_100
} from '@patternfly/react-tokens';
import Theme from './theme-common';

// Colors
const COLOR_AXIS_FILL = 'transparent';
const COLOR_AXIS_STROKE = global_Color_dark_200.value;
const COLOR_FILL = global_active_color_200.value;
const COLOR_SCALE = [
  global_active_color_100.value,
  global_active_color_200.value,
  global_active_color_300.value,
  '#0066ff'
];
const COLOR_STACK_STROKE = global_Color_dark_200.value;
const COLOR_STROKE = global_active_color_300.value;
const COLOR_TOOLTIP_FILL = global_Color_light_100.value;
const COLOR_TOOLTIP_STROKE = global_Color_dark_100.value;
const COLOR_TOOLTIP_FLYOUT_FILL = global_Color_dark_100.value;
const COLOR_TOOLTIP_FLYOUT_STROKE = global_Color_dark_100.value;

// Typography
const TOPOGRAPHY_FONT_FAMILY = "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif";
const TOPOGRAPHY_LETTER_SPACING = 'normal';
const TOPOGRAPHY_FONT_SIZE = 14; // Value must be in pixles

// Layout
const LAYOUT_PROPS = {
  width: 451, // Todo: want to ensure the value is coming from theme
  height: 301,
  padding: 8,
  colorScale: COLOR_SCALE
};

// Labels
const LABEL_PROPS = {
  fontFamily: TOPOGRAPHY_FONT_FAMILY,
  fontSize: TOPOGRAPHY_FONT_SIZE,
  letterSpacing: TOPOGRAPHY_LETTER_SPACING,
  padding: 10,
  fill: global_Color_light_100.value,
  stroke: 'transparent'
};
const LABEL_CENTERED_PROPS = Object.assign({ textAnchor: 'middle' }, LABEL_PROPS);

// Strokes
const STROKE_LINE_CAP = 'round';
const STROKE_LINE_JOIN = 'round';

export default Theme({
  COLOR_AXIS_FILL,
  COLOR_AXIS_STROKE,
  COLOR_FILL,
  COLOR_SCALE,
  COLOR_STACK_STROKE,
  COLOR_STROKE,
  COLOR_TOOLTIP_FILL,
  COLOR_TOOLTIP_STROKE,
  COLOR_TOOLTIP_FLYOUT_FILL,
  COLOR_TOOLTIP_FLYOUT_STROKE,
  LAYOUT_PROPS,
  LABEL_PROPS,
  LABEL_CENTERED_PROPS,
  STROKE_LINE_CAP,
  STROKE_LINE_JOIN,
  TOPOGRAPHY_FONT_FAMILY,
  TOPOGRAPHY_LETTER_SPACING,
  TOPOGRAPHY_FONT_SIZE
});
