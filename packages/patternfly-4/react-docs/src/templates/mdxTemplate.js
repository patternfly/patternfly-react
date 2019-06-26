import React from 'react';
import PropTypes from 'prop-types';
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

const MdxTemplate = ({ data }) => {
  const { cssPrefix } = data.mdx.frontmatter;
  const section = data.mdx.frontmatter.section || 'component';
  const { nodes } = data.props;

  return (
    <SidebarLayout>
      <PageSection>
        <Title size="4xl">
          {data.mdx.frontmatter.title} {section.indexOf('-') === -1 ? section : ''}
        </Title>
        <MDXProvider components={components}>
          <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
        </MDXProvider>
      </PageSection>

      {nodes.length > 0 &&
        nodes.map(component => (
          <PageSection key={component.name}>
            {nodes.description}
            <PropsTable caption={`${component.name} properties`} propList={component.props} />
          </PageSection>
        ))}

      {cssPrefix && (
        <PageSection>
          <CSSVars
            caption={
              <p>
                CSS Variables starting with <strong>--{cssPrefix}</strong> from&nbsp;
                <a href="https://github.com/patternfly/patternfly-next/" target="_blank" rel="noopener noreferrer">
                  patternfly-next
                </a>
              </p>
            }
            cssPrefix={cssPrefix}
          />
        </PageSection>
      )}
    </SidebarLayout>
  );
};

MdxTemplate.propTypes = {
  data: PropTypes.any.isRequired
};

// Test queries in http://localhost:8000/___graphql
// See how to filter from: https://www.gatsbyjs.org/docs/graphql-reference/
// We want the markdown from gatsby-mdx
// We want component metadata from gatsby-transformer-react-docgen-typescript
export const pageQuery = graphql`
  query GetComponent($fileAbsolutePath: String!, $propComponents: [String]!, $pathRegex: String!) {
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
    props: allComponentMetadata(filter: { name: { in: $propComponents }, path: { regex: $pathRegex } }) {
      nodes {
        name
        props {
          name
          description
          required
          type {
            name
          }
          tsType {
            name
            raw
          }
          defaultValue {
            value
          }
        }
      }
    }
  }
`;

export default MdxTemplate;
