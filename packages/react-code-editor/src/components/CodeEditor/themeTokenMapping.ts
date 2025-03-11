import backgroundDark from '@patternfly/react-tokens/dist/esm/t_color_gray_90';
import textColorDark from '@patternfly/react-tokens/dist/esm/t_color_white';
import textColorSubtleDark from '@patternfly/react-tokens/dist/esm/t_color_gray_30';

import redDark from '@patternfly/react-tokens/dist/esm/t_color_red_30';
import orangeredDark from '@patternfly/react-tokens/dist/esm/t_color_red_orange_30';
import orangeDark from '@patternfly/react-tokens/dist/esm/t_color_orange_30';
import yellowDark from '@patternfly/react-tokens/dist/esm/t_color_yellow_30';
import greenDark from '@patternfly/react-tokens/dist/esm/t_color_green_30';
import tealDark from '@patternfly/react-tokens/dist/esm/t_color_teal_30';
import blueDark from '@patternfly/react-tokens/dist/esm/t_color_blue_30';
import purpleDark from '@patternfly/react-tokens/dist/esm/t_color_purple_30';
import grayDark from '@patternfly/react-tokens/dist/esm/t_color_gray_30';

import backgroundLight from '@patternfly/react-tokens/dist/esm/t_color_white';
import textColorLight from '@patternfly/react-tokens/dist/esm/t_global_text_color_100';
import textColorSubtleLight from '@patternfly/react-tokens/dist/esm/t_global_text_color_200';

import redLight from '@patternfly/react-tokens/dist/esm/t_color_red_50';
import orangeredLight from '@patternfly/react-tokens/dist/esm/t_color_red_orange_50';
import orangeLight from '@patternfly/react-tokens/dist/esm/t_color_orange_50';
import yellowLight from '@patternfly/react-tokens/dist/esm/t_color_yellow_50';
import greenLight from '@patternfly/react-tokens/dist/esm/t_color_green_50';
import tealLight from '@patternfly/react-tokens/dist/esm/t_color_teal_50';
import blueLight from '@patternfly/react-tokens/dist/esm/t_color_blue_50';
import purpleLight from '@patternfly/react-tokens/dist/esm/t_color_purple_50';
import grayLight from '@patternfly/react-tokens/dist/esm/t_color_gray_50';

/**
 * This file maps the theme tokens from PatternFly to a format that can be used in the Monaco editor.
 *
 * @see https://github.com/microsoft/monaco-editor/issues/2427
 */
export const colours = {
  background: {
    dark: backgroundDark.value,
    light: backgroundLight.value
  },
  foreground: {
    dark: textColorDark.value,
    light: textColorLight.value
  },
  secondaryForeground: {
    dark: textColorSubtleDark.value,
    light: textColorSubtleLight.value
  },
  red: {
    dark: redDark.value,
    light: redLight.value
  },
  orangered: {
    dark: orangeredLight.value,
    light: orangeredDark.value
  },
  orange: {
    dark: orangeDark.value,
    light: orangeLight.value
  },
  yellow: {
    dark: yellowDark.value,
    light: yellowLight.value
  },
  green: {
    dark: greenDark.value,
    light: greenLight.value
  },
  teal: {
    dark: tealDark.value,
    light: tealLight.value
  },
  blue: {
    dark: blueDark.value,
    light: blueLight.value
  },
  purple: {
    dark: purpleDark.value,
    light: purpleLight.value
  },
  gray: {
    dark: grayDark.value,
    light: grayLight.value
  }
};
