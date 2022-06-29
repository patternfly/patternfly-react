import React from 'react';
import { Title, PageSection } from '@patternfly/react-core';

// https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
const centerStyle = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const IndexPage = () => {
  const prInfo = {
    num: process.env.prnum,
    url: process.env.prurl
  };

  return (
    <PageSection variant="light" style={centerStyle}>
      <div style={{ flex: 'none', textAlign: 'center' }}>
        <Title size="4xl" headingLevel="h1">
          PatternFly 4 React Docs
        </Title>
        <Title size="2xl" headingLevel="h2">
          {prInfo.num ? <a href={prInfo.url}>PR #{prInfo.num}</a> : 'Hi people!'}
        </Title>
        <p>Welcome to Patternfly 4 React docs.</p>
        <p>Now go build something great.</p>
      </div>
    </PageSection>
  );
};

export default IndexPage;
