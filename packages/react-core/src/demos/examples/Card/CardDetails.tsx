/* eslint-disable camelcase */
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  Gallery,
  Title,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Divider
} from '@patternfly/react-core';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';

export const CardDetailsDemo: React.FunctionComponent = () => (
  <Gallery hasGutter style={{ [l_gallery_GridTemplateColumns_min.name]: '260px' } as React.CSSProperties}>
    <Card>
      <CardTitle>
        <Title headingLevel="h4" size="xl">
          Details
        </Title>
      </CardTitle>
      <CardBody>
        <DescriptionList>
          <DescriptionListGroup>
            <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
            <DescriptionListDescription>
              <a href="#">https://api1.devcluster.openshift.com</a>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Cluster ID</DescriptionListTerm>
            <DescriptionListDescription>63b97ac1-b850-41d9-8820-239becde9e86</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Provide</DescriptionListTerm>
            <DescriptionListDescription>AWS</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
            <DescriptionListDescription>4.5.0.ci-2020-06-16-015028</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Update Channel</DescriptionListTerm>
            <DescriptionListDescription>stable-4.5</DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href="#">View Settings</a>
      </CardFooter>
    </Card>
    <Card>
      <CardTitle>
        <Title headingLevel="h4" size="xl">
          Details
        </Title>
      </CardTitle>
      <CardBody>
        <DescriptionList>
          <DescriptionListGroup>
            <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
            <DescriptionListDescription>
              <a href="#">https://api2.devcluster.openshift.com</a>
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Cluster ID</DescriptionListTerm>
            <DescriptionListDescription>08908908-b850-41d9-8820-239becde9e86</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Provider</DescriptionListTerm>
            <DescriptionListDescription>Azure</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
            <DescriptionListDescription>4.5.0.ci-2020-06-16-015026</DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Update Channel</DescriptionListTerm>
            <DescriptionListDescription>stable-4.4</DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href="#">View Settings</a>
      </CardFooter>
    </Card>
  </Gallery>
);
