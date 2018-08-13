/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './propsTable.styles';
import { css } from '@patternfly/react-styles';
import { Table, Row, TD, TH, Body, Heading } from '../table';

const propTypes = {
  props: PropTypes.any.isRequired
};

export const PropsTable = ({ props }) => (
  <Table>
    <Heading>
      <TH>Name</TH>
      <TH>Type</TH>
      <TH>Required</TH>
      <TH>Default</TH>
      <TH>Description</TH>
    </Heading>
    <Body>
      {props.map(p => (
        <Row key={p.name}>
          <TD>{p.name}</TD>
          <TD>
            <div className={css(styles.enumValues)}>
              {p.type.name}
              {Array.isArray(p.type.value) && `: ${p.type.value.map(v => v.value).join(' |\n')}`}
            </div>
          </TD>
          <TD>{p.required && '✨'}</TD>
          <TD>{Boolean(p.defaultValue) && p.defaultValue.value}</TD>
          <TD>{p.description}</TD>
        </Row>
      ))}
    </Body>
  </Table>
);

PropsTable.propTypes = propTypes;

export default PropsTable;
