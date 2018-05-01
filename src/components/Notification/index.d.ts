import NotificationBase, { NotificationProps } from './Notification';
import NotificationContent, {
  NotificationContentProps
} from './NotificationContent';
import NotificationInfo, { NotificationInfoProps } from './NotificationInfo';
import NotificationMessage, {
  NotificationMessageProps
} from './NotificationMessage';
import NotificationInfoRight, {
  NotificationInfoRightProps
} from './NotificationInfoRight';
import NotificationInfoLeft, {
  NotificationInfoLeftProps
} from './NotificationInfoLeft';

declare const Notification: typeof NotificationBase & {
  Content: typeof NotificationContent;
  Info: typeof NotificationInfo;
  InfoLeft: typeof NotificationInfoLeft;
  InfoRight: typeof NotificationInfoRight;
  Message: typeof NotificationMessage;
};

export {
  Notification,
  NotificationProps,
  NotificationContentProps,
  NotificationInfoProps,
  NotificationInfoLeftProps,
  NotificationInfoRightProps,
  NotificationMessageProps
};
