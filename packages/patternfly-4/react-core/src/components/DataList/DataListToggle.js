import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';
import { Button, ButtonVariant } from '../Button';

const propTypes = {
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,
  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,
  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': PropTypes.string,
  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string,
  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'aria-controls': PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  'aria-controls': '',
  'aria-label': 'Details',
  'aria-labelledby': '',
  className: '',
  isExpanded: false
};

const DataListToggle = ({
  className,
  isExpanded,
  'aria-controls': ariaControls,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  rowid,
  id,
  ...props
}) => {
  if (ariaLabel === "Details") {
    ariaLabelledBy = `${rowid} ${id}`;
  }

  return (
    <div className={css(styles.dataListToggle, className)} {...props}>
      <Button
        id={id}
        variant={ButtonVariant.plain}
        aria-controls={ariaControls !== '' && ariaControls}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-expanded={isExpanded}
      >
        <AngleRightIcon />
      </Button>
    </div>
  );
}

DataListToggle.propTypes = propTypes;
DataListToggle.defaultProps = defaultProps;

export default DataListToggle;
