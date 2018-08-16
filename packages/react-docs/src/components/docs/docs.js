import React from 'react';
import styles from './docs.styles';
import { css } from '@patternfly/react-styles';
import { Title } from '@patternfly/react-core';
import Content from '../content';
import PropTypes from 'prop-types';

const PropsTable = () => null;

const propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.any.isRequired,
  description: PropTypes.string,
  children: PropTypes.any.isRequired
};

const defaultProps = {
  description: ''
};

const Docs = ({ title, description, children, props }) => (
  <Content>
    <Title size="3xl">{title}</Title>
    <p className={css(styles.description)}>{description}</p>
    <section>
      <Title size="xl">Examples</Title>
      <div>{children}</div>
    </section>
    <section>
      <Title size="xl">Props</Title>
      <p className={css(styles.description)}>The {title} component accepts the following props:</p>
      <PropsTable props={props} />
    </section>
  </Content>
);

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
