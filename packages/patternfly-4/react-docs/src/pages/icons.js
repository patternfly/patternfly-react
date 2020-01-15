import React from 'react';
import { Title, Grid, GridItem, Tooltip, Text, PageSection } from '@patternfly/react-core';
import { global_spacer_md as spacerMd, global_FontSize_sm as labelFontSize } from '@patternfly/react-tokens';
import * as IconsModule from '@patternfly/react-icons';
import { SideNavLayout } from 'gatsby-theme-patternfly-org/layouts';

export default ({ location }) => {
  const allIcons = Object.entries(IconsModule)
    .filter(([name]) => name.endsWith('Icon'))
    .sort(([name1], [name2]) => name1.localeCompare(name2));

  const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacerMd.var
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: labelFontSize.var
  };

  const getLabel = label => {
    let res = '';
    label = label.replace(/[iI]con/g, '');
    for (let i = 0; i < label.length; i++) {
      if (label.charAt(i) === label.charAt(i).toUpperCase()) {
        res += ' ';
      }
      res += label.charAt(i);
    }

    return res;
  };

  return (
    <SideNavLayout location={location} context="react">
      <PageSection className="ws-section">
        <Title size="md" className="ws-framework-title">React</Title>
        <Title size="4xl">Icons</Title>
        <Text>These are all of the icons available for use in PatternFly React. For recommended icon usage, see our <a href="https://www.patternfly.org/v4/design-guidelines/styles/icons">icon usage guidelines</a>.</Text>
        <Text>Learn how you can use them in the <a href="https://github.com/patternfly/patternfly-react/tree/master/packages/react-icons">react-icons docs</a>.</Text>
        <Grid>
          {allIcons.map(([id, Icon]) => (
            <GridItem key={id} style={cellStyle} sm={6} md={4} lg={2}>
              <Tooltip content={<div>{id}</div>}>
                <Icon size="xl" title={id} />
              </Tooltip>
              <div style={labelStyle}>{getLabel(id)}</div>
            </GridItem>
          ))}
        </Grid>
      </PageSection>
    </SideNavLayout>
  );
};
