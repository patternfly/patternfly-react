import {
  Compass,
  CompassHeader,
  CompassHero,
  CompassContent,
  CompassMainHeader,
  CompassSection,
  Tabs,
  TabsComponent,
  Tab,
  TabTitleText,
  ActionList,
  ActionListGroup,
  ActionListItem,
  Button,
  Title,
  SearchInput
} from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

export const CompassBasic: React.FunctionComponent = () => {
  const subTabs = (
    <CompassSection>
      <Tabs activeKey={0} isSubtab onSelect={() => {}} aria-label="Compass navigation subtabs">
        <Tab eventKey={0} title={<TabTitleText>Subtab 1</TabTitleText>} />
        <Tab eventKey={1} title={<TabTitleText>Subtab 2</TabTitleText>} />
        <Tab eventKey={2} title={<TabTitleText>Disabled Subtab 3</TabTitleText>} isDisabled />
      </Tabs>
    </CompassSection>
  );

  const navContent = (
    <CompassSection>
      <Tabs activeKey={0} onSelect={() => {}} component={TabsComponent.nav} aria-label="Compass navigation tabs">
        <Tab eventKey={0} title={<TabTitleText>Tab 1</TabTitleText>} aria-label="Compass tab with subtabs">
          {subTabs}
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Tab 2</TabTitleText>} />
        <Tab eventKey={2} title={<TabTitleText>Tab 3</TabTitleText>} />
        <Tab eventKey={3} title={<TabTitleText>Disabled Tab 4</TabTitleText>} isDisabled />
      </Tabs>
    </CompassSection>
  );

  const panelContent = (
    <CompassSection isPill>
      <ActionList>
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
    </CompassSection>
  );

  const headerContent = <CompassHeader logo={<div>Logo</div>} nav={navContent} profile={<div>Profile</div>} />;
  const panelStartContent = panelContent;
  const mainContent = (
    <>
      <CompassHero>
        <div>Hero</div>
      </CompassHero>
      <CompassContent>
        <CompassMainHeader title={<Title headingLevel="h1">Content title</Title>} />
        <CompassSection>Content</CompassSection>
      </CompassContent>
    </>
  );
  const panelEndContent = panelContent;
  const footerContent = (
    <CompassSection>
      <SearchInput aria-label="Search input" placeholder="Search" />
    </CompassSection>
  );

  return (
    <Compass
      header={headerContent}
      panelStart={panelStartContent}
      main={mainContent}
      panelEnd={panelEndContent}
      footer={footerContent}
    />
  );
};
