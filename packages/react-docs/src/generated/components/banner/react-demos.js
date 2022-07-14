import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import DashboardWrapper from '../../../../../react-core/src/demos/./examples/DashboardWrapper';
import srcImportbasicstickybanner from './react-demos/basic-sticky-banner.png';
import srcImporttopandbottombanner from './react-demos/top-and-bottom-banner.png';
const pageData = {
  "id": "Banner",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/banner/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/Banner.md",
  "fullscreenExamples": [
    "Basic sticky banner",
    "Top and bottom banner"
  ]
};
pageData.liveContext = {
  DashboardWrapper
};
pageData.examples = {
  'Basic sticky banner': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasicstickybanner} {...{"code":"import React from 'react';\nimport {\n  Banner,\n  Card,\n  CardBody,\n  Flex,\n  Gallery,\n  GalleryItem,\n  PageSection,\n  PageSectionVariants,\n  TextContent,\n  Text\n} from '@patternfly/react-core';\nimport DashboardWrapper from './examples/DashboardWrapper';\n\nclass BannerDemo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <DashboardWrapper breadcrumb={null}>\n          <Banner isSticky>\n            <Flex\n              justifyContent={{ default: 'justifyContentCenter', lg: 'justifyContentSpaceBetween' }}\n              flexWrap={{ default: 'nowrap' }}\n            >\n              <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Localhost</div>\n              <div className=\"pf-u-display-none pf-u-display-block-on-lg\">\n                This message is sticky to the top of the page.\n              </div>\n              <div className=\"pf-u-display-none-on-lg\">Drop some text on mobile, truncate if needed.</div>\n              <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Ned Username</div>\n            </Flex>\n          </Banner>\n          <PageSection variant={PageSectionVariants.light}>\n            <TextContent>\n              <Text component=\"h1\">Main title</Text>\n              <Text component=\"p\">\n                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />\n                of it’s relative line height of 1.5.\n              </Text>\n            </TextContent>\n          </PageSection>\n          <PageSection>\n            <Gallery hasGutter>\n              {Array.apply(0, Array(30)).map((x, i) => (\n                <GalleryItem key={i}>\n                  <Card key={i}>\n                    <CardBody>This is a card</CardBody>\n                  </Card>\n                </GalleryItem>\n              ))}\n            </Gallery>\n          </PageSection>\n        </DashboardWrapper>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic sticky banner","lang":"js","isFullscreen":true}}>
      
    </Example>,
  'Top and bottom banner': props => 
    <Example {...pageData} {...props} thumbnail={srcImporttopandbottombanner} {...{"code":"import React from 'react';\nimport {\n  Banner,\n  Card,\n  CardBody,\n  Flex,\n  FlexItem,\n  Gallery,\n  GalleryItem,\n  PageSection,\n  PageSectionVariants,\n  TextContent,\n  Text\n} from '@patternfly/react-core';\nimport DashboardWrapper from '../examples/DashboardWrapper';\n\nclass BannerDemo extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <Flex\n          direction={{ default: 'column' }}\n          flexWrap={{ default: 'nowrap' }}\n          spaceItems={{ default: 'spaceItemsNone' }}\n          style={{ height: '100%' }}\n        >\n          <FlexItem>\n            <Banner isSticky>\n              <Flex\n                justifyContent={{ default: 'justifyContentCenter', lg: 'justifyContentSpaceBetween' }}\n                flexWrap={{ default: 'nowrap' }}\n              >\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Localhost</div>\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">\n                  This message is sticky to the top of the page.\n                </div>\n                <div className=\"pf-u-display-none-on-lg\">Drop some text on mobile, truncate if needed.</div>\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Ned Username</div>\n              </Flex>\n            </Banner>\n          </FlexItem>\n          <FlexItem grow={{ default: 'grow' }} style={{ minHeight: 0 }}>\n            <DashboardWrapper breadcrumb={null}>\n              <PageSection variant={PageSectionVariants.light}>\n                <TextContent>\n                  <Text component=\"h1\">Main title</Text>\n                  <Text component=\"p\">\n                    Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />\n                    of it’s relative line height of 1.5.\n                  </Text>\n                </TextContent>\n              </PageSection>\n              <PageSection>\n                <Gallery hasGutter>\n                  {Array.apply(0, Array(30)).map((x, i) => (\n                    <GalleryItem key={i}>\n                      <Card key={i}>\n                        <CardBody>This is a card</CardBody>\n                      </Card>\n                    </GalleryItem>\n                  ))}\n                </Gallery>\n              </PageSection>\n            </DashboardWrapper>\n          </FlexItem>\n          <FlexItem>\n            <Banner isSticky>\n              <Flex\n                justifyContent={{ default: 'justifyContentCenter', lg: 'justifyContentSpaceBetween' }}\n                flexWrap={{ default: 'nowrap' }}\n              >\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Localhost</div>\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">\n                  This message is sticky to the bottom of the page.\n                </div>\n                <div className=\"pf-u-display-none-on-lg\">Drop some text on mobile, truncate if needed.</div>\n                <div className=\"pf-u-display-none pf-u-display-block-on-lg\">Ned Username</div>\n              </Flex>\n            </Banner>\n          </FlexItem>\n        </Flex>\n      </React.Fragment>\n    );\n  }\n}","title":"Top and bottom banner","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic sticky banner"])}
    {React.createElement(pageData.examples["Top and bottom banner"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBannerReactDemosDocs';
Component.pageData = pageData;

export default Component;
