import { SFC, ReactNode } from 'react';

export interface FieldLevelHelpProps {
  /** additional fieldlevelhelp classes */
  content?: ReactNode;
  /** leave popover/tooltip open  */
  close: 'true' | 'false';
}

declare const FieldLevelHelp: SFC<FieldLevelHelpProps>;

export default FieldLevelHelp;
