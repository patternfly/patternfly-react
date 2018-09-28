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
  examples: PropTypes.arrayOf(PropTypes.func),
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
    return (
      <Content>
        <Title size="3xl">{title}</Title>
        {Boolean(description) && <p className={css(styles.description)}>{description}</p>}
        <Section title="Examples">
          {examples.map((ComponentExample, i) => {
            const { __docgenInfo: componentDocs } = ComponentExample;
            const rawExample = rawExamples.find(example => example.name === componentDocs.displayName);
            return (
              <Example
                key={i}
                title={ComponentExample.title}
                description={ComponentExample.description}
                raw={rawExample && rawExample.file}
                images={images}
                fullPageOnly={fullPageOnly}
                name={ComponentExample.name}
                {...(ComponentExample.getContainerProps ? ComponentExample.getContainerProps() : {})}
              >
                <ComponentExample />
              </Example>
            );
          })}
        </Section>
        {Object.entries(components).map(([componentName, { __docgenInfo: componentDocs }]) => (
          <PropsTable key={componentName} name={componentName} props={componentDocs.props} enumValues={enumValues} />
        ))}
      </Content>
    );
  }
}

ComponentDocs.propTypes = propTypes;
ComponentDocs.defaultProps = defaultProps;

export default ComponentDocs;
