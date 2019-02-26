import React from 'react';
import PropTypes from 'prop-types';
import { Table, Row, TD, TH, Body, Heading } from '../table';
import Section from '../section';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const docGenPropShape = PropTypes.shape({
  name: PropTypes.string,
  comment: PropTypes.shape({ shortText: PropTypes.string }),
  type: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  }),
  flags: PropTypes.shape({ isOptional: PropTypes.bool })
});

const propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(docGenPropShape)
};

const defaultProps = {
  props: []
};

export const PropsTableTs = ({ name, props }) => (
  <Section headingLevel="h3" name={name} title={`${name} Props`} description={`The ${name} component accepts the following props.`}>
    <Table>
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        <TH>Default</TH>
        <TH>Description</TH>
      </Heading>
      <Body>
      </Body>
    </Table>
  </Section>
);

function getEnumValue(prop, enumValues) {
  let returnValue = '';
  let values;
  if (prop.type.name === 'union') {
    values = prop.type.value.map(v => v.name);
    returnValue = `${values.join(' | ')}`;
  } else {
    values = Array.isArray(prop.type.value) ? prop.type.value.map(v => v.value) : enumValues[prop.type.value];
    returnValue = values ? `${prop.type.name}: ${values.join(', ')}` : prop.type.name;
  }
  return returnValue;
}

PropsTableTs.propTypes = propTypes;
PropsTableTs.defaultProps = defaultProps;

export default PropsTableTs;
