import React from 'react';
import PropTypes from 'prop-types';
import styles from './propsTable.styles';
import { css } from '@patternfly/react-styles';
import { Table, Row, TD, TH, Body, Heading } from '../table';
import Section from '../section';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const docGenPropValueShape = PropTypes.shape({ value: PropTypes.string });
const docGenPropShape = PropTypes.shape({
  type: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(docGenPropValueShape)])
  }),
  required: PropTypes.bool,
  description: PropTypes.string,
  defaultValue: PropTypes.shape({ value: PropTypes.string })
});

const propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.objectOf(docGenPropShape),
  enumValues: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any))
};

const defaultProps = {
  props: [],
  enumValues: {}
};

export const PropsTable = ({ name, props, enumValues }) => (
  <Section title={`${name} Props`} description={`The ${name} component accepts the following props.`}>
    <Table>
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        <TH>Default</TH>
        <TH>Description</TH>
      </Heading>
      <Body>
        {Object.entries(props).map(([propName, propDef]) => (
          <Row key={propName}>
            <TD>{propName}</TD>
            <TD>
              <div className={css(styles.enumValues)}>
                {propDef.type.name}
                {getEnumValue(propDef, enumValues)}
              </div>
            </TD>
            <TD align="center">{propDef.required && <ExclamationCircleIcon />}</TD>
            <TD>{Boolean(propDef.defaultValue) && propDef.defaultValue.value}</TD>
            <TD>{propDef.description}</TD>
          </Row>
        ))}
      </Body>
    </Table>
  </Section>
);

function getEnumValue(prop, enumValues) {
  const values = Array.isArray(prop.type.value) ? prop.type.value.map(v => v.value) : enumValues[prop.type.value];
  if (!values) {
    return '';
  }
  return `: ${values.join(', ')}`;
}

PropsTable.propTypes = propTypes;
PropsTable.defaultProps = defaultProps;

export default PropsTable;
