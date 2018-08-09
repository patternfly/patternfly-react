import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.styles';
import { css } from '@patternfly/react-styles';

const propTypes = {
  children: PropTypes.any
};
const defaultProps = {
  children: null
};

export const TD = ({ children }) => <td className={css(styles.cell)}>{children}</td>;
TD.propTypes = propTypes;
TD.defaultProps = defaultProps;

export const TH = ({ children }) => <th className={css(styles.cell)}>{children}</th>;
TH.propTypes = propTypes;
TH.defaultProps = defaultProps;

export const Row = ({ children }) => <tr className={css(styles.row)}>{children}</tr>;
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export const Heading = ({ children }) => (
  <thead>
    <Row>{children}</Row>
  </thead>
);
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export const Body = ({ children }) => <tbody>{children}</tbody>;
Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export const Table = ({ children }) => <table className={css(styles.table)}>{children}</table>;
Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
