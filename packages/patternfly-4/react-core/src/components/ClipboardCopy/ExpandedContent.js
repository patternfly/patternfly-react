import React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const ExpandedContent = ({ className, children, onChange, ...props }) => (
  <div className={css(styles.clipboardCopyExpandableContent, className)} {...props}>
    <textarea
      onChange={e => onChange(e.target.value, e)}
      value={children}
      style={{ resize: 'none', width: '100%', height: '100%', borderWidth: '0' }}
    />
  </div>
);

ExpandedContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
};

ExpandedContent.defaultProps = {
  className: ''
};

export default ExpandedContent;
