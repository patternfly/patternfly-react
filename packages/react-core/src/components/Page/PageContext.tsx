import * as React from 'react';
import { getBreakpoint, getVerticalBreakpoint } from '../../helpers/util';

export interface PageContextProps {
  isManagedSidebar: boolean;
  onNavToggle: () => void;
  isNavOpen: boolean;
  width: number;
  height: number;
  getBreakpoint: (width: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  getVerticalBreakpoint: (height: number | null) => 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const pageContextDefaults: PageContextProps = {
  isManagedSidebar: false,
  isNavOpen: false,
  onNavToggle: () => null,
  width: null,
  height: null,
  getBreakpoint,
  getVerticalBreakpoint
};

export const PageContext = React.createContext<PageContextProps>(pageContextDefaults);

export const PageContextProvider = PageContext.Provider;
export const PageContextConsumer = PageContext.Consumer;
