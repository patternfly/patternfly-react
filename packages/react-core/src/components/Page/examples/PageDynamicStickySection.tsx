import { useLayoutEffect, useState, useRef } from 'react';
import {
  Page,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Breadcrumb,
  BreadcrumbItem,
  Content
} from '@patternfly/react-core';

const useIsStuckFromScrollParent = ({
  shouldTrack,
  scrollParentRef
}: {
  shouldTrack: boolean;
  scrollParentRef: React.RefObject<any>;
}): boolean => {
  const [isStuck, setIsStuck] = useState(false);

  useLayoutEffect(() => {
    if (!shouldTrack) {
      setIsStuck(false);
      return;
    }

    const scrollElement = scrollParentRef.current;
    if (!scrollElement) {
      setIsStuck(false);
      return;
    }

    const syncFromScroll = () => {
      setIsStuck(scrollElement.scrollTop > 0);
    };
    syncFromScroll();
    scrollElement.addEventListener('scroll', syncFromScroll, { passive: true });
    return () => scrollElement.removeEventListener('scroll', syncFromScroll);
  }, [shouldTrack, scrollParentRef]);

  return isStuck;
};

export const PageDynamicStickySection: React.FunctionComponent = () => {
  const scrollParentRef = useRef<HTMLDivElement>(null);
  const isStickyStuck = useIsStuckFromScrollParent({ shouldTrack: true, scrollParentRef });

  const headerToolbar = (
    <Toolbar id="dynamic-sticky-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadBrand>
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  return (
    <Page masthead={masthead}>
      <div ref={scrollParentRef} style={{ overflowY: 'auto', height: '100%' }}>
        <PageSection type="breadcrumb" stickyBase="top" isStickyStuck={isStickyStuck}>
          <Breadcrumb>
            <BreadcrumbItem>Section home</BreadcrumbItem>
            <BreadcrumbItem to="#">Section title</BreadcrumbItem>
            <BreadcrumbItem to="#" isActive>
              Section landing
            </BreadcrumbItem>
          </Breadcrumb>
        </PageSection>
        <PageSection>
          <Content>
            <h1>Main title</h1>
            <p>
              Scroll the container to see the breadcrumb section above dynamically apply its stuck styling. The section
              uses <code>stickyBase=&quot;top&quot;</code> to remain fixed at the top of the scroll parent, and{' '}
              <code>isStickyStuck</code> is toggled via a scroll event listener to apply visual styling when the section
              is no longer at the top edge.
            </p>
          </Content>
        </PageSection>
        {Array.from({ length: 30 }, (_, i) => (
          <PageSection key={i} variant={i % 2 === 0 ? 'default' : 'secondary'}>
            <Content>
              <p>{`Section ${i + 1} content`}</p>
            </Content>
          </PageSection>
        ))}
      </div>
    </Page>
  );
};
