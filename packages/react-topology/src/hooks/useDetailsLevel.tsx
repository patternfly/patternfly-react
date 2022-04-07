import useVisualizationController from './useVisualizationController';
import { ScaleDetailsLevel } from '../types';

const useDetailsLevel = (): ScaleDetailsLevel => {
  const controller = useVisualizationController();
  if (!controller) {
    return ScaleDetailsLevel.high;
  }
  return controller.getGraph().getDetailsLevel();
};

export default useDetailsLevel;
