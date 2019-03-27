import React from 'react';
import { Title, Grid, GridItem, Tooltip } from '@patternfly/react-core';
import * as IconsModule from '@patternfly/react-icons';
import SidebarLayout from '../../components/sidebarLayout';

const allIcons = Object.entries(IconsModule).filter(([name]) => name.endsWith('Icon'));

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Icons() {
  return (
    <SidebarLayout>
      <Title size="4xl" headingLevel="h1">Icons</Title>
      <Grid>
        {allIcons.map(([id, Icon]) => (
          <GridItem key={id}>
            <Tooltip key={id} content={<div>{id}</div>}>
              <Icon size="xl" title={id} />
            </Tooltip>
          </GridItem>
        ))}
      </Grid>
    </SidebarLayout>
  );
}

export default Icons;
