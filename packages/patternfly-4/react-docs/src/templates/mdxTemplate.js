import React from 'react';
import { graphql } from 'gatsby';
import SidebarLayout from './sidebarLayout';
import { CSSVars, PropsTable, LiveEdit } from '../components/componentDocs';
import { Title, PageSection } from '@patternfly-safe/react-core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from '../components/mdx-renderer';

const components = {
  code: LiveEdit,
  pre: React.Fragment
};

const getPropList = (jsProps, tsProps, rawMDX) => {
  console.log('tsProps', tsProps);
  if (jsProps.length > 0) {
    // Exported components in the folder (i.e. src/components/Alerts/[Alert, AlertIcon, AlertBody])
    // We *should* use the MDXRenderer scope to get the names of these, but that's pretty difficult
    const propComponents = jsProps
      .map(node => node.name)
      .filter(name => name) // Some HOCs don't get docgenned properly (like TabContent)
      .filter(name => rawMDX.indexOf(name) !== -1);
    
    // Finally, the props for each relevant component!
    return jsProps
      .filter(node => propComponents.indexOf(node.name) !== -1)
      .map(node => { return { name: node.name, props: node.props } })
      .sort((e1, e2) => e1.name.localeCompare(e2.name));
  }
  else if (tsProps.length > 0) {
    const propComponents = tsProps[0].exports
      .map(ex => ex.name)
      .filter(name => rawMDX.indexOf(name) !== -1);
    
    console.log('ts propComponents', propComponents);
  }

  return [];
}

const MdxTemplate = ({ data }) => {
  const cssPrefix = data.mdx.frontmatter.cssPrefix;
  let section = data.mdx.frontmatter.section || 'component';
  const props = getPropList(data.jsProps.nodes, data.tsProps.nodes, data.mdx.code.body);

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
          <PropsTable caption={`${component.name} properties`} propList={component.props} />
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
        id
        name
        children {
          name
          kindString
          comment {
            shortText
          }
          defaultValue
          flags {
            isOptional
          }
        }
        signatures {
          parameters {
            type {
              declaration {
                children {
                  name
                  type {
                    id
                    name
                  }
                  defaultValue
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export default MdxTemplate;
