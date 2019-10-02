import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLine } from 'victory';
import { ChartLine, ChartLineProps } from '../ChartLine';
import { getThresholdTheme } from '../ChartUtils/chart-theme';

export const ChartThreshold: React.FunctionComponent<ChartLineProps> = ({
  themeColor,
  themeVariant,
  style, // do not let style defaults override threshold theme
  ...rest
}: ChartLineProps) => {
  const theme = getThresholdTheme(themeColor, themeVariant);
  return <ChartLine {...rest} theme={theme} />;
};

// Note: VictoryPie.role must be hoisted
hoistNonReactStatics(ChartThreshold, VictoryLine);
