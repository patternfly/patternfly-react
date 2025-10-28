import { useRef, useState } from 'react';
import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassPanel,
  CompassMessageBar,
  Tabs,
  TabsComponent,
  Tab,
  TabContent,
  TabTitleText,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Title
} from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

export const CompassBasic: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubtab, setActiveSubtab] = useState<number>(0);
  const subTabsRef = useRef<HTMLDivElement>(null);

  const navContent = (
    <>
      <CompassPanel isPill hasNoPadding>
        <Tabs
          activeKey={activeTab}
          isNav
          onSelect={(_event, tabIndex) => setActiveTab(tabIndex as number)}
          component={TabsComponent.nav}
          aria-label="Compass navigation tabs"
          inset={{ default: 'insetXl' }}
        >
          <Tab
            tabContentId="subtabs"
            tabContentRef={subTabsRef}
            eventKey={0}
            title={<TabTitleText>Tab 1</TabTitleText>}
            aria-label="Compass tab with subtabs"
          />
          <Tab eventKey={1} title={<TabTitleText>Tab 2</TabTitleText>} />
          <Tab eventKey={2} title={<TabTitleText>Tab 3</TabTitleText>} />
          <Tab eventKey={3} title={<TabTitleText>Disabled Tab 4</TabTitleText>} isDisabled />
        </Tabs>
      </CompassPanel>
      <CompassPanel isPill hasNoPadding>
        <TabContent id="subtabs" ref={subTabsRef}>
          <Tabs
            activeKey={activeSubtab}
            isSubtab
            isNav
            onSelect={(_event, tabIndex) => setActiveSubtab(tabIndex as number)}
            aria-label="Compass navigation subtabs"
            inset={{ default: 'insetXl' }}
          >
            <Tab
              tabContentId="subtab-1"
              eventKey={0}
              title={
                <TabTitleText>
                  <div id="subtab-1">Subtab 1</div>
                </TabTitleText>
              }
            />
            <Tab eventKey={1} title={<TabTitleText>Subtab 2</TabTitleText>} />
            <Tab eventKey={2} title={<TabTitleText>Disabled Subtab 3</TabTitleText>} isDisabled />
          </Tabs>
        </TabContent>
      </CompassPanel>
    </>
  );

  const sidebarContent = (
    <CompassPanel isPill>
      <ActionList isIconList className="pf-m-vertical" /* isVertical */>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="plain" icon={<PlayIcon />} aria-label="Play" />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" />
          </ActionListItem>
        </ActionListGroup>
        <ActionListItem>
          <Button variant="plain" icon={<OutlinedCopy />} aria-label="Copy" />
        </ActionListItem>
        <ActionListGroup>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help" />
          </ActionListItem>
          <ActionListItem>
            <Button variant="plain" icon={<OutlinedCopy />} aria-label="Copy" />
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const headerContent = <CompassHeader logo={<div>logo</div>} nav={navContent} profile={<div>Profile</div>} />;
  const sidebarStartContent = sidebarContent;
  const mainContent = (
    <>
      <CompassHero gradientDark={{ stop1: '#000', stop2: '#1b0d33', stop3: '#3d2785' }}>
        <div>Hero</div>
      </CompassHero>
      <CompassMainHeader title={<Title headingLevel="h1">Content title</Title>} />
      <CompassContent>
        <CompassPanel>Content</CompassPanel>
      </CompassContent>
    </>
  );
  const sidebarEndContent = sidebarContent;
  const footerContent = (
    <CompassMessageBar>
      <CompassPanel isPill hasNoPadding>
        Message bar
      </CompassPanel>
    </CompassMessageBar>
  );

  return (
    <Compass
      header={headerContent}
      sidebarStart={sidebarStartContent}
      main={mainContent}
      sidebarEnd={sidebarEndContent}
      footer={footerContent}
      backgroundSrcDark="https://i.imgur.com/km6oyPo.jpeg"
    />
  );
};
