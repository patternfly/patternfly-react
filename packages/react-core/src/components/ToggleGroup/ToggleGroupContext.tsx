import { createContext } from 'react';
import { ToggleGroupVariant } from './ToggleGroup';

interface ToolbarGroupContextProps {
  variant: ToggleGroupVariant | 'light' | 'default';
}

const ToggleGroupContext = createContext<ToolbarGroupContextProps>({
  variant: 'default'
});

export default ToggleGroupContext;
