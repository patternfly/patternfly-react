import EmptyStateBase, { EmptyStateProps } from './EmptyState';
import EmptyStateAction, { EmptyStateActionProps } from './EmptyStateAction';
import EmptyStateHelp, { EmptyStateHelpProps } from './EmptyStateHelp';
import EmptyStateIcon, { EmptyStateIconProps } from './EmptyStateIcon';
import EmptyStateInfo, { EmptyStateInfoProps } from './EmptyStateInfo';
import EmptyStateTitle, { EmptyStateTitleProps } from './EmptyStateTitle';

declare const EmptyState: typeof EmptyStateBase & {
  Action: typeof EmptyStateAction;
  Help: typeof EmptyStateHelp;
  Icon: typeof EmptyStateIcon;
  Info: typeof EmptyStateInfo;
  Title: typeof EmptyStateTitle;
};

export {
  EmptyState,
  EmptyStateProps,
  EmptyStateAction,
  EmptyStateActionProps,
  EmptyStateHelp,
  EmptyStateHelpProps,
  EmptyStateIcon,
  EmptyStateIconProps,
  EmptyStateInfo,
  EmptyStateInfoProps,
  EmptyStateTitle,
  EmptyStateTitleProps
};
