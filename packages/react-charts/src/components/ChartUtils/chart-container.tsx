import * as React from 'react';
import { ContainerType, createContainer as victoryCreateContainer } from 'victory-create-container';
import { ChartCursorTooltip } from '../ChartCursorTooltip';
import { ChartLabel } from '../ChartLabel';

/**
 * Makes a container component with multiple behaviors. It allows you to effectively combine any two
 * containers of type 'brush', 'cursor', 'selection', 'voronoi', or 'zoom'. Default container props are applied to
 * support the PatternFly theme.
 *
 * Each behavior must be one of the following strings: 'brush', 'cursor', 'selection', 'voronoi', and 'zoom'. The
 * resulting container uses the events from both behaviors. For example, if both behaviors use the click event (like
 * zoom and selection) the combined container will trigger both behaviors' events on each click.
 *
 * Note: Order of the behaviors matters in a few cases. It is recommended to use 'zoom' before any other behaviors: for
 * example, createContainer('zoom', 'voronoi') instead of createContainer('voronoi', 'zoom').
 *
 * See https://formidable.com/open-source/victory/docs/create-container
 *
 * @param {string} behaviorA 'brush', 'cursor', 'selection', 'voronoi', or 'zoom'
 * @param {string} behaviorB 'brush', 'cursor', 'selection', 'voronoi', or 'zoom'
 */
export const createContainer = (behaviorA: ContainerType, behaviorB: ContainerType) => {
  const container: any = victoryCreateContainer(behaviorA, behaviorB);
  const isCursor = behaviorA === 'cursor' || behaviorB === 'cursor';
  const isVoronoi = behaviorA === 'voronoi' || behaviorB === 'voronoi';

  if (isCursor) {
    container.defaultProps.cursorLabelComponent = <ChartLabel textAnchor="start" />;
  }
  if (isVoronoi) {
    container.defaultProps.labelComponent = <ChartCursorTooltip />;
  }
  return container;
};
