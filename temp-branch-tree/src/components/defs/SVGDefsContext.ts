import { createContext, ReactNode } from 'react';

export type SVGDefsContextProps = {
  addDef(id: string, node: ReactNode): void;
  removeDef(id: string): void;
};

const SVGDefsContext = createContext<SVGDefsContextProps>(undefined as any);

export default SVGDefsContext;
