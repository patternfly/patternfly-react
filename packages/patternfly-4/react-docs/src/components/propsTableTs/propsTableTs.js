import React from 'react';
import PropTypes from 'prop-types';
import styles from './propsTableTs.styles';
import { css } from '@patternfly/react-styles';
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
  <Section name={name} title={`${name} Props`} description={`The ${name} component accepts the following props.`}>
    <Table>
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        {/* <TH>Default</TH> */}
        <TH>Description</TH>
      </Heading>
      <Body>
      </Body>
    </Table>
  </Section>
);
// {props.map(prop => (
//   <Row key={prop.name}>
//     <TD>{prop.name}</TD>
//     <TD>{prop.type.name}</TD>
//     <TD align="center">{prop.flags.isOptional === null && <ExclamationCircleIcon />}</TD>
//     {/* <TD>{Boolean(prop.defaultValue) && prop.defaultValue.value}</TD> */}
//     <TD>{prop.comment && prop.comment.shortText}</TD>
//   </Row>
// ))}

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
