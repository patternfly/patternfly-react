import React from 'react';
import styles from '@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

class ExpandedContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, children, onChange, ...props } = this.props;
    return (
      <div
        suppressContentEditableWarning="true"
        className={css(styles.clipboardCopyExpandableContent, className)}
        onInput={e => onChange(e.target.innerText, e)}
        contentEditable="true"
        {...props}
      >
        {children}
      </div>
    );
  }
}

ExpandedContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
};

ExpandedContent.defaultProps = {
  className: ''
};

export default ExpandedContent;
