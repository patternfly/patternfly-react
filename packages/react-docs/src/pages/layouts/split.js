import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Split, SplitItem, SplitItemVariant } from '@patternfly/react-core';
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

const StyledSplitItem = props => <SplitItem {...props} className={css(styles.item)} />;

const SplitDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Split with variant">
      <Split>
        <StyledSplitItem variant={SplitItemVariant.secondary}>Secondary content</StyledSplitItem>
        <StyledSplitItem variant={SplitItemVariant.primary}>Primary content</StyledSplitItem>
        <StyledSplitItem variant={SplitItemVariant.secondary}>Secondary content</StyledSplitItem>
      </Split>
    </Example>
    <Example title="Split with gutter">
      <Split gutter="sm">
        <StyledSplitItem>Secondary content</StyledSplitItem>
        <StyledSplitItem>Primary content</StyledSplitItem>
        <StyledSplitItem>Secondary content</StyledSplitItem>
      </Split>
    </Example>
    <Example title="Split without variant">
      <Split>
        <StyledSplitItem>Secondary content</StyledSplitItem>
        <StyledSplitItem>Primary content</StyledSplitItem>
        <StyledSplitItem>Secondary content</StyledSplitItem>
      </Split>
    </Example>
    <Example title="Multiple primary">
      <Split>
        <StyledSplitItem variant={SplitItemVariant.secondary}>Secondary content</StyledSplitItem>
        <StyledSplitItem variant={SplitItemVariant.primary}>Primary content</StyledSplitItem>
        <StyledSplitItem variant={SplitItemVariant.primary}>Primary content</StyledSplitItem>
        <StyledSplitItem variant={SplitItemVariant.primary}>Primary content</StyledSplitItem>
      </Split>
    </Example>
  </ComponentDocs>
);

SplitDocs.propTypes = propTypes;

export const query = graphql`
  query SplitDocsQuery {
    componentMetadata(displayName: { eq: "Split" }) {
      ...ComponentDocs
    }
  }
`;

export default SplitDocs;
