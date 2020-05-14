import React from 'react';
import { graphql } from 'gatsby';
import { Title, PageSection, PageSectionVariants } from '@patternfly/react-core';
import { SideNavLayout } from 'gatsby-theme-patternfly-org/layouts';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '80vh'
};

// https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/
const centerStyle = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const IndexPage = ({ data, location }) => {
  const prInfo = data.allEnvVars.edges.filter(({ node }) => node.name === 'PR_INFO')[0].node;

  return (
    <SideNavLayout location={location} context="react" showGdprBanner={true} pageTitle="React docs">
      <div style={containerStyle}>
        <PageSection style={centerStyle}>
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
        <PageSection style={{ flexGrow: 0 }} variant={PageSectionVariants.dark}>
          Built with:
          {Object.values(data)
            .filter(v => v.nodes)
            .map(v => v.nodes[0])
            .map(node => (
              <p key={node.name}>
                {node.name}: {node.version}
              </p>
            ))}
        </PageSection>
      </div>
    </SideNavLayout>
  );
};

export const pageQuery = graphql`
  {
    allReactCoreJson {
      nodes {
        name
        version
      }
    }
    allReactTableJson {
      nodes {
        name
        version
      }
    }
    allReactChartsJson {
      nodes {
        name
        version
      }
    }
    allReactTokensJson {
      nodes {
        name
        version
      }
    }
    allReactInlineEditExtensionJson {
      nodes {
        name
        version
      }
    }
    allReactCatalogViewExtensionJson {
      nodes {
        name
        version
      }
    }
    allReactTokensJson {
      nodes {
        name
        version
      }
    }
    allEnvVars {
      edges {
        node {
          name
          num
          url
        }
      }
    }
  }
`;

export default IndexPage;
