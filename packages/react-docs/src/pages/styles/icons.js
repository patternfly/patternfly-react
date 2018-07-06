import React from 'react';
import Content from '../../components/content';
import { Title } from '@patternfly/react-core';
import { iconMap } from '@patternfly/react-icons/icons';
import { css, StyleSheet } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/layouts/Grid/styles.css'; //eslint-disable-line
import {
  global_spacer_md as spacerMd,
  global_FontSize_sm as labelFontSize
} from '@patternfly/react-tokens';

const allIcons = Array.from(iconMap.entries());

const extraStyles = StyleSheet.create({
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
    <Content>
      <Title size="3xl" withMargins>
        Icons
      </Title>
      <div className={css(styles.grid)}>
        {allIcons.map(([id, Icon]) => (
          <div
            key={id}
            className={css(
              styles.gridItem,
              styles.modifiers['2ColOnLg'],
              styles.modifiers['4ColOnMd'],
              styles.modifiers['6ColOnSm'],
              extraStyles.iconCell
            )}
          >
            <Icon size="xl" key={id} title={id} />
            <div className={css(extraStyles.label)}>{id}</div>
          </div>
        ))}
      </div>
    </Content>
  );
}

export default Icons;
