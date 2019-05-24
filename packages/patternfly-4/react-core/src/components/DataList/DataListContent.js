import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

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
  /** Id for the row */
  rowid: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: PropTypes.bool,
  /** Flag to remove padding from the expandable content */
  noPadding: PropTypes.bool,
  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <section> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataListContent.defaultProps = {
  children: null,
  className: '',
  id: '',
  rowid: '',
  isHidden: false,
  noPadding: false
};

export default DataListContent;
