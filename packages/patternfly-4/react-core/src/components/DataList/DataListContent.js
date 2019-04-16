import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

const DataListContent = ({
  className,
  children,
  id,
  isHidden,
  'aria-label': ariaLabel,
  noPadding,
  rowid,
  ...props
}) => (
  <section
    id={id}
    className={css(styles.dataListExpandableContent, className)}
    hidden={isHidden}
    aria-label={ariaLabel}
    {...props}
  >
    <div className={css(styles.dataListExpandableContentBody, noPadding && styles.modifiers.noPadding)}>{children}</div>
  </section>
);

DataListContent.propTypes = {
  /** Content rendered inside the DataList item */
  children: PropTypes.node,
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Identify the DataListContent item */
  id: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: PropTypes.bool,
  /** Flag to remove padding from the expandable content */
  noPadding: PropTypes.bool,
  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

DataListContent.defaultProps = {
  children: null,
  className: '',
  id: '',
  isHidden: false,
  noPadding: false
};

export default DataListContent;
