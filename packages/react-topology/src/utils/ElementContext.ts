import { createContext } from 'react';
import { GraphElement } from '../types';

const ElementContext = createContext<GraphElement>(undefined as any);

export default ElementContext;
