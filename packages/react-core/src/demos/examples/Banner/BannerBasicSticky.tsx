import { Fragment } from 'react';
import { Banner, Card, CardBody, Flex, Gallery, GalleryItem, PageSection, Content } from '@patternfly/react-core';

import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { css } from '@patternfly/react-styles';
import display from '@patternfly/react-styles/css/utilities/Display/display';

export const BannerBasicSticky: React.FunctionComponent = () => {
  const banner = (
    <Banner isSticky>
      <Flex
        justifyContent={{ default: 'justifyContentCenter', lg: 'justifyContentSpaceBetween' }}
        flexWrap={{ default: 'nowrap' }}
      >
        <div className={css(display.displayNone, display.displayBlockOnLg)}>Localhost</div>

        <div className={css(display.displayNone, display.displayBlockOnLg)}>
          This message is sticky to the top of the page.
        </div>

        <div className={css(display.displayNoneOnLg)}>Drop some text on mobile, truncate if needed.</div>

        <div className={css(display.displayNone, display.displayBlockOnLg)}>Ned Username</div>
      </Flex>
    </Banner>
  );

  return (
    <Fragment>
      <DashboardWrapper banner={banner} breadcrumb={null}>
        <PageSection aria-labelledby="main-title">
          <Content>
            <h1 id="main-title">Main title</h1>
            <p>
              Body text should be Red Hat Text at 1rem (16px). It should have leading of 1.5rem (24px) because <br />
              of its relative line height of 1.5.
            </p>
          </Content>
        </PageSection>

        <PageSection aria-label="Cards gallery">
          <Gallery hasGutter>
            {Array.from({ length: 30 }).map((_value, index) => (
              <GalleryItem key={index}>
                <Card>
                  <CardBody>This is a card</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </PageSection>
      </DashboardWrapper>
    </Fragment>
  );
};
