/**
 * When using a cursor container, the tooltip can be offset from the cursor point. If true, the tooltip
 * will appear to the right of the vertical cursor.
 *
 * @param {boolean} offsetCursorDimensionX If true, the tooltip will appear to the right of the vertical cursor
 * @param {boolean} offsetCursorDimensionY If true, the tooltip will appear above the horizontal cursor
 */
export const getTooltipCenterOffset = (offsetCursorDimensionX = false, offsetCursorDimensionY = false) => {
  const offsetX = (props: any) => props.flyoutWidth / 2 + 5;
  const offsetY = (props: any) => -(props.flyoutHeight / 2 + 5);

  return {
    x: offsetCursorDimensionX ? offsetX : 0,
    y: offsetCursorDimensionY ? offsetY : 0
  };
};
