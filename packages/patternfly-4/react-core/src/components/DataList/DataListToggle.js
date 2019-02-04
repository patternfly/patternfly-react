import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';
import { Button } from '../Button';

const DataListToggle = ({
  className,
  isExpanded,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  id,
  ...props
}) => (
    <div className={css(styles.dataListToggle, className)} {...props}>
      <Button id={id} variant="plain" aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} aria-expanded={isExpanded}>
        <AngleRightIcon />
      </Button>
    </div>
  );

DataListToggle.propTypes = {
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,
  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': PropTypes.string.isRequired,
  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListToggle.defaultProps = {
  className: '',
  isExpanded: false
};

export default DataListToggle;
