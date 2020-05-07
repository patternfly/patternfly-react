import { Helpers } from 'victory-core';

interface ChartPieOriginInterface {
  height: number; // Chart height
  padding: any; // Chart padding
  width: number; // Chart width
}

// Returns the origin for pie based charts. For example, something with a radius such as pie, donut, donut utilization,
// and donut threshold.
export const getPieOrigin = ({ height, padding, width }: ChartPieOriginInterface) => {
  const { top, bottom, left, right } = Helpers.getPadding({ padding });
  const radius = Helpers.getRadius({ height, width, padding });
  const offsetX = (width - radius * 2 - left - right) / 2;
  const offsetY = (height - radius * 2 - top - bottom) / 2;
  return {
    x: radius + left + offsetX,
    y: radius + top + offsetY
  };
};
