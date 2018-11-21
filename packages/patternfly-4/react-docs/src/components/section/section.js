import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './section.styles';
import { Title } from '@patternfly/react-core';

const propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  preface: PropTypes.string
};

const defaultProps = {
  name: '',
  children: null,
  className: '',
  title: '',
  description: '',
  preface: ''
};

const Section = ({ name, children, className, title, description, preface, ...props }) => (
  <section className={css(styles.section, className)}>
    {Boolean(title || description) && (
      <header className={css(styles.header)}>
        {Boolean(title) && (
          <Title size="lg" id={name}>
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
