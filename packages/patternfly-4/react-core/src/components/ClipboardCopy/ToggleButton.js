import React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';

const ToggleButton = ({ isExpanded, onClick, className, id, textId, contentId, ...props }) => (
  <button
    onClick={onClick}
    className={css(styles.clipboardCopyGroupToggle, className)}
    id={id}
    aria-labelledby={`${id} ${textId}`}
    aria-controls={`${contentId}`}
    aria-expanded={`${isExpanded}`}
    {...props}
  >
    <AngleRightIcon aria-hidden="true" className={css(styles.clipboardCopyGroupToggleIcon)} />
  </button>
);

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool,
  className: PropTypes.string
};

ToggleButton.defaultProps = {
  isExpanded: false,
  className: ''
};

export default ToggleButton;
