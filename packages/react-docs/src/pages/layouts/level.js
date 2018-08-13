import React from 'react';
import { Level, LevelItem } from '@patternfly/react-core';
import PropTypes from 'prop-types';
import { global_BorderColor as borderColor, global_BorderWidth_md as borderWidth } from '@patternfly/react-tokens';

import ComponentDocs from '../../components/componentDocs';
import Example from '../../components/example';

const LevelDocs = ({ data }) => {
  const levelStyle = {
    border: `${borderWidth.var} dashed ${borderColor.var}`
  };

  const levelItems = (
    <React.Fragment>
      <LevelItem style={levelStyle}>Level Item</LevelItem>
      <LevelItem style={levelStyle}>Level Item</LevelItem>
    </React.Fragment>
  );

  return (
    <ComponentDocs data={data}>
      <Example title="Level - 2 children">
        <Level>{levelItems}</Level>
      </Example>
      <Example title="Level - 3 children">
        <Level>
          {levelItems}
          <LevelItem style={levelStyle}>Level Item</LevelItem>
        </Level>
      </Example>
      <Example title="Level - 3 children and md gutter">
        <Level gutter="md">
          {levelItems}
          <LevelItem style={levelStyle}>Level Item</LevelItem>
        </Level>
      </Example>
    </ComponentDocs>
  );
};

const propTypes = {
  data: PropTypes.any.isRequired
};

LevelDocs.propTypes = propTypes;

export const query = graphql`
  query LevelDocsQuery {
    componentMetadata(displayName: { eq: "Level" }) {
      ...ComponentDocs
    }
  }
`;

export default LevelDocs;
