import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from '@patternfly/react-styles';
import { Bullseye } from '@patternfly/react-core';
import ComponentDocs from '../../components/componentDocs';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  bullseye: {
    height: 250
  }
});

const BullseyeDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Bullseye Example">
      <Bullseye className={css(styles.bullseye)}>
        <div>centered</div>
      </Bullseye>
    </Example>
  </ComponentDocs>
);

BullseyeDocs.propTypes = propTypes;

export const query = graphql`
  query BullseyeDocsQuery {
    componentMetadata(displayName: { eq: "Bullseye" }) {
      ...ComponentDocs
    }
  }
`;

export default BullseyeDocs;
