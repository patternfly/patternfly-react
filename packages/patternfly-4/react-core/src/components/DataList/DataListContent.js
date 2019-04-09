import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

const propTypes = {
  /** Content rendered inside the DataList item */
  children: PropTypes.node,
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Identify the DataListContent item */
  id: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: PropTypes.bool,
  /** Adds accessible text to the expandable context section */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  id: '',
  isHidden: false
};

const DataListContent = ({ className, children, id, isHidden, rowid, ...props }) => (
  <section
    id={id}
    className={css(styles.dataListExpandableContent, className)}
    hidden={isHidden}
    {...props}
  >
    {children}
  </section>
);

DataListContent.propTypes = propTypes;
DataListContent.defaultProps = defaultProps;

export default DataListContent;
