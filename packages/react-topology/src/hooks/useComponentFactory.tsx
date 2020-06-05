import * as React from 'react';
import { ComponentFactory } from '../types';
import useVisualizationController from './useVisualizationController';

const useComponentFactory = (factory: ComponentFactory): void => {
  const controller = useVisualizationController();
  React.useEffect(() => {
    controller.registerComponentFactory(factory);
    // TODO support unregister?
  }, [controller, factory]);
};

export default useComponentFactory;
