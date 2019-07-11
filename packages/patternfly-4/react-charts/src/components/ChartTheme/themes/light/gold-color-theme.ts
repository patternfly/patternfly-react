/* eslint-disable camelcase */
import {
  chart_color_gold_100,
  chart_color_gold_200,
  chart_color_gold_300,
  chart_color_gold_400,
  chart_color_gold_500
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_gold_300.value,
  chart_color_gold_100.value,
  chart_color_gold_500.value,
  chart_color_gold_200.value,
  chart_color_gold_400.value,

];

export const LightGoldColorTheme = ColorTheme({
  COLOR_SCALE
});
