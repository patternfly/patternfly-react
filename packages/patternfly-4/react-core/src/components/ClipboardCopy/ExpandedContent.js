import React from 'react';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

class ExpandedContent extends React.Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    if (this.contentRef.current) {
      this.contentRef.current.innerText = this.props.children;
    }
  }

  render() {
    const { className, children, onChange, isReadOnly, ...props } = this.props;
    return (
      <div
        suppressContentEditableWarning="true"
        ref={this.contentRef}
        className={css(styles.clipboardCopyExpandableContent, className)}
        onInput={e => onChange(e.target.innerText, e)}
        contentEditable= {!isReadOnly}
        {...props}
      />
    );
  }
}

ExpandedContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired, 
  isReadOnly: PropTypes.bool
};

ExpandedContent.defaultProps = {
  className: '', 
  isReadOnly: false
};

export default ExpandedContent;
