// eslint-disable-next-line
import React from 'react';
import { PageSection } from '@patternfly/react-core/dist/esm/components/Page';
import { Title } from '@patternfly/react-core/dist/esm/components/Title';

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
    <PageSection style={centerStyle}>
      <div style={{ flex: 'none', textAlign: 'center' }}>
        <Title size="4xl" headingLevel="h1">
          PatternFly React Docs
        </Title>
        <Title size="2xl" headingLevel="h2">
          {prInfo.num ? <a href={prInfo.url}>PR #{prInfo.num}</a> : 'Hi, friend!'}
        </Title>
        <p>Welcome to Patternfly React docs.</p>
        <p>Now go build something great.</p>
      </div>
    </PageSection>
  );
};

export default IndexPage;
