import { Node } from '../types';

export const getNodeScaleTranslation = (
  element: Node,
  nodeScale: number,
  scaleNode: boolean
): { translateX: number; translateY: number } => {
  if (!scaleNode) {
    return { translateX: 0, translateY: 0 };
  }
  const bounds = element.getBounds();
  const translateX = bounds.width / 2 - (bounds.width / 2) * nodeScale;
  const translateY = bounds.height / 2 - (bounds.height / 2) * nodeScale;

  return { translateX, translateY };
};
