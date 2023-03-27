import { VictoryThemeDefinition } from 'victory-core';

// Note: Victory incorrectly typed ThemeBaseProps.padding as number instead of PaddingProps
interface ChartThemeDefinitionInterface extends VictoryThemeDefinition {}

/**
 * Chart theme definition
 * @public
 */
export type ChartThemeDefinition = ChartThemeDefinitionInterface;
