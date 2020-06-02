import { createContext } from 'react';

type LayersContextProps = (id: string) => Element;

const LayersContext = createContext<LayersContextProps>(undefined as any);

export default LayersContext;
