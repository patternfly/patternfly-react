import { createContext } from 'react';
import { Controller } from '../types';

const ControllerContext = createContext<Controller>(undefined as any);

export default ControllerContext;
