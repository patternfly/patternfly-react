import useVisualizationController from './useVisualizationController';
import { ScaleDetailsLevel } from '../types';

const useDetailsLevel = (): ScaleDetailsLevel => {
  const controller = useVisualizationController();
  return controller.getGraph().getDetailsLevel();
};

export default useDetailsLevel;
