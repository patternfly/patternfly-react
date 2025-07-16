import { useRef, useState, FunctionComponent, RefObject, useEffect } from 'react';
import {
  Avatar,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  NotificationBadge,
  Toolbar,
  ToolbarItem,
  ToolbarGroup,
  ToolbarContent
} from '../..';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import { NotificationType } from './types';
import { useGuidedTour } from './GuidedTourContext';

interface Props {
  notifications: NotificationType[];
  isDrawerExpanded: boolean;
  setIsDrawerExpanded: (newVal: boolean) => void;
  onStartGuidedTour: () => void;
  onEndGuidedTour: () => void;
}

export const AnimationsHeaderToolbar: FunctionComponent<Props> = ({
  notifications,
  isDrawerExpanded,
  setIsDrawerExpanded,
  onStartGuidedTour,
  onEndGuidedTour
}) => {
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState<boolean>(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [shouldNotifyNewNotification, setShouldNotifyNewNotification] = useState(false);
  const { renderTourStepElement, tourStep } = useGuidedTour();
  const previousUnreadCountRef = useRef<number>(notifications.filter((n) => !n.isRead).length);

  const onKebabDropdownSelect = () => setIsKebabDropdownOpen(false);

  const unreadNotificationCount = notifications.filter((n) => !n.isRead).length;

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (unreadNotificationCount > previousUnreadCountRef.current) {
      setShouldNotifyNewNotification(true);
      previousUnreadCountRef.current = unreadNotificationCount;
      timerId = setTimeout(() => setShouldNotifyNewNotification(false), 1200);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [unreadNotificationCount]);

  return (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup align={{ default: 'alignEnd' }}>
          <ToolbarGroup variant="action-group-plain">
            <ToolbarItem visibility={{ default: 'visible' }} selected={isDrawerExpanded}>
              {renderTourStepElement(
                'notificationBadge',
                <NotificationBadge
                  variant={unreadNotificationCount === 0 ? 'read' : 'unread'}
                  onClick={() => setIsDrawerExpanded(!isDrawerExpanded)}
                  aria-label="Notifications"
                  isExpanded={isDrawerExpanded}
                  count={unreadNotificationCount}
                  shouldNotify={shouldNotifyNewNotification}
                />
              )}
            </ToolbarItem>
            <ToolbarGroup variant="action-group-plain">
              <ToolbarItem>
                {renderTourStepElement(
                  'settingsButton',
                  <Button
                    aria-label="Settings actions"
                    className="pf-m-settings"
                    variant={ButtonVariant.plain}
                    icon={<CogIcon />}
                  />
                )}
              </ToolbarItem>
              <ToolbarItem>
                <Dropdown
                  onSelect={() => setIsActionsMenuOpen(false)}
                  isOpen={isActionsMenuOpen}
                  id="help-dropdown"
                  onOpenChange={setIsActionsMenuOpen}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      id="help-menu-toggle"
                      aria-label="help actions"
                      variant="plain"
                      onClick={() => setIsActionsMenuOpen(!isActionsMenuOpen)}
                      isExpanded={isActionsMenuOpen}
                      icon={<QuestionCircleIcon />}
                    />
                  )}
                >
                  <DropdownList>
                    <DropdownItem onClick={() => (tourStep ? onEndGuidedTour() : onStartGuidedTour())}>
                      {tourStep ? 'End guided tour' : 'Guided tour'}
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem
              visibility={{
                default: 'visible',
                lg: 'hidden'
              }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
            >
              <Dropdown
                isOpen={isKebabDropdownOpen}
                onSelect={onKebabDropdownSelect}
                onOpenChange={setIsKebabDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={() => setIsKebabDropdownOpen((prev) => !prev)}
                    variant="plain"
                    aria-label="Settings and help"
                    icon={<EllipsisVIcon />}
                  />
                )}
              >
                <DropdownList>
                  <DropdownItem>
                    <CogIcon /> Settings
                  </DropdownItem>
                  <DropdownItem>
                    <HelpIcon /> Help
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
            </ToolbarItem>
            <ToolbarItem
              visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
            >
              <Dropdown
                isOpen={isDropdownOpen}
                onSelect={() => setIsDropdownOpen(false)}
                onOpenChange={setIsDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                  >
                    Username
                  </MenuToggle>
                )}
              >
                <DropdownList>
                  <DropdownItem key="group 2 profile">My profile</DropdownItem>
                  <DropdownItem key="group 2 user">User management</DropdownItem>
                  <DropdownItem key="group 2 logout">Logout</DropdownItem>
                </DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );
};
