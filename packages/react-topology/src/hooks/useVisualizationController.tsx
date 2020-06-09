import * as React from 'react';
import { ControllerContext } from '../utils';
import { Controller } from '../types';

const useVisualizationController = (): Controller => React.useContext(ControllerContext);

export default useVisualizationController;
