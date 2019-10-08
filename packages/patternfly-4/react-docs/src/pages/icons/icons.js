import React from 'react';
import { Title, Grid, GridItem, Tooltip, Text, PageSection } from '@patternfly/react-core';
import { global_spacer_md as spacerMd, global_FontSize_sm as labelFontSize } from '@patternfly/react-tokens';
import * as IconsModule from '@patternfly/react-icons';

const Icons = () => {
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
    <PageSection>
      <Title size="4xl" headingLevel="h1">
        Icons
      </Title>
      <Text>These are all Patternfly React Icons.</Text>
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
  );
};

export default Icons;
