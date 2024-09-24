---
id: Jump links
section: components
---

import mastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead';
import breadcrumbStyles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

## Demos

JumpLinks has a scrollspy built-in to make your implementation easier. When implementing JumpLinks be sure to:

1. Find the correct scrollable element for your page via [Firefox's debugging scrollable overflow](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow) or by adding `hasOverflowScroll` to a [PageSection](/components/page#pagesection) or [PageGroup](/components/page#pagegroup).
   - If you add `hasOverflowScroll` to a Page sub-component you should also add a relevant aria-label to that component as well.
2. Provide a reference to the scrollable element to `scrollableRef` prop or a CSS selector of the scrollable element to `scrollableSelector` prop.
3. Provide `href`s to your JumpLinksItems which match the `id` of elements you want to spy on. If you wish to scroll to a different item than you're linking to use the `node` prop.

### Scrollspy with subsections

This demo expands on the previous to show the JumpLinks in a vertical layout with subsections. It scrolls the [Page](/components/page)'s `mainContainerId` with an `offset` calculated based on the height of the masthead and the nav list when it appears above the content. The headings are given a tab index to allow the jump links to focus on them.

```js isFullscreen
import React from 'react';
import {
  PageSection,
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
  PageGroup,
  Sidebar,
  SidebarContent,
  SidebarPanel,
  Switch,
  Title,
  Content,
  getResizeObserver
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import mastheadStyles from '@patternfly/react-styles/css/components/Masthead/masthead';

ScrollspyH2 = () => {
  const headings = [1, 2, 3, 4, 5];

  const [isVertical, setIsVertical] = React.useState(true);
  const [offsetHeight, setOffsetHeight] = React.useState(10);
  const offsetForPadding = 10;
  let masthead;

  // Update offset based on the masthead and jump links nav heights.
  React.useEffect(() => {
    masthead = document.getElementsByClassName(mastheadStyles.masthead)[0];

    if (isVertical) {
      setOffsetHeight(masthead.offsetHeight + offsetForPadding);
    } else {
      // Append jump links nav height to the masthead height when value exists.
      const jumpLinksHeaderHeight = document.getElementsByClassName('pf-m-sticky')[0].offsetHeight;
      jumpLinksHeaderHeight && setOffsetHeight(masthead.offsetHeight + jumpLinksHeaderHeight + offsetForPadding);
    }

    
  }, [isVertical]);

  getResizeObserver(
    document.getElementsByClassName(mastheadStyles.masthead)[0],
    () => {
      if (isVertical) {
        setOffsetHeight(masthead.offsetHeight + offsetForPadding);
      } else {
        // Append jump links nav height to the masthead height when value exists.
        const jumpLinksHeaderHeight = document.getElementsByClassName('pf-m-sticky')[0].offsetHeight;
        jumpLinksHeaderHeight && setOffsetHeight(masthead.offsetHeight + jumpLinksHeaderHeight + offsetForPadding);
      }
    },
    true
  );

  return (
    <DashboardWrapper breadcrumb={null} mainContainerId="scrollable-element">
      <PageSection>
        <Title headingLevel="h1" size="2xl">
          Main title
        </Title>
        <Switch
          id="is-vertical"
          label="Vertical jump links"
          isChecked={isVertical}
          onChange={(_event, check) => setIsVertical(check)}
        />
      </PageSection>
      <PageSection padding={{ default: 'noPadding' }}>
        <Sidebar hasGutter orientation={!isVertical && 'stack'}>
          <SidebarPanel variant="sticky">
            <PageSection>
              <JumpLinks
                isVertical={isVertical}
                isCentered={!isVertical}
                label="Jump to section"
                scrollableSelector=".pf-v6-c-page__main-container"
                offset={offsetHeight}
                expandable={{ default: isVertical ? 'expandable' : 'nonExpandable', md: 'nonExpandable' }}
                isExpanded
              >
                {headings.map(i => (
                  <JumpLinksItem key={i} href={`#heading-${i}`}>
                    {`Heading ${i}`}
                    <JumpLinksList></JumpLinksList>
                  </JumpLinksItem>
                ))}
              </JumpLinks>
            </PageSection>
          </SidebarPanel>
          <SidebarContent hasNoBackground>
            <PageSection>
              <Content>
                {headings.map(i => (
                  <div key={i} style={{ maxWidth: '800px', marginBottom: '32px' }}>
                    <h2 id={`heading-${i}`} tabIndex={-1}>
                      {`Heading ${i}`}
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                      provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                      fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                      nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                      maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                ))}
              </Content>
            </PageSection>
          </SidebarContent>
        </Sidebar>
      </PageSection>
    </DashboardWrapper>
  );
};
```

### With drawer

This demo shows how jump links can be used in combination with a drawer.

This demo uses a `scrollableRef` prop on the JumpLinks component, which is a React ref to the `DrawerContent` component.

```js isFullscreen file="./examples/JumpLinks/JumpLinksWithDrawer.js"
```
