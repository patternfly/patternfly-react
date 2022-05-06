/* eslint-disable camelcase */
import chart_color_blue_100 from '@patternfly/react-tokens/dist/esm/chart_color_blue_100';
import chart_color_blue_200 from '@patternfly/react-tokens/dist/esm/chart_color_blue_200';
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_blue_400 from '@patternfly/react-tokens/dist/esm/chart_color_blue_400';
import chart_color_blue_500 from '@patternfly/react-tokens/dist/esm/chart_color_blue_500';
import chart_color_green_100 from '@patternfly/react-tokens/dist/esm/chart_color_green_100';
import chart_color_green_200 from '@patternfly/react-tokens/dist/esm/chart_color_green_200';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_green_400 from '@patternfly/react-tokens/dist/esm/chart_color_green_400';
import chart_color_green_500 from '@patternfly/react-tokens/dist/esm/chart_color_green_500';
import chart_color_cyan_100 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_100';
import chart_color_cyan_200 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_200';
import chart_color_cyan_300 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_300';
import chart_color_cyan_400 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_400';
import chart_color_cyan_500 from '@patternfly/react-tokens/dist/esm/chart_color_cyan_500';
import chart_color_gold_100 from '@patternfly/react-tokens/dist/esm/chart_color_gold_100';
import chart_color_gold_200 from '@patternfly/react-tokens/dist/esm/chart_color_gold_200';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import chart_color_gold_400 from '@patternfly/react-tokens/dist/esm/chart_color_gold_400';
import chart_color_gold_500 from '@patternfly/react-tokens/dist/esm/chart_color_gold_500';
import chart_color_orange_100 from '@patternfly/react-tokens/dist/esm/chart_color_orange_100';
import chart_color_orange_200 from '@patternfly/react-tokens/dist/esm/chart_color_orange_200';
import chart_color_orange_300 from '@patternfly/react-tokens/dist/esm/chart_color_orange_300';
import chart_color_orange_400 from '@patternfly/react-tokens/dist/esm/chart_color_orange_400';
import chart_color_orange_500 from '@patternfly/react-tokens/dist/esm/chart_color_orange_500';
import { ColorTheme } from '../color-theme';

// The color order below (minus the purple color family) improves the color contrast in ordered charts; donut, pie, bar, & stack
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
const COLOR_SCALE = [
  chart_color_blue_300.var,
  chart_color_green_300.var,
  chart_color_cyan_300.var,
  chart_color_gold_300.var,
  chart_color_orange_300.var,
  chart_color_blue_100.var,
  chart_color_green_500.var,
  chart_color_cyan_100.var,
  chart_color_gold_100.var,
  chart_color_orange_500.var,
  chart_color_blue_500.var,
  chart_color_green_100.var,
  chart_color_cyan_500.var,
  chart_color_gold_500.var,
  chart_color_orange_100.var,
  chart_color_blue_200.var,
  chart_color_green_400.var,
  chart_color_cyan_200.var,
  chart_color_gold_200.var,
  chart_color_orange_400.var,
  chart_color_blue_400.var,
  chart_color_green_200.var,
  chart_color_cyan_400.var,
  chart_color_gold_400.var,
  chart_color_orange_200.var
];

export const LightMultiColorOrderedTheme = ColorTheme({
  COLOR_SCALE
});
