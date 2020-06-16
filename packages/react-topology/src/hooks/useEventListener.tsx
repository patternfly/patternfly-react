import * as React from 'react';
import useVisualizationController from './useVisualizationController';
import { EventListener } from '../types';

const useEventListener = <L extends EventListener = EventListener>(type: string, listener: L): void => {
  const controller = useVisualizationController();
  React.useEffect(() => {
    controller.addEventListener(type, listener);
    return () => {
      controller.removeEventListener(type, listener);
    };
  }, [controller, type, listener]);
};

export default useEventListener;
