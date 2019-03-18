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

export const PropsTableTs = ({ name, props }) => (
  <Section
    headingLevel="h3"
    name={name}
    title={`${name} Props`}
    description={`The ${name} component accepts the following props:`}
  >
    <Table>
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        <TH>Default</TH>
        <TH>Description</TH>
      </Heading>
      <Body>
        {props.map(prop => (
          <Row key={prop.name}>
            <TD>{prop.name}</TD>
            <TD>{prop.type}</TD>
            <TD align="center">{prop.required && <ExclamationCircleIcon />}</TD>
            <TD>{prop.default ? prop.default : ''}</TD>
            <TD>{prop.comment && <span dangerouslySetInnerHTML={{ __html: prop.comment }} />}</TD>
          </Row>
        ))}
      </Body>
    </Table>
  </Section>
);

PropsTableTs.propTypes = propTypes;
PropsTableTs.defaultProps = defaultProps;

export default PropsTableTs;
