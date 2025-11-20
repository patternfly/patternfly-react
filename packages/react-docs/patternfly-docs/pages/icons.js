// eslint-disable-next-line
import React from 'react';
import { Content } from '@patternfly/react-core/dist/esm/components/Content';
import { Icon } from '@patternfly/react-core/dist/esm/components/Icon';
import { Grid, GridItem } from '@patternfly/react-core/dist/esm/layouts/Grid';
import { PageSection } from '@patternfly/react-core/dist/esm/components/Page/PageSection';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';
import spacerMd from '@patternfly/react-tokens/dist/esm/t_global_spacer_md';
import spacerSm from '@patternfly/react-tokens/dist/esm/t_global_spacer_sm';
import labelFontSize from '@patternfly/react-tokens/dist/esm/t_global_font_size_sm';
import * as IconsModule from '@patternfly/react-icons/dist/esm';

const iconsPage = () => {
  const allIcons = Object.entries(IconsModule)
    .filter(([name]) => name.endsWith('Icon'))
    .sort(([name1], [name2]) => name1.localeCompare(name2));

  const cellStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacerMd.var,
    gap: spacerSm.var
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: labelFontSize.var
  };

  const getLabel = (label) => {
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
      <Content component="p">
        These are all of the icons available for use in PatternFly React. For recommended icon usage, see our{' '}
        <a href="https://www.patternfly.org/v4/guidelines/icons">icon usage guidelines</a>.
      </Content>
      <Content component="p">
        Learn how you can use them in the{' '}
        <a href="https://github.com/patternfly/patternfly-react/tree/main/packages/react-icons">react-icons docs</a>.
      </Content>
      <Grid>
        {allIcons
          // BREAKING CHANGE - remove line below when AnsibeTowerIcon is removed
          // hide AnsibeTowerIcon in favor of corrected AnsibleTowerIcon
          .filter(([id]) => id !== 'AnsibeTowerIcon')
          .map(([id, ReactIcon]) => (
            <GridItem key={id} style={cellStyle} sm={6} md={4} lg={2}>
              <Tooltip content={<div>{id}</div>}>
                <Icon size="xl">
                  <ReactIcon title={id} />
                </Icon>
              </Tooltip>
              <div style={labelStyle}>{getLabel(id)}</div>
            </GridItem>
          ))}
      </Grid>
    </PageSection>
  );
};

export default iconsPage;
