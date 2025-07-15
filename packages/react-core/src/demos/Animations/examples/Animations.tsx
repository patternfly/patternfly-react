import { useRef, useState, useEffect, FunctionComponent, FormEvent, useCallback } from 'react';
import {
  AlertGroup,
  Alert,
  AlertVariant,
  Brand,
  Button,
  Content,
  Card,
  ContentVariants,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  Label,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle,
  MastheadContent,
  MastheadLogo,
  Nav,
  NavItem,
  NavList,
  NavExpandable,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
  Tabs,
  Tab,
  TabTitleText
} from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import SkeletonTable from '@patternfly/react-component-groups/dist/dynamic/SkeletonTable';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
// @ts-ignore
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.PF-HorizontalLogo-Color.svg';
import { Application, NotificationType } from '../types';
import { AnimationsOverview } from '../AnimationsOverview';
import { AnimationsNotificationsDrawer } from '../AnimationsNotificationsDrawer';
import { AnimationsCreateDatabaseForm } from '../AnimationsCreateDatabaseForm';
import { GuidedTourProvider, useGuidedTour } from '../GuidedTourContext';
import { AnimationsHeaderToolbar } from '../AnimationsHeaderToolbar';
import { AnimationsTourModal } from '../AnimationsTourModal';
import { applicationsData } from './ResourceTableData';

const mainContainerPageId = 'main-content-page-layout-default-nav';
const expandableColumns = ['Applications', 'Server', 'Branch', 'Status'];
const initialExpandedServerNames = ['Cost Management']; // Default to expanded

export const GuidedTourSteps = [
  {
    stepId: 'settingsButton',
    header: <div>Cog Button</div>,
    content: (
      <>
        <Content component="p">Hover over the cog. Notice the settings cog with it's little rotation.</Content>
        <Content component="p">Click on the button and you can also see the new ripple effect on buttons</Content>
      </>
    )
  },
  {
    stepId: 'navToggle',
    header: <div>Masthead hamburger menu</div>,
    content: (
      <>
        <Content component="p">
          One more icon animation is the new hamburger menu with a slick little directional arrow.
        </Content>
        <Content component="p">Collapse and then expand hamburger to see this animation in action.</Content>
      </>
    )
  },
  {
    stepId: 'notificationBadge',
    header: <div>Notification badge</div>,
    content: (
      <>
        <Content component="p">
          Another animation is for the notification badge when a new notification arrives.
        </Content>
        <Content component="p">Watch the notification badge to see it ring when the notification is received.</Content>
      </>
    )
  }
];

const AnimationsPage: FunctionComponent = () => {
  const drawerRef = useRef<HTMLElement | null>(null);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      id: 'notification-1',
      title: 'Unread info notification title',
      message: 'This is an info notification description.',
      variant: AlertVariant.info,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: false
    },
    {
      id: 'notification-2',
      title:
        'Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines.',
      message:
        'This is a danger notification description. This is a long description to show how the title will wrap if it is long and wraps to multiple lines.',
      variant: AlertVariant.danger,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    },
    {
      id: 'notification-3',
      title: 'Read warning notification title',
      message: 'This is a warning notification description.',
      variant: AlertVariant.warning,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    },
    {
      id: 'notification-4',
      title: 'Read success notification title',
      message: 'This is a success notification description.',
      variant: AlertVariant.success,
      timeout: 3000,
      timeoutAnimation: 3000,
      isNew: false,
      isRead: true
    }
  ]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showTourModal, setShowTourModal] = useState(true);
  const [activeItem, setActiveItem] = useState<number | string>(0);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const { onStart, renderTourStepElement, setCustomStepContent, tourStep } = useGuidedTour();

  const addNotification = useCallback((showToast = true) => {
    setNotifications((prev) => [
      {
        id: `new-notification-${prev.length + 1}`,
        title: 'Animated notification',
        message: 'A system alert has been triggered. Please review the alert details.',
        variant: AlertVariant.danger,
        timeout: 3000,
        timeoutAnimation: 3000,
        isNew: showToast,
        isRead: false
      },
      ...prev
    ]);
  }, []);

  useEffect(() => {
    if (tourStep?.stepId === 'notificationBadge') {
      setCustomStepContent(
        <>
          <Content component="p">
            Another animation is for the notification badge when a new notification arrives.
          </Content>
          <Content component="p">Watch the notification badge to see it ring when a notification is received.</Content>
          <Content component="p">
            <Button variant="link" isInline onClick={() => addNotification(false)}>
              Add notification
            </Button>
          </Content>
        </>
      );
    }
  }, [tourStep?.stepId, setCustomStepContent, addNotification]);

  const startNotifications = () => {
    setTimeout(() => {
      addNotification();
    }, 1000);
    setTimeout(() => {
      addNotification();
    }, 5000);
    setTimeout(() => {
      addNotification();
    }, 9000);
  };

  const onNavSelect = (
    _event: FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string | null;
      itemId: number | string;
      to: string;
    }
  ) => {
    setActiveItem(selectedItem.itemId);
    setActiveGroup(selectedItem.groupId as string | null);
  };

  const focusDrawer = (_event: any) => {
    if (drawerRef.current === null) {
      return;
    }
    const firstTabbableItem = drawerRef.current.querySelector('a, button') as
      | HTMLAnchorElement
      | HTMLButtonElement
      | null;
    firstTabbableItem?.focus();
  };

  const closeTourModal = (startTour = false) => {
    setShowTourModal(false);
    startTour ? onStart() : startNotifications();
  };

  return (
    <Page
      masthead={
        <Masthead>
          <MastheadMain>
            <MastheadToggle>
              {renderTourStepElement(
                'navToggle',
                <PageToggleButton variant="plain" aria-label="Global navigation" isHamburgerButton isExpanded />
              )}
            </MastheadToggle>
            <MastheadBrand>
              <MastheadLogo>
                <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
              </MastheadLogo>
            </MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <AnimationsHeaderToolbar
              notifications={notifications}
              isDrawerExpanded={isDrawerExpanded}
              setIsDrawerExpanded={setIsDrawerExpanded}
              onStartGuidedTour={() => setShowTourModal(true)}
            />
          </MastheadContent>
        </Masthead>
      }
      sidebar={
        <PageSidebar>
          <PageSidebarBody>
            <Nav onSelect={onNavSelect} aria-label="Sidebar navigation">
              <NavList>
                <NavItem
                  preventDefault
                  id="dashboard"
                  to="#dashboard"
                  itemId="dashboard"
                  isActive={activeItem === 'dashboard'}
                >
                  Dashboard
                </NavItem>
                <NavExpandable title="Resources" groupId="resources-group" isActive={activeGroup === 'resources-group'}>
                  <NavItem
                    preventDefault
                    id="overview"
                    to="#overview"
                    groupId="resources-group"
                    itemId="overview"
                    isActive={activeItem === 'overview'}
                  >
                    Overview
                  </NavItem>
                  <NavItem
                    preventDefault
                    id="health"
                    to="#health"
                    groupId="resources-group"
                    itemId="health"
                    isActive={activeItem === 'health'}
                  >
                    Health
                  </NavItem>
                </NavExpandable>
              </NavList>
            </Nav>
          </PageSidebarBody>
        </PageSidebar>
      }
      isManagedSidebar
      notificationDrawer={
        <AnimationsNotificationsDrawer
          notifications={notifications}
          updateNotifications={setNotifications}
          onClose={() => setIsDrawerExpanded(false)}
        />
      }
      onNotificationDrawerExpand={(event) => focusDrawer(event)}
      isNotificationDrawerExpanded={isDrawerExpanded}
      skipToContent={
        <SkipToContent
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();

            const mainContentElement = document.getElementById(mainContainerPageId);
            if (mainContentElement) {
              mainContentElement.focus();
            }
          }}
          href={`#${mainContainerPageId}`}
        >
          Skip to content
        </SkipToContent>
      }
      mainContainerId={mainContainerPageId}
    >
      <PageSection aria-labelledby="main-title">
        <AlertGroup hasAnimations isToast isLiveRegion>
          {notifications
            .filter((n) => n.isNew)
            .map((alert) => (
              <Alert
                key={alert.id}
                variant={alert.variant}
                title={alert.title}
                timeout={alert.timeout}
                timeoutAnimation={alert.timeoutAnimation}
                onTimeout={() => {
                  setNotifications((prev) =>
                    prev.reduce((acc, next) => {
                      if (next.id === alert.id) {
                        acc.push({ ...next, isNew: false });
                      } else {
                        acc.push(next);
                      }
                      return acc;
                    }, [])
                  );
                }}
              >
                {alert.message}
              </Alert>
            ))}
        </AlertGroup>
        <Content component={ContentVariants.h1}>Resources</Content>
        <Content className="pf-v6-u-mb-md">Everything you need to know about your application</Content>
        <Tabs activeKey={selectedTab} onSelect={(_e, key) => setSelectedTab(Number(key))} aria-label="Primary tabs">
          <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} tabContentId="overview" />
          <Tab eventKey={1} title={<TabTitleText>Resources</TabTitleText>} tabContentId="resources" />
          <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} tabContentId="database" />
        </Tabs>
      </PageSection>
      {selectedTab === 0 && <AnimationsOverview />}

      {selectedTab === 1 && (
        <PageSection id="resources">
          <AnimationsResourcesTable />
        </PageSection>
      )}

      {selectedTab === 2 && (
        <PageSection>
          {showForm ? (
            <AnimationsCreateDatabaseForm onClose={() => setShowForm(false)} />
          ) : (
            <EmptyState titleText="No databases found" headingLevel="h4" icon={SearchIcon}>
              <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
              <EmptyStateFooter>
                <EmptyStateActions>
                  <Button variant="primary" onClick={() => setShowForm(true)}>
                    Create a database
                  </Button>
                </EmptyStateActions>
              </EmptyStateFooter>
            </EmptyState>
          )}
        </PageSection>
      )}
      {showTourModal ? <AnimationsTourModal onClose={closeTourModal} /> : null}
    </Page>
  );
};

// Can't break this into a separate file, seems we need to stay in the examples dir when using '@patternfly/react-table'
const AnimationsResourcesTable: FunctionComponent = () => {
  const [areAllExpanded, setAreAllExpanded] = useState(false);
  const [collapseAllAriaLabel, setCollapseAllAriaLabel] = useState('Expand all');
  const [expandedAppNames, setExpandedAppNames] = useState(initialExpandedServerNames);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const allExpanded = expandedAppNames.length === applicationsData.length;
    setAreAllExpanded(allExpanded);
    setCollapseAllAriaLabel(allExpanded ? 'Collapse all' : 'Expand all');
  }, [expandedAppNames]);

  const setAppExpanded = (app: Application, isExpanding: boolean) => {
    const others = expandedAppNames.filter((n) => n !== app.name);
    setExpandedAppNames(isExpanding ? [...others, app.name] : others);
  };

  const isAppExpanded = (app: Application) => expandedAppNames.includes(app.name);

  const onCollapseAll = (_event: any, _rowIndex: number, isOpen: boolean) => {
    setExpandedAppNames(isOpen ? applicationsData.map((app) => app.name) : []);
  };

  return (
    <Card component="div">
      {loading ? (
        <SkeletonTable columns={['', ...expandableColumns]} rows={8} />
      ) : (
        <Table aria-label="Collapsible table" isExpandable hasAnimations>
          <Thead>
            <Tr>
              <Th
                expand={{
                  areAllExpanded: !areAllExpanded,
                  collapseAllAriaLabel,
                  onToggle: onCollapseAll
                }}
                aria-label="Row expansion"
              />
              {expandableColumns.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Tr>
          </Thead>

          {applicationsData.map((app, idx) => (
            <Tbody key={app.name} isExpanded={isAppExpanded(app)}>
              <Tr isExpanded={isAppExpanded(app)}>
                <Td
                  expand={
                    app.details
                      ? {
                          rowIndex: idx,
                          isExpanded: isAppExpanded(app),
                          onToggle: () => setAppExpanded(app, !isAppExpanded(app))
                        }
                      : undefined
                  }
                />
                <Td>{app.name}</Td>
                <Td>{app.header}</Td>
                <Td>{app.branch}</Td>
                <Td>
                  {app.status === 'Running' && <Label status="success">Running</Label>}
                  {app.status === 'Degraded' && <Label status="warning">Degraded</Label>}
                  {app.status === 'Stopped' && <Label status="danger">Stopped</Label>}
                  {app.status !== 'Running' && app.status !== 'Degraded' && app.status !== 'Stopped' && app.status}
                </Td>
              </Tr>
              <Tr isExpandable isExpanded={isAppExpanded(app)}>
                <Td />
                <Td colSpan={expandableColumns.length}>
                  <ExpandableRowContent>{app.details}</ExpandableRowContent>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      )}
    </Card>
  );
};

export const Animations: FunctionComponent = () => (
  <GuidedTourProvider steps={GuidedTourSteps}>
    <AnimationsPage />
  </GuidedTourProvider>
);
