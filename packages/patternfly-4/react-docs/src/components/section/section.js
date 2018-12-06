import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './section.styles';
import { Title } from '@patternfly/react-core';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  headingLevel: PropTypes.string,
  name: PropTypes.string,
  preface: PropTypes.string,
  title: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  description: '',
  name: '',
  preface: '',
  title: ''
};

const Section = ({ children, className, description, headingLevel, name, preface, title, ...props }) => (
  <section className={css(styles.section, className)}>
    {Boolean(title || description) && (
      <header className={css(styles.header)}>
        {Boolean(title) && (
          <Title size="lg" id={name} headingLevel={headingLevel}>
            {title}
          </Title>
        )}
        {Boolean(preface) && <p className={css(styles.preface)}>{preface}</p>}
        {Boolean(description) && <p>{description}</p>}
      </header>
    )}
    {children}
  </section>
);

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
