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
  flags: PropTypes.shape({ isOptional: PropTypes.bool }),
  signatures: PropTypes.array
});

const propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(docGenPropShape),
  types: PropTypes.object,
  defaultProps: PropTypes.any
};

const defaultProps = {
  props: [],
  types: {},
  defaultProps: {}
};

export const PropsTableTs = ({ name, props, defaultProps: defaults, types }) => (
  <Section name={name} title={`${name} Props`} description={`The ${name} component accepts the following props.`}>
    <Table>
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        <TH>Default</TH>
        <TH>Description</TH>
      </Heading>
      <Body>
        {props.map(prop => {
          debugger;
          let typeName = prop.type && prop.type.name;
          let comment = prop.comment && prop.comment.shortText;
          if (!prop.type && prop.kindString && prop.kindString === 'Method') {
            typeName = 'func';
            comment = prop.signatures.length && prop.signatures[0].comment && prop.signatures[0].comment.shortText;
          } else if (!prop.type.name) {
            if (prop.type.type === 'reflection') {
              typeName = 'func';
            } else {
              typeName = prop.type.type;
            }
          } else if (prop.type && prop.type.type && prop.type.type === 'reference') {
            if (types[prop.type.name]) {
              typeName = types[prop.type.name];
            }
          }
          // TODO: Parse function signature and return that info
          return (
            <Row key={prop.name}>
              <TD>{prop.name}</TD>
              <TD>{typeName}</TD>
              <TD align="center">{prop.flags.isOptional === null && <ExclamationCircleIcon />}</TD>
              <TD>
                {typeName === 'union' ? (
                  <pre>{JSON.stringify(defaults[prop.name], null, 2)}</pre>
                ) : (
                    JSON.stringify(defaults[prop.name], null, 2)
                  )}
              </TD>
              <TD>{comment}</TD>
            </Row>
          );
        })}
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
