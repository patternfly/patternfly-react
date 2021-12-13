import { EdgeAnimationSpeed, EdgeStyle } from '../../types';

export const getEdgeStyleClassModifier = (edgeType: EdgeStyle): string => {
  switch (edgeType) {
    case EdgeStyle.solid:
      return 'pf-m-solid';
    case EdgeStyle.dotted:
      return 'pf-m-dotted';
    case EdgeStyle.dashed:
      return 'pf-m-dashed';
    case EdgeStyle.dashedMd:
      return 'pf-m-dashed-md';
    case EdgeStyle.dashedLg:
      return 'pf-m-dashed-lg';
    case EdgeStyle.dashedXl:
      return 'pf-m-dashed-xl';
    default:
      return '';
  }
};

export const getEdgeAnimationDuration = (speed: EdgeAnimationSpeed): number => {
  switch (speed) {
    case EdgeAnimationSpeed.slow:
      return 1.25;
    case EdgeAnimationSpeed.mediumSlow:
      return 1;
    case EdgeAnimationSpeed.medium:
      return 0.75;
    case EdgeAnimationSpeed.mediumFast:
      return 0.5;
    case EdgeAnimationSpeed.fast:
      return 0.25;
    default:
      return 0;
  }
};
