import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styles from './componentDocs.styles';
import { css } from '@patternfly/react-styles';
import Example from '../example';
import Content from '../content';
import { Title } from '@patternfly/react-core';
import PropsTable from '../propsTable';
import PropsTableTs from '../propsTableTs';
import Section from '../section';
import DocsLayout from '../layouts';

const propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.func,
      title: PropTypes.string,
      description: PropTypes.string,
      getContainerProps: PropTypes.func,
      displayName: PropTypes.string,
      live: PropTypes.bool,
      liveScope: PropTypes.object
    })
  ),
  components: PropTypes.objectOf(PropTypes.func),
  enumValues: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),
  rawExamples: PropTypes.array,
  images: PropTypes.array,
  fullPageOnly: PropTypes.bool
};

const defaultProps = {
  description: '',
  examples: [],
  components: {},
  enumValues: {},
  rawExamples: [],
  images: [],
  fullPageOnly: false
};

class ComponentDocs extends React.PureComponent {
  render() {
    const {
      data,
      title,
      description,
      examples,
      components,
      enumValues,
      fullPageOnly,
      rawExamples,
      images
    } = this.props;
    const makeDescription = html => ({ __html: html });
    const getDocGenInfo = name => data.allComponentMetadata.edges.find(edge => edge.node.displayName === name);
    const getDocGenInfoTs = name => data.allTsDocsJson.edges[0].node.data.find(edge => edge.name === `${name}Props`);
    return (
      <DocsLayout>
        <Content>
          <Title size="3xl">{title}</Title>
          {Boolean(description) && (
            <p className={css(styles.description)} dangerouslySetInnerHTML={makeDescription(description)} />
          )}
          <Section title="Examples" headingLevel="h2">
            {examples.map((exampleObj, i) => {
              const ComponentExample = exampleObj.component;
              const rawExample = rawExamples.find(example => example.name === ComponentExample.name);
              return (
                <Example
                  key={i}
                  title={exampleObj.title}
                  description={exampleObj.description}
                  raw={rawExample.file}
                  path={rawExample.path}
                  images={images}
                  fullPageOnly={fullPageOnly}
                  live={exampleObj.live}
                  liveScope={exampleObj.liveScope}
                  name={ComponentExample.name}
                  {...(exampleObj.getContainerProps ? exampleObj.getContainerProps() : {})}
                >
                  <ComponentExample />
                </Example>
              );
            })}
          </Section>
          {Object.entries(components).map(([componentName]) => {
            // Only generate docs for props for javascript code.
            const componentDocsJs = getDocGenInfo(componentName);
            if (componentDocsJs) {
              return (
                <PropsTable
                  key={componentName}
                  name={componentName}
                  description={componentDocsJs.node.description}
                  props={componentDocsJs.node.props}
                  enumValues={enumValues}
                />
              );
            }
            let componentDocsTs;
            if (!componentDocsJs) {
              componentDocsTs = getDocGenInfoTs(componentName);
              if (componentDocsTs) {
                return <PropsTableTs key={componentName} name={componentName} props={componentDocsTs.children} />;
              }
            }
            return null;
          })}
        </Content>
      </DocsLayout>
    );
  }
}

ComponentDocs.propTypes = propTypes;
ComponentDocs.defaultProps = defaultProps;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allComponentMetadata {
          edges {
            node {
              displayName
              description {
                text
              }
              props {
                name
                description {
                  text
                }
                defaultValue {
                  value
                }
                type {
                  name
                  value
                }
                required
              }
            }
          }
        }
        allTsDocsJson {
          edges {
            node {
              id
              name
              kind
              data {
                name
                children {
                  name
                  comment {
                    shortText
                  }
                  type {
                    type
                    name
                  }
                  flags {
                    isOptional
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ComponentDocs data={data} {...props} />}
  />
);
