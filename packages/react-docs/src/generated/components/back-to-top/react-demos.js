import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import DashboardWrapper from '../../../../../react-core/src/demos/./examples/DashboardWrapper';
import srcImportdefaulttoscrollwindow from './react-demos/default-to-scroll-window.png';
import srcImportusingnameselector from './react-demos/using-name-selector.png';
const pageData = {
  "id": "Back to top",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/back-to-top/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/BackToTop.md",
  "fullscreenExamples": [
    "Using name selector"
  ]
};
pageData.liveContext = {
  DashboardWrapper
};
pageData.examples = {
  'Using name selector': props => 
    <Example {...pageData} {...props} thumbnail={srcImportusingnameselector} {...{"code":"import React from 'react';\nimport {\n  BackToTop,\n  Card,\n  CardBody,\n  Gallery,\n  GalleryItem,\n  PageSection,\n  PageSectionVariants,\n  TextContent,\n  Text,\n  Page,\n  Switch\n} from '@patternfly/react-core';\nimport DashboardWrapper from '../DashboardWrapper';\n\nexport const Name = () => {\n  const [isAlwaysVisible, setIsAlwaysVisible] = React.useState(false);\n\n  const handleChange = isChecked => {\n    setIsAlwaysVisible(isChecked);\n  };\n\n  return (\n    <DashboardWrapper breadcrumb={null}>\n      <Page>\n        <PageSection variant={PageSectionVariants.light}>\n          <TextContent>\n            <Text component=\"h1\">Main title</Text>\n            <Text component=\"p\">\n              Body text should be Overpass Regular at 16px.It should have leading of 24px because <br />\n              of it’s relative line height of 1.5.\n            </Text>\n            <Switch label=\"Always show BackToTopButton\" onChange={handleChange} isChecked={isAlwaysVisible} />\n          </TextContent>\n        </PageSection>\n        <PageSection hasOverflowScroll name=\"scrolling-section\" tabIndex={0}>\n          <Gallery hasGutter>\n            {Array.apply(0, Array(60)).map((_x: any, i: number) => (\n              <GalleryItem key={i}>\n                <Card key={i}>\n                  <CardBody>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et urna eget semper. Sed\n                    tincidunt purus diam, id sollicitudin est pellentesque eget. Ut eget massa dignissim dolor pretium\n                    finibus at sit amet purus. Duis vulputate odio ac tristique convallis. Praesent porttitor\n                    condimentum varius. Duis pharetra in ligula nec ornare. Vivamus tincidunt nulla a semper semper.\n                    Duis tincidunt gravida elit non vehicula. Nunc eu sem venenatis, lobortis lorem sed, consectetur\n                    erat. Nulla accumsan, justo ac fringilla imperdiet, risus magna mollis libero, sit amet malesuada\n                    quam enim vel odio. Nullam vitae feugiat sem. Suspendisse potenti. Mauris dolor enim, pretium a\n                    pulvinar ut, commodo at risus.\n                  </CardBody>\n                </Card>\n              </GalleryItem>\n            ))}\n          </Gallery>\n        </PageSection>\n        <BackToTop scrollableSelector='[name=\"scrolling-section\"]' isAlwaysVisible={isAlwaysVisible} />\n      </Page>\n    </DashboardWrapper>\n  );\n};\n","title":"Using name selector","lang":"js","isFullscreen":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`Note that `}
        
        <code {...{"className":"ws-code"}}>
          {`tabIndex={0}`}
        </code>
        {` is added to the scrolling `}
        
        <code {...{"className":"ws-code"}}>
          {`PageSection`}
        </code>
        {` of the page to allow keyboard users the ability to focus and scroll.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Using name selector"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsBackToTopReactDemosDocs';
Component.pageData = pageData;

export default Component;
