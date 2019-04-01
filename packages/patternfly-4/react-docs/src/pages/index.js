import React from 'react';
import { graphql } from 'gatsby';
import SidebarLayout from '../templates/sidebarLayout';
import { Title } from '@patternfly/react-core';

export default function IndexPage({ data }) {
  return (
    <React.Fragment>
      <SidebarLayout>
        <Title size='4xl'>
          PatternFly 4 React Docs
        </Title>
        {Object.values(data).map(v => v.nodes[0]).map(node => (
          <p key={node.name}>{node.name}: {node.version}</p>
        ))}
        <h1>Hi people</h1>
        <p>Welcome to React docs.</p>
        <p>Now go build something great.</p>
      </SidebarLayout>
    </React.Fragment>
  );
}

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
}
`;