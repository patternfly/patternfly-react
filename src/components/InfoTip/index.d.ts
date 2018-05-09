import InfoTipBase, { InfoTipProps } from './InfoTip';
import InfoTipToggle, { InfoTipToggleProps } from './InfoTipToggle';
import InfoTipMenu, { InfoTipMenuProps } from './InfoTipMenu';
import InfoTipMenuFooter, { InfoTipMenuFooterProps } from './InfoTipMenuFooter';
import InfoTipMenuItemIcon, {
  InfoTipMenuItemIconProps
} from './InfoTipMenuItemIcon';

declare const InfoTip: typeof InfoTipBase & {
  Menu: typeof InfoTipMenu;
  MenuFooter: typeof InfoTipMenuFooter;
  MenuItemIcon: typeof InfoTipMenuItemIcon;
  Toggle: typeof InfoTipToggle;
};

export {
  InfoTip,
  InfoTipProps,
  InfoTipMenu,
  InfoTipMenuFooter,
  InfoTipMenuFooterProps,
  InfoTipMenuItemIcon,
  InfoTipMenuItemIconProps,
  InfoTipMenuProps,
  InfoTipToggle,
  InfoTipToggleProps
};
