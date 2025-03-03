import { Fragment } from 'react';
import { Title } from '@patternfly/react-core';

export const TitleDefaultSizes: React.FunctionComponent = () => (
  <Fragment>
    <Title headingLevel="h1">H1-styled title</Title>
    <Title headingLevel="h2">H2-styled title</Title>
    <Title headingLevel="h3">H3-styled title</Title>
    <Title headingLevel="h4">H4-styled title</Title>
    <Title headingLevel="h5">H5-styled title</Title>
    <Title headingLevel="h6">H6-styled title</Title>
  </Fragment>
);
