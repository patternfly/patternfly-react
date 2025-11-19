/* eslint-disable no-console */

import { useRef, useState } from 'react';
import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassPanel,
  CompassMessageBar,
  CompassNavContent,
  CompassNavHome,
  CompassNavMain,
  CompassNavSearch,
  Hero,
  Tabs,
  TabsComponent,
  Tab,
  TabContent,
  TabTitleText,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Title,
  Tooltip
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
      <CompassPanel isPill>
        <CompassNavContent>
          <CompassNavHome onClick={() => console.log('Home')} />
          <CompassNavMain>
            <Tabs
              activeKey={activeTab}
              isNav
              onSelect={(_event, tabIndex) => setActiveTab(tabIndex as number)}
              component={TabsComponent.nav}
              aria-label="Compass navigation tabs"
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
          </CompassNavMain>
          <CompassNavSearch onClick={() => console.log('Search')} />
        </CompassNavContent>
      </CompassPanel>
      <CompassPanel isPill hasNoPadding>
        <TabContent id="subtabs" ref={subTabsRef}>
          <CompassNavContent>
            <CompassNavMain>
              <Tabs
                activeKey={activeSubtab}
                isSubtab
                isNav
                onSelect={(_event, tabIndex) => setActiveSubtab(tabIndex as number)}
                aria-label="Compass navigation subtabs"
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
            </CompassNavMain>
          </CompassNavContent>
        </TabContent>
      </CompassPanel>
    </>
  );

  const sidebarContent = (
    <CompassPanel isPill>
      <ActionList isIconList isVertical>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Play">
              <Button isCircle variant="plain" icon={<PlayIcon />} aria-label="Play" />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Add">
              <Button isCircle variant="plain" icon={<OutlinedPlusSquare />} aria-label="Add" />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
        <ActionListItem>
          <Tooltip content="Copy">
            <Button isCircle variant="plain" icon={<OutlinedCopy />} aria-label="Copy" />
          </Tooltip>
        </ActionListItem>
        <ActionListGroup>
          <ActionListItem>
            <Tooltip content="Help">
              <Button isCircle variant="plain" icon={<OutlinedQuestionCircleIcon />} aria-label="Help" />
            </Tooltip>
          </ActionListItem>
          <ActionListItem>
            <Tooltip content="Second copy">
              <Button isCircle variant="plain" icon={<OutlinedCopy />} aria-label="Copy2" />
            </Tooltip>
          </ActionListItem>
        </ActionListGroup>
      </ActionList>
    </CompassPanel>
  );

  const headerContent = <CompassHeader logo={<div>logo</div>} nav={navContent} profile={<div>Profile</div>} />;
  const sidebarStartContent = sidebarContent;
  const mainContent = (
    <>
      <CompassHero>
        <Hero gradientDark={{ stop1: '#000', stop2: '#1b0d33', stop3: '#3d2785' }}>Hero</Hero>
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
      backgroundSrcDark="/assets/images/pf-background.svg"
      backgroundSrcLight="/assets/images/pf-background.svg"
    />
  );
};
