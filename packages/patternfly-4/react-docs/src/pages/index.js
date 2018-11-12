import React from 'react';
import ReactDOM from 'react-dom';
import Content from '../components/content';
import { Title } from '@patternfly/react-core';
import { StyleSheet, css } from '@patternfly/react-styles';
import packageJson from '../../../react-core/package.json';
import {
  global_Color_dark_100 as heroBackgrounColor,
  global_Color_light_100 as heroTextColor
} from '@patternfly/react-tokens';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe'); // eslint-disable-line global-require
  axe(React, ReactDOM, 1000);
}

const styles = StyleSheet.create({
  hero: {
    height: '100vh',
    backgroundColor: heroBackgrounColor.var,
    display: 'flex',
    alignItems: 'center'
  },
  heroText: {
    color: heroTextColor.var
  }
});

const IndexPage = () => (
  <div>
    <div className={css(styles.hero)}>
      <Content>
        <Title size="4xl" className={css(styles.heroText)}>
          PatternFly React
        </Title>
        <Title size="md" className={css(styles.heroText)}>
          Version: {packageJson.version}
        </Title>
      </Content>
    </div>
  </div>
);

export default IndexPage;
