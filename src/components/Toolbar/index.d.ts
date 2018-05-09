import ToolbarBase, { ToolbarProps } from './Toolbar';
import ToolbarFind, { ToolbarFindProps } from './ToolbarFind';
import ToolbarResults, { ToolbarResultsProps } from './ToolbarResults';
import ToolbarRightContent, {
  ToolbarRightContentProps
} from './ToolbarRightContent';
import ToolbarViewSelector, {
  ToolbarViewSelectorProps
} from './ToolbarViewSelector';

declare const Toolbar: typeof ToolbarBase & {
  Find: typeof ToolbarFind;
  Results: typeof ToolbarResults;
  RightContent: typeof ToolbarRightContent;
  ViewSelector: typeof ToolbarViewSelector;
};

export {
  Toolbar,
  ToolbarProps,
  ToolbarResults,
  ToolbarResultsProps,
  ToolbarRightContent,
  ToolbarRightContentProps,
  ToolbarFind,
  ToolbarFindProps,
  ToolbarViewSelector,
  ToolbarViewSelectorProps
};
