import { ComponentClass } from 'react';

interface ReactTabular {
  Provider: ComponentClass<any>;
  Header: ComponentClass<any>;
  Body: ComponentClass<any>;
}

export const Table: ReactTabular;
