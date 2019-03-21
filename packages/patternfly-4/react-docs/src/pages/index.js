import React from 'react';
import { graphql } from 'gatsby';
import SidebarLayout from '../templates/sidebarLayout';
import { Title, PageSection, PageSectionVariants } from '@patternfly-safe/react-core';

const IndexPage = ({ data }) => {
  const prInfo = data.allEnvVars.edges
    .filter(({ node }) => node.name === 'PR_INFO')[0].node;

  return (
    <SidebarLayout>
      <PageSection className="pf-l-bullseye">
        <div className="pf-l-bullseye__item pf-u-text-align-center">
          <Title size="4xl">PatternFly 4 React Docs</Title>
          {prInfo.num && (
            <Title size="2xl">
              <a href={prInfo.url}>PR #{prInfo.num}</a>
            </Title>
          )
          }
          <p>Welcome to Patternfly 4 React docs.</p>
          <p>Now go build something great.</p>
        </div>
      </PageSection>
      <PageSection style={{ flexGrow: 0 }} variant={PageSectionVariants.dark}>
        Built with:
        {Object.values(data)
          .filter(v => v.nodes)
          .map(v => v.nodes[0])
          .map(node => <p key={node.name}>{node.name}: {node.version}</p>)}
      </PageSection>
    </SidebarLayout>
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
  allEnvVars {
    edges {
      node {
        name
        num
        url
      }
    }
  }
}`;

export default IndexPage;
