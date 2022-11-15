import React from 'react';
import { Spinner, Text, TextContent } from '@patternfly/react-core';

export const SpinnerInline: React.FunctionComponent = () => (
  <React.Fragment>
    <TextContent>
      <Text component="h1">
        Heading
        <Spinner isInline isSVG aria-label="Spinner in a heading" />
      </Text>
      <Text component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
      </Text>
      <Text component="h2">
        Second level
        <Spinner isInline isSVG aria-label="spinner in a subheading" />
      </Text>
      <Text component="p">
        Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,{' '}
        <Spinner isInline isSVG aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium
        urna vel cursus venenatis. Suspendisse potenti.
      </Text>
      <small>
        Sometimes you need small text
        <Spinner isInline isSVG aria-label="Spinner in a small element" />
      </small>
    </TextContent>
  </React.Fragment>
);
