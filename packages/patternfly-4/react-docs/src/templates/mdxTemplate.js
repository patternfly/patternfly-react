import React from 'react';
import { graphql } from 'gatsby';
import SidebarLayout from './sidebarLayout';
import { CSSVars, Props, LiveEdit } from '../components/componentDocs';
import { Title, PageSection } from '@patternfly-safe/react-core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from '../components/mdx-renderer';

const components = {
  code: LiveEdit,
  pre: React.Fragment
};

const MdxTemplate = ({ data }) => {
  // Exported components in the folder (i.e. src/components/Alerts/[Alert, AlertIcon, AlertBody])
  // We *should* use the MDXRenderer scope to get the names of these, but that's pretty difficult
  const propComponents = data.jsProps.nodes
    .map(node => node.name)
    .filter(name => name) // Some HOCs don't get docgenned properly (like TabContent)
    .filter(name => data.mdx.code.body.indexOf(name) !== -1);

  // Finally, the props for each relevant component!
  const props = data.jsProps.nodes
    .filter(node => propComponents.indexOf(node.name) !== -1)
    .map(node => { return { name: node.name, props: node.props } })
    .sort((e1, e2) => e1.name.localeCompare(e2.name));

  const cssPrefix = data.mdx.frontmatter.cssPrefix;
  let section = data.mdx.frontmatter.section;
  if (!section)
    section = 'component';

  return (
    <SidebarLayout>
      <PageSection>
        <Title size="4xl">
          {data.mdx.frontmatter.title} {section.indexOf('-') === -1 ? section : ''}
        </Title>
        <MDXProvider components={components}>
          <MDXRenderer>
            {data.mdx.code.body}
          </MDXRenderer>
        </MDXProvider>
      </PageSection>

      {props.length > 0 && props.map(component =>
        <PageSection key={component.name}>
          {props.description}
          <Props caption={`${component.name} properties`} propList={component.props} />
        </PageSection>
      )}

      {cssPrefix &&
        <PageSection>
          <CSSVars caption={
            <p>
              CSS Variables starting with <strong>--{cssPrefix}</strong> from&nbsp;
                <a href="https://github.com/patternfly/patternfly-next/" target="_blank">patternfly-next</a>
            </p>
          } cssPrefix={cssPrefix} />
        </PageSection>
      }
    </SidebarLayout>
  );
};

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-mdx
// We want component metadata from gatsby-transformer-react-docgen-typescript
// for ALL components in that folder
export const pageQuery = graphql`
query GetComponent($fileAbsolutePath: String!, $pathRegex: String!) {
  mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
    code {
      body
    }
    frontmatter {
      title
      section
      cssPrefix
    }
  }
  jsProps: allComponentMetadata(filter: {path: {regex: $pathRegex}}) {
    nodes {
      path
      name
      description
      props {
        name
        description
        required
        type {
          name
        }
        defaultValue {
          value
        }
      }
    }
  }
  tsProps: allTypedoc(filter: {name: {regex: $pathRegex}}) {
    nodes {
      exports {
        name
        children {
          name
          kindString
          comment {
            text
          }
          defaultValue
          flags {
            isOptional
          }
        }
      }
    }
  }
}
`;

export default MdxTemplate;
