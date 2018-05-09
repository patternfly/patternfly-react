import WizardBase, { WizardProps } from './Wizard';
import WizardBody, { WizardBodyProps } from './WizardBody';
import WizardContents, { WizardContentsProps } from './WizardContents';
import WizardFooter, { WizardFooterProps } from './WizardFooter';
import WizardHeader, { WizardHeaderProps } from './WizardHeader';
import WizardMain, { WizardMainProps } from './WizardMain';
import WizardReviewContent, {
  WizardReviewContentProps
} from './WizardReviewContent';
import WizardReviewItem, { WizardReviewItemProps } from './WizardReviewItem';
import WizardReviewStep, { WizardReviewStepProps } from './WizardReviewStep';
import WizardReviewSteps, { WizardReviewStepsProps } from './WizardReviewSteps';
import WizardReviewSubStep, {
  WizardReviewSubStepProps
} from './WizardReviewSubStep';
import WizardReviewSubSteps, {
  WizardReviewSubStepsProps
} from './WizardReviewSubSteps';
import WizardRow, { WizardRowProps } from './WizardRow';
import WizardSidebar, { WizardSidebarProps } from './WizardSidebar';
import WizardSidebarGroup, {
  WizardSidebarGroupProps
} from './WizardSidebarGroup';
import WizardSidebarGroupItem, {
  WizardSidebarGroupItemProps
} from './WizardSidebarGroupItem';
import WizardStep, { WizardStepProps } from './WizardStep';
import WizardSteps, { WizardStepsProps } from './WizardSteps';
import WizardSubStep, { WizardSubStepProps } from './WizardSubStep';

import WizardPatternBase, {
  WizardPatternProps,
  WizardPatternStep
} from './Patterns/WizardPattern';
import WizardPatternBody, {
  WizardPatternBodyProps
} from './Patterns/WizardPatternBody';
import StatefulWizardPattern, {
  StatefulWizardPatternProps
} from './Patterns/StatefulWizardPattern';

declare const Wizard: typeof WizardBase & {
  Body: typeof WizardBody;
  Contents: typeof WizardContents;
  Footer: typeof WizardFooter;
  Header: typeof WizardHeader;
  Main: typeof WizardMain;
  ReviewContent: typeof WizardReviewContent;
  ReviewItem: typeof WizardReviewItem;
  ReviewStep: typeof WizardReviewStep;
  ReviewSteps: typeof WizardReviewSteps;
  ReviewSubStep: typeof WizardReviewSubStep;
  ReviewSubSteps: typeof WizardReviewSubSteps;
  Row: typeof WizardRow;
  Sidebar: typeof WizardSidebar;
  SidebarGroup: typeof WizardSidebarGroup;
  SidebarGroupItem: typeof WizardSidebarGroupItem;
  Step: typeof WizardStep;
  Steps: typeof WizardSteps;
  SubStep: typeof WizardSubStep;
  Pattern: typeof WizardPattern;
};

declare const WizardPattern: typeof WizardPatternBase & {
  Body: typeof WizardPatternBody;
  Stateful: typeof StatefulWizardPattern;
};

export {
  Wizard,
  WizardProps,
  WizardBody,
  WizardBodyProps,
  WizardContents,
  WizardContentsProps,
  WizardFooter,
  WizardFooterProps,
  WizardHeader,
  WizardHeaderProps,
  WizardMain,
  WizardMainProps,
  WizardReviewContent,
  WizardReviewContentProps,
  WizardReviewItem,
  WizardReviewItemProps,
  WizardReviewStep,
  WizardReviewStepProps,
  WizardReviewSteps,
  WizardReviewStepsProps,
  WizardReviewSubStep,
  WizardReviewSubStepProps,
  WizardReviewSubSteps,
  WizardReviewSubStepsProps,
  WizardRow,
  WizardRowProps,
  WizardSidebar,
  WizardSidebarProps,
  WizardSidebarGroup,
  WizardSidebarGroupProps,
  WizardSidebarGroupItem,
  WizardSidebarGroupItemProps,
  WizardStep,
  WizardStepProps,
  WizardSteps,
  WizardStepsProps,
  WizardSubStep,
  WizardSubStepProps,
  WizardPattern,
  WizardPatternStep,
  WizardPatternProps,
  WizardPatternBody,
  WizardPatternBodyProps,
  StatefulWizardPattern,
  StatefulWizardPatternProps
};
