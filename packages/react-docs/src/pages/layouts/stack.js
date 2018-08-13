import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Stack, StackItem, StackItemVariant } from '@patternfly/react-core';
import {
  global_BorderColor as borderColor,
  global_BorderWidth_md as borderWidth,
  global_spacer_sm as padding
} from '@patternfly/react-tokens';
import { css, StyleSheet } from '@patternfly/react-styles';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  item: {
    padding: padding.var,
    border: `${borderWidth.var} dashed ${borderColor.var}`
  }
});

const StyledStackItem = props => <StackItem {...props} className={css(styles.item)} />;

const StackDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Stack with variant">
      <Stack style={{ height: '200px' }}>
        <StyledStackItem variant={StackItemVariant.secondary}>Secondary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.primary}>Primary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.secondary}>Secondary content</StyledStackItem>
      </Stack>
    </Example>
    <Example title="Stack with gutter">
      <Stack gutter="sm" style={{ height: '200px' }}>
        <StyledStackItem variant={StackItemVariant.secondary}>Secondary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.primary}>Primary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.secondary}>Secondary content</StyledStackItem>
      </Stack>
    </Example>
    <Example title="Multiple primary">
      <Stack style={{ height: '400px' }}>
        <StyledStackItem variant={StackItemVariant.secondary}>Secondary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.primary}>Primary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.primary}>Primary content</StyledStackItem>
        <StyledStackItem variant={StackItemVariant.primary}>Primary content</StyledStackItem>
      </Stack>
    </Example>
  </ComponentDocs>
);

StackDocs.propTypes = propTypes;

export const query = graphql`
  query StackDocsQuery {
    componentMetadata(displayName: { eq: "Stack" }) {
      ...ComponentDocs
    }
  }
`;

export default StackDocs;
