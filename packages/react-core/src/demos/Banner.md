---
id: Banner
section: components
---

import { css } from '@patternfly/react-styles';
import display from '@patternfly/react-styles/css/utilities/Display/display';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

## Demos

### Basic sticky banner

```js isFullscreen
import React from 'react';
import {
  Banner,
  Card,
  CardBody,
  Flex,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';

import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { css } from '@patternfly/react-styles';
import display from '@patternfly/react-styles/css/utilities/Display/display';

class BannerDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DashboardWrapper breadcrumb={null}>
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
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.from({ length: 30 }).map((_value, index) => (
                <GalleryItem key={index}>
                  <Card key={index}>
                    <CardBody>This is a card</CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```

### Top and bottom banner

```js isFullscreen
import React from 'react';
import {
  Banner,
  Card,
  CardBody,
  Flex,
  FlexItem,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import { css } from '@patternfly/react-styles';
import display from '@patternfly/react-styles/css/utilities/Display/display';

class BannerDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Flex
          direction={{ default: 'column' }}
          flexWrap={{ default: 'nowrap' }}
          spaceItems={{ default: 'spaceItemsNone' }}
          style={{ height: '100%' }}
        >
          <FlexItem>
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
          </FlexItem>
          <FlexItem grow={{ default: 'grow' }} style={{ minHeight: 0 }}>
            <DashboardWrapper breadcrumb={null}>
              <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                  <Text component="h1">Main title</Text>
                  <Text component="p">
                    Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                    of it’s relative line height of 1.5.
                  </Text>
                </TextContent>
              </PageSection>
              <PageSection>
                <Gallery hasGutter>
                  {Array.from({ length: 30 }).map((_value, index) => (
                    <GalleryItem key={index}>
                      <Card key={index}>
                        <CardBody>This is a card</CardBody>
                      </Card>
                    </GalleryItem>
                  ))}
                </Gallery>
              </PageSection>
            </DashboardWrapper>
          </FlexItem>
          <FlexItem>
            <Banner isSticky>
              <Flex
                justifyContent={{ default: 'justifyContentCenter', lg: 'justifyContentSpaceBetween' }}
                flexWrap={{ default: 'nowrap' }}
              >
                <div className={css(display.displayNone, display.displayBlockOnLg)}>Localhost</div>
                <div className={css(display.displayNone, display.displayBlockOnLg)}>
                  This message is sticky to the bottom of the page.
                </div>
                <div className={css(display.displayNoneOnLg)}>Drop some text on mobile, truncate if needed.</div>
                <div className={css(display.displayNone, display.displayBlockOnLg)}>Ned Username</div>
              </Flex>
            </Banner>
          </FlexItem>
        </Flex>
      </React.Fragment>
    );
  }
}
```
