import React from 'react';
import {
  BackToTop,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Page,
  Switch
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const Name = () => {
  const [isAlwaysVisible, setIsAlwaysVisible] = React.useState(false);

  const handleChange = (_event, isChecked) => {
    setIsAlwaysVisible(isChecked);
  };

  return (
    <DashboardWrapper breadcrumb={null}>
      <Page>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px.It should have leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
            <Switch label="Always show BackToTopButton" onChange={handleChange} isChecked={isAlwaysVisible} />
          </TextContent>
        </PageSection>
        <PageSection
          hasOverflowScroll
          name="scrolling-section"
          tabIndex={0}
          aria-label="Scrollable container of demonstration cards with a back to top element"
        >
          <Gallery hasGutter>
            {Array.from({ length: 60 }).map((_value, index) => (
              <GalleryItem key={index}>
                <Card key={index}>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et urna eget semper. Sed
                    tincidunt purus diam, id sollicitudin est pellentesque eget. Ut eget massa dignissim dolor pretium
                    finibus at sit amet purus. Duis vulputate odio ac tristique convallis. Praesent porttitor
                    condimentum varius. Duis pharetra in ligula nec ornare. Vivamus tincidunt nulla a semper semper.
                    Duis tincidunt gravida elit non vehicula. Nunc eu sem venenatis, lobortis lorem sed, consectetur
                    erat. Nulla accumsan, justo ac fringilla imperdiet, risus magna mollis libero, sit amet malesuada
                    quam enim vel odio. Nullam vitae feugiat sem. Suspendisse potenti. Mauris dolor enim, pretium a
                    pulvinar ut, commodo at risus.
                  </CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </PageSection>
        <BackToTop scrollableSelector='[name="scrolling-section"]' isAlwaysVisible={isAlwaysVisible} />
      </Page>
    </DashboardWrapper>
  );
};
