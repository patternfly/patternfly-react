import React from 'react';
import {
  Button,
  Drawer,
  DrawerPanelContent,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
  Sidebar,
  SidebarContent,
  SidebarPanel,
  TextContent,
  getResizeObserver
} from '@patternfly/react-core';
import DashboardWrapper from '../DashboardWrapper';

export const JumpLinksWithDrawer = () => {
  const headings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const drawerRef = React.useRef();

  React.useEffect(() => {
    const masthead = document.getElementsByClassName('pf-c-masthead')[0];

    getResizeObserver(masthead, () => {
      setOffsetHeight(masthead.offsetHeight);
    });
  }, []);

  const onCloseClick = () => {
    setIsExpanded(false);
  };

  const onToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const panelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>
          drawer-panel
        </span>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
    </DrawerPanelContent>
  );

  return (
    <DashboardWrapper breadcrumb={null} mainContainerId="scrollable-element">
      <Drawer isExpanded={isExpanded}>
        <DrawerContent panelContent={panelContent} id="jump-links-drawer-drawer-scrollable-container">
          <DrawerContentBody>
            <DrawerContentBody hasPadding>
              <Sidebar>
                <SidebarPanel variant="sticky">
                  <JumpLinks
                    isVertical={true}
                    label="Jump to section"
                    scrollableSelector="#jump-links-drawer-drawer-scrollable-container"
                    offset={offsetHeight}
                    expandable={{ default: 'expandable', md: 'nonExpandable' }}
                  >
                    {headings.map(heading => (
                      <JumpLinksItem key={heading} href={`#jump-links-drawer-jump-links-${heading.toLowerCase()}`}>
                        {`${heading} section`}
                        <JumpLinksList></JumpLinksList>
                      </JumpLinksItem>
                    ))}
                  </JumpLinks>
                </SidebarPanel>
                <SidebarContent>
                  <Button onClick={onToggleClick}>Toggle drawer</Button>
                  <TextContent>
                    {headings.map(heading => (
                      <div key={heading}>
                        <h2 id={`jump-links-drawer-jump-links-${heading.toLowerCase()}`} tabIndex={-1}>
                          {`${heading} section`}
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper,
                          dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus
                          efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut
                          vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac
                          accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in.
                          Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae
                          ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur
                          porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec
                          augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus
                          porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.
                        </p>
                      </div>
                    ))}
                  </TextContent>
                </SidebarContent>
              </Sidebar>
            </DrawerContentBody>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </DashboardWrapper>
  );
};
