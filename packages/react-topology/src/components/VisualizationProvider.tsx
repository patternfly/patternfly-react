import * as React from 'react';
import ControllerContext from '../utils/ControllerContext';
import { Controller } from '../types';
import { Visualization } from '../Visualization';

interface VisualizationSurfaceProps {
  controller?: Controller;
  children?: React.ReactNode;
}

const VisualizationProvider: React.FC<VisualizationSurfaceProps> = ({ controller, children }) => {
  const controllerRef = React.useRef<Controller>();
  if (controller && controllerRef.current !== controller) {
    controllerRef.current = controller;
  } else if (!controllerRef.current) {
    controllerRef.current = new Visualization();
  }

  return <ControllerContext.Provider value={controllerRef.current}>{children}</ControllerContext.Provider>;
};

export default VisualizationProvider;
