import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
import ProjectDiagramIcon from '@patternfly/react-icons/dist/esm/icons/project-diagram-icon';

export const TabsIconAndText: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <Tabs
      activeKey={activeTabKey}
      onSelect={handleTabClick}
      aria-label="Tabs in the icons and text example"
      role="region"
    >
      <Tab
        eventKey={0}
        title={
          <>
            <TabTitleIcon>
              <UsersIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>Users</TabTitleText>{' '}
          </>
        }
        aria-label="icons and text content"
      >
        Users
      </Tab>
      <Tab
        eventKey={1}
        title={
          <>
            <TabTitleIcon>
              <BoxIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>Containers</TabTitleText>{' '}
          </>
        }
      >
        Containers
      </Tab>
      <Tab
        eventKey={2}
        title={
          <>
            <TabTitleIcon>
              <DatabaseIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>Database</TabTitleText>{' '}
          </>
        }
      >
        Database
      </Tab>
      <Tab
        eventKey={3}
        title={
          <>
            <TabTitleIcon>
              <ServerIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>Server</TabTitleText>{' '}
          </>
        }
      >
        Server
      </Tab>
      <Tab
        eventKey={4}
        title={
          <>
            <TabTitleIcon>
              <LaptopIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>System</TabTitleText>{' '}
          </>
        }
      >
        System
      </Tab>
      <Tab
        eventKey={6}
        title={
          <>
            <TabTitleIcon>
              <ProjectDiagramIcon />
            </TabTitleIcon>{' '}
            <TabTitleText>Network</TabTitleText>{' '}
          </>
        }
      >
        Network
      </Tab>
    </Tabs>
  );
};
