import React from 'react';
import Content from '../../components/content';
import { Title, Grid, GridItem } from '@patternfly/react-core';
import * as icons from '@patternfly/react-icons';
import { css, StyleSheet } from '@patternfly/react-styles';
import { global_spacer_md as spacerMd, global_FontSize_sm as labelFontSize } from '@patternfly/react-tokens';
import DocsLayout from '../../components/layouts';

const allIcons = Object.entries(icons).filter(([name]) => name.endsWith('Icon'));

const styles = StyleSheet.create({
  iconCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacerMd.var
  },
  label: {
    textAlign: 'center',
    fontSize: labelFontSize.var
  }
});

function Icons() {
  return (
    <DocsLayout>
      <Content>
        <Title size="4xl" headingLevel="h1">Icons</Title>
        <Grid>
          {allIcons.map(([id, Icon]) => (
            <GridItem key={id} className={css(styles.iconCell)} sm={6} md={4} lg={2}>
              <Icon size="xl" key={id} title={id} />
              <div className={css(styles.label)}>{id}</div>
            </GridItem>
          ))}
        </Grid>
      </Content>
    </DocsLayout>
  );
}

export default Icons;
