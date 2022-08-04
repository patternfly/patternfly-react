import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import DashboardWrapper from '../../../../../react-core/src/demos/./examples/DashboardWrapper';
import srcImportscrollspywithsubsections from './react-demos/scrollspy-with-subsections.png';
const pageData = {
  "id": "Jump links",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/jump-links/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/JumpLinks.md",
  "fullscreenExamples": [
    "Scrollspy with subsections",
    "With drawer"
  ]
};
pageData.liveContext = {
  DashboardWrapper
};
pageData.examples = {
  'Scrollspy with subsections': props => 
    <Example {...pageData} {...props} thumbnail={srcImportscrollspywithsubsections} {...{"code":"import React from 'react';\nimport {\n  PageSection,\n  JumpLinks,\n  JumpLinksItem,\n  JumpLinksList,\n  PageGroup,\n  Sidebar,\n  SidebarContent,\n  SidebarPanel,\n  Switch,\n  Title,\n  TextContent,\n  getResizeObserver\n} from '@patternfly/react-core';\nimport DashboardWrapper from './examples/DashboardWrapper';\n\nScrollspyH2 = () => {\n  const headings = [1, 2, 3, 4, 5];\n\n  const [isVertical, setIsVertical] = React.useState(true);\n  const [offsetHeight, setOffsetHeight] = React.useState(10);\n\n  // Update offset based on the masthead and jump links nav heights.\n  React.useEffect(() => {\n    const masthead = document.getElementsByClassName('pf-c-masthead')[0];\n    const offsetForPadding = 10;\n\n    getResizeObserver(masthead, () => {\n      if (isVertical) {\n        setOffsetHeight(masthead.offsetHeight + offsetForPadding);\n      } else {\n        // Append jump links nav height to the masthead height when value exists.\n        const jumpLinksHeaderHeight = document.getElementsByClassName('pf-m-sticky')[0].offsetHeight;\n        jumpLinksHeaderHeight && setOffsetHeight(masthead.offsetHeight + jumpLinksHeaderHeight + offsetForPadding);\n      }\n    });\n  }, [isVertical]);\n\n  return (\n    <DashboardWrapper breadcrumb={null} mainContainerId=\"scrollable-element\">\n      <PageSection variant=\"light\">\n        <Title headingLevel=\"h1\" size=\"2xl\">\n          Main title\n        </Title>\n        <Switch\n          id=\"is-vertical\"\n          label=\"Vertical\"\n          labelOff=\"Horizontal\"\n          isChecked={isVertical}\n          onChange={check => setIsVertical(check)}\n        />\n      </PageSection>\n      <PageSection padding={{ default: 'noPadding' }}>\n        <Sidebar hasGutter orientation={!isVertical && 'stack'}>\n          <SidebarPanel variant=\"sticky\">\n            <PageSection>\n              <JumpLinks\n                isVertical={isVertical}\n                isCentered={!isVertical}\n                label=\"Jump to section\"\n                scrollableSelector=\"#scrollable-element\"\n                offset={offsetHeight}\n                expandable={{ default: isVertical ? 'expandable' : 'nonExpandable', md: 'nonExpandable' }}\n                isExpanded\n              >\n                {headings.map(i => (\n                  <JumpLinksItem key={i} href={`#heading-${i}`}>\n                    {`Heading ${i}`}\n                    <JumpLinksList></JumpLinksList>\n                  </JumpLinksItem>\n                ))}\n              </JumpLinks>\n            </PageSection>\n          </SidebarPanel>\n          <SidebarContent hasNoBackground>\n            <PageSection>\n              <TextContent>\n                {headings.map(i => (\n                  <div key={i} style={{ maxWidth: '800px', marginBottom: '32px' }}>\n                    <h2 id={`heading-${i}`} tabIndex={-1}>\n                      {`Heading ${i}`}\n                    </h2>\n                    <p>\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n                      in culpa qui officia deserunt mollit anim id est laborum.\n                    </p>\n                    <br />\n                    <p>\n                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\n                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non\n                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta\n                      nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,\n                      omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis\n                      debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non\n                      recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus\n                      maiores alias consequatur aut perferendis doloribus asperiores repellat.\n                    </p>\n                  </div>\n                ))}\n              </TextContent>\n            </PageSection>\n          </SidebarContent>\n        </Sidebar>\n      </PageSection>\n    </DashboardWrapper>\n  );\n};","title":"Scrollspy with subsections","lang":"js","isFullscreen":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo expands on the previous to show the JumpLinks in a vertical layout with subsections. It scrolls the `}
        
        <PatternflyThemeLink {...{"to":"/components/page"}}>
          {`Page`}
        </PatternflyThemeLink>
        {`'s `}
        
        <code {...{"className":"ws-code"}}>
          {`mainContainerId`}
        </code>
        {` with an `}
        
        <code {...{"className":"ws-code"}}>
          {`offset`}
        </code>
        {` calculated based on the height of the masthead and the nav list when it appears above the content. The headings are given a tab index to allow the jump links to focus on them.`}
      </p>
    </Example>,
  'With drawer': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Button,\n  Drawer,\n  DrawerPanelContent,\n  DrawerContent,\n  DrawerContentBody,\n  DrawerHead,\n  DrawerActions,\n  DrawerCloseButton,\n  JumpLinks,\n  JumpLinksItem,\n  JumpLinksList,\n  PageSection,\n  Sidebar,\n  SidebarContent,\n  SidebarPanel,\n  TextContent,\n  getResizeObserver\n} from '@patternfly/react-core';\nimport DashboardWrapper from '../DashboardWrapper';\n\nexport const JumpLinksWithDrawer = () => {\n  const headings = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];\n\n  const [offsetHeight, setOffsetHeight] = React.useState(0);\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const drawerRef = React.useRef();\n\n  React.useEffect(() => {\n    const masthead = document.getElementsByClassName('pf-c-masthead')[0];\n    const drawerToggleSection = document.getElementsByClassName('pf-c-page__main-section')[0];\n\n    getResizeObserver(masthead, () => {\n      setOffsetHeight(masthead.offsetHeight + drawerToggleSection.offsetHeight);\n    });\n  }, []);\n\n  const onCloseClick = () => {\n    setIsExpanded(false);\n  };\n\n  const onToggleClick = () => {\n    setIsExpanded(!isExpanded);\n  };\n\n  const panelContent = (\n    <DrawerPanelContent>\n      <DrawerHead>\n        <span tabIndex={isExpanded ? 0 : -1} ref={drawerRef}>\n          drawer-panel\n        </span>\n        <DrawerActions>\n          <DrawerCloseButton onClick={onCloseClick} />\n        </DrawerActions>\n      </DrawerHead>\n    </DrawerPanelContent>\n  );\n\n  return (\n    <DashboardWrapper breadcrumb={null} mainContainerId=\"scrollable-element\">\n      <Drawer isExpanded={isExpanded}>\n        <DrawerContent panelContent={panelContent} id=\"jump-links-drawer-drawer-scrollable-container\">\n          <DrawerContentBody hasPadding>\n            <Sidebar>\n              <SidebarPanel variant=\"sticky\">\n                <JumpLinks\n                  isVertical={true}\n                  label=\"Jump to section\"\n                  scrollableSelector=\"#jump-links-drawer-drawer-scrollable-container\"\n                  offset={offsetHeight}\n                  expandable={{ default: 'expandable', md: 'nonExpandable' }}\n                >\n                  {headings.map(heading => (\n                    <JumpLinksItem key={heading} href={`#jump-links-drawer-jump-links-${heading.toLowerCase()}`}>\n                      {`${heading} section`}\n                      <JumpLinksList></JumpLinksList>\n                    </JumpLinksItem>\n                  ))}\n                </JumpLinks>\n              </SidebarPanel>\n              <SidebarContent>\n                <PageSection sticky=\"top\" variant=\"light\">\n                  <Button onClick={onToggleClick}>Toggle drawer</Button>\n                </PageSection>\n                <TextContent>\n                  {headings.map(heading => (\n                    <div key={heading} style={{ maxWidth: '800px', marginBottom: '32px' }}>\n                      <h2 id={`jump-links-drawer-jump-links-${heading.toLowerCase()}`} tabIndex={-1}>\n                        {`${heading} section`}\n                      </h2>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper, dignissim\n                        purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus efficitur vel.\n                        Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut vulputate magna. Nunc\n                        viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac accumsan suscipit,\n                        tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in. Ut enim tellus,\n                        vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae ullamcorper.\n                        Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur porttitor ex nulla.\n                        Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec augue vehicula eros\n                        pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus porttitor nec quam a\n                        accumsan. Nam pretium vitae leo vitae rhoncus.\n                      </p>\n                      <p>\n                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\n                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non\n                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et\n                        dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum\n                        soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere\n                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et\n                        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et\n                        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis\n                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\n                      </p>\n                    </div>\n                  ))}\n                </TextContent>\n              </SidebarContent>\n            </Sidebar>\n          </DrawerContentBody>\n        </DrawerContent>\n      </Drawer>\n    </DashboardWrapper>\n  );\n};\n","title":"With drawer","lang":"js","isFullscreen":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`This demo shows how jump links can be used in combination with a drawer.`}
      </p>
      
      <p {...{"className":"ws-p"}}>
        {`The `}
        
        <code {...{"className":"ws-code"}}>
          {`scrollableSelector`}
        </code>
        {` prop passed to the jump links component is an `}
        
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` that was placed on the `}
        
        <code {...{"className":"ws-code"}}>
          {`DrawerContent`}
        </code>
        {` component.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`JumpLinks has a scrollspy built-in to make your implementation easier. When implementing JumpLinks be sure to:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Find the correct `}
        <code {...{"className":"ws-code"}}>
          {`scrollableSelector`}
        </code>
        {` for your page via `}
        <PatternflyThemeLink {...{"to":"https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow"}}>
          {`Firefox's debugging scrollable overflow`}
        </PatternflyThemeLink>
        {` or by adding `}
        <code {...{"className":"ws-code"}}>
          {`hasOverflowScroll`}
        </code>
        {` to a `}
        <PatternflyThemeLink {...{"to":"/components/page#pagesection"}}>
          {`PageSection`}
        </PatternflyThemeLink>
        {` or `}
        <PatternflyThemeLink {...{"to":"/components/page#pagegroup"}}>
          {`PageGroup`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide `}
        <code {...{"className":"ws-code"}}>
          {`href`}
        </code>
        {`s to your JumpLinksItems which match the `}
        <code {...{"className":"ws-code"}}>
          {`id`}
        </code>
        {` of elements you want to spy on. If you wish to scroll to a different item than you're linking to use the `}
        <code {...{"className":"ws-code"}}>
          {`node`}
        </code>
        {` prop.`}
      </li>
    </ol>
    {React.createElement(pageData.examples["Scrollspy with subsections"])}
    {React.createElement(pageData.examples["With drawer"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsJumpLinksReactDemosDocs';
Component.pageData = pageData;

export default Component;
