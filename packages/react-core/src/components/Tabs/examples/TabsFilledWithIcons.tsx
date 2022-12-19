import React from 'react';
import { Tabs, Tab, TabTitleText, TabTitleIcon, Checkbox } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';

export const TabsFilledWithIcons: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [isBox, setIsBox] = React.useState<boolean>(false);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  const toggleBox = (checked: boolean) => {
    setIsBox(checked);
  };

  return (
    <div>
      <Tabs
        isFilled
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        isBox={isBox}
        aria-label="Tabs in the filled with icons example"
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
          aria-label="filled tabs with icons content users"
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
      </Tabs>
      <div style={{ marginTop: '20px' }}>
        <Checkbox
          label="isBox"
          isChecked={isBox}
          onChange={toggleBox}
          aria-label="show box variation checkbox with filled icon tabs"
          id="toggle-box-filled-icon"
          name="toggle-box-filled-icon"
        />
      </div>
    </div>
  );
};
