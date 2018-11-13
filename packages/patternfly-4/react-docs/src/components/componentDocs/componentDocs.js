import React from 'react';
import PropTypes from 'prop-types';
import styles from './componentDocs.styles';
import { css } from '@patternfly/react-styles';
import Example from '../example';
import Content from '../content';
import { Title } from '@patternfly/react-core';
import PropsTable from '../propsTable';
import Section from '../section';

const propTypes = {
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
    const { title, description, examples, components, enumValues, fullPageOnly, rawExamples, images } = this.props;
    const makeDescription = html => ({ __html: html });
    return (
      <Content>
        <Title size="3xl">{title}</Title>
        {Boolean(description) && (
          <p className={css(styles.description)} dangerouslySetInnerHTML={makeDescription(description)} />
        )}
        <Section title="Examples">
          {examples.map((exampleObj, i) => {
            const ComponentExample = exampleObj.component;
            const { __docgenInfo: componentDocs } = ComponentExample;
            const rawExample = rawExamples.find(
              example => example.name === componentDocs.displayName || exampleObj.displayName
            );
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
                name={componentDocs.displayName}
                {...(exampleObj.getContainerProps ? exampleObj.getContainerProps() : {})}
              >
                <ComponentExample />
              </Example>
            );
          })}
        </Section>
        {Object.entries(components).map(([componentName, { __docgenInfo: componentDocs }]) => (
          <PropsTable
            key={componentName}
            name={componentName}
            description={componentDocs.description}
            props={componentDocs.props}
            enumValues={enumValues}
          />
        ))}
      </Content>
    );
  }
}

ComponentDocs.propTypes = propTypes;
ComponentDocs.defaultProps = defaultProps;

export default ComponentDocs;
