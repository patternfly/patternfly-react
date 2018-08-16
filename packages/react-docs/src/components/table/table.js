import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.styles';
import { css } from '@patternfly/react-styles';

const propTypes = {
  children: PropTypes.any,
  align: PropTypes.oneOf(['left', 'center', 'right']), // eslint-disable-line
  className: PropTypes.string // eslint-disable-line
};

const defaultProps = {
  children: null,
  align: null,
  className: ''
};

export const TD = ({ children, align, className, ...props }) => (
  <td {...props} className={css(className, styles.cell, align && styles[`${align}Align`])}>
    {children}
  </td>
);
TD.propTypes = propTypes;
TD.defaultProps = defaultProps;

export const TH = ({ children, align }) => (
  <th className={css(styles.cell, align && styles[`${align}Align`])}>{children}</th>
);
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
