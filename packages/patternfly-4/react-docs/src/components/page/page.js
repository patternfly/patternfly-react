import React from 'react';
import PropTypes from 'prop-types';
import styles from './page.styles';
import { css } from '@patternfly/react-styles';
import Helmet from 'react-helmet';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  navigation: PropTypes.node
};

const defaultProps = {
  title: 'PatternFly',
  children: null,
  navigation: null
};

const Page = ({ navigation, children, title }) => (
  <React.Fragment>
    <Helmet title={title} />
    <div className={css(styles.page)}>
      <aside className={css(styles.nav)}>{navigation}</aside>
      <main className={css(styles.main)}>{children}</main>
    </div>
  </React.Fragment>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
