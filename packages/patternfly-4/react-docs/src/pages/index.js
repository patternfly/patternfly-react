import React from 'react';
import { graphql } from 'gatsby';
import SidebarLayout from '../templates/sidebarLayout';
import { Title, PageSection, PageSectionVariants } from '@patternfly/react-core';

const IndexPage = ({ data }) => {
  return (
    <SidebarLayout>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <PageSection style={{ flexGrow: 1, textAlign: "center" }}>
          <Title size="4xl">PatternFly 4 React Docs</Title>
          <h1>Hi people!</h1>
          <p>Welcome to Patternfly 4 React docs.</p>
          <p>Now go build something great.</p>
        </PageSection>
        <PageSection style={{ flexGrow: 0 }} variant={PageSectionVariants.dark}>
          Built with:
          {Object.values(data).map(v => v.nodes[0]).map(node =>
            <p key={node.name}>{node.name}: {node.version}</p>
          )}
        </PageSection>
      </div>
    </SidebarLayout >
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
  allReactStyledSystemJson {
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
  allReactTokensJson {
    nodes {
      name
      version
    }
  }
}`;

export default IndexPage;
