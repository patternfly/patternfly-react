import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';
import { EllipsisVIcon } from '@patternfly/react-icons';
import { Button } from '../Button';

const DataListAction = ({ className, id, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...props }) => (
  <div className={css(styles.dataListAction, className)} {...props}>
    <Button variant="plain" id={id} aria-labelledby={ariaLabelledBy} aria-label={ariaLabel}>
      <EllipsisVIcon />
    </Button>
  </div>
);

DataListAction.propTypes = {
  /** Content rendered inside the DataList list */
  children: PropTypes.node,
  /** Additional classes added to the DataList list */
  className: PropTypes.string,
  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Adds accessible text to the DataList item */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListAction.defaultProps = {
  children: null,
  className: ''
};

export default DataListAction;
