import React from 'react';
import { Spinner, Content } from '@patternfly/react-core';

export const SpinnerInline: React.FunctionComponent = () => (
  <React.Fragment>
    <Content>
      <h1>
        Heading
        <Spinner isInline aria-label="Spinner in a heading" />
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.</p>
      <h2>
        Second level
        <Spinner isInline aria-label="spinner in a subheading" />
      </h2>
      <p>
        Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,{' '}
        <Spinner isInline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
        cursus venenatis. Suspendisse potenti.
      </p>
      <small>
        Sometimes you need small text
        <Spinner isInline aria-label="Spinner in a small element" />
      </small>
    </Content>
  </React.Fragment>
);
