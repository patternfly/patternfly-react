import { useEffect, useState } from 'react';
import {
  PageSection,
  JumpLinks,
  JumpLinksItem,
  JumpLinksList,
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

export const JumpLinksScrollspy: React.FunctionComponent = () => {
  const headings = [1, 2, 3, 4, 5];

  const [isVertical, setIsVertical] = useState(true);
  const [offsetHeight, setOffsetHeight] = useState(10);
  const offsetForPadding = 10;

  // Update offset based on the masthead and jump links nav heights.
  useEffect(() => {
    const masthead = document.getElementsByClassName(mastheadStyles.masthead)[0];

    if (isVertical) {
      setOffsetHeight(masthead.offsetHeight + offsetForPadding);
    } else {
      // Append jump links nav height to the masthead height when value exists.
      const jumpLinksHeaderHeight = document.getElementsByClassName('pf-m-sticky')[0].offsetHeight;
      jumpLinksHeaderHeight && setOffsetHeight(masthead.offsetHeight + jumpLinksHeaderHeight + offsetForPadding);
    }

    const observer = getResizeObserver(
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

    return () => observer();
  }, [isVertical]);

  return (
    <DashboardWrapper breadcrumb={null} mainContainerId="scrollable-element">
      <PageSection aria-labelledby="main-title">
        <Title headingLevel="h1" size="2xl" id="main-title">
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
            <PageSection aria-label="Jump links navigation">
              <JumpLinks
                isVertical={isVertical}
                isCentered={!isVertical}
                label="Jump to section"
                scrollableSelector=".pf-v6-c-page__main-container"
                offset={offsetHeight}
                expandable={{ default: isVertical ? 'expandable' : 'nonExpandable', md: 'nonExpandable' }}
                isExpanded
              >
                {headings.map((i) => (
                  <JumpLinksItem key={i} href={`#heading-${i}`}>
                    {`Heading ${i}`}
                    <JumpLinksList></JumpLinksList>
                  </JumpLinksItem>
                ))}
              </JumpLinks>
            </PageSection>
          </SidebarPanel>
          <SidebarContent hasNoBackground>
            <PageSection aria-label="Main content">
              <Content>
                {headings.map((i) => (
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
