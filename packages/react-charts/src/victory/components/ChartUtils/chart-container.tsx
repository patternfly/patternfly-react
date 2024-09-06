/* eslint-disable camelcase */
import chart_container_cursor_line_Fill from '@patternfly/react-tokens/dist/esm/chart_container_cursor_line_Fill';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { ContainerType, createContainer as victoryCreateContainer } from 'victory-create-container';
import { ChartCursorTooltip } from '../ChartCursorTooltip/ChartCursorTooltip';
import { ChartLabel } from '../ChartLabel/ChartLabel';
import { LineSegment } from 'victory-core';

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
 * @public
 */
export const createContainer = (behaviorA: ContainerType, behaviorB: ContainerType) => {
  const Container: any = victoryCreateContainer(behaviorA, behaviorB);
  const isCursor = behaviorA === 'cursor' || behaviorB === 'cursor';
  const isVoronoi = behaviorA === 'voronoi' || behaviorB === 'voronoi';

  const containerWrapper = (props: any) => {
    const containerProps = {
      ...(isCursor && {
        cursorLabelComponent: <ChartLabel textAnchor="start" />,
        cursorComponent: (
          <LineSegment
            style={{
              stroke: chart_container_cursor_line_Fill.var
            }}
          />
        )
      }),
      ...(isVoronoi && { labelComponent: <ChartCursorTooltip /> }),
      ...props
    };
    return <Container {...containerProps} />;
  };
  containerWrapper.defaultEvents = Container.defaultEvents;
  containerWrapper.displayName = Container.displayName;
  containerWrapper.role = Container.role;

  return containerWrapper;
};
