import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';

const DataListContent = ({ className, children, isHidden, 'aria-label': ariaLabel, ...props }) => (
  <section
    className={css(styles.dataListExpandableContent, className)}
    hidden={isHidden}
    aria-label={ariaLabel}
    {...props}
  >
    {children}
  </section>
);

DataListContent.propTypes = {
  /** Content rendered inside the DataList item */
  children: PropTypes.node,
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isHidden: PropTypes.bool,
  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};

DataListContent.defaultProps = {
  className: '',
  isHidden: false
};

export default DataListContent;
