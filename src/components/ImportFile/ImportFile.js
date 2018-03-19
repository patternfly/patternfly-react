import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import FileDrop from 'react-file-drop';

/** onDrop onDragOver onDragLeave dropEffect targetAlwaysVisible onFrameDragEnter onFrameDragLeave onFrameDrop */

const ImportFile = ({ frame, drag, children, className, ...props }) => {
  const classes = ClassNames('my-uploader', 'import-file-pf', className);

  const handleFileDrop = (files, event) => {
    console.log(files, event);
  };

  return (
    <FileDrop
      targetAlwaysVisible
      className={classes}
      frame={frame}
      onDrop={handleFileDrop}
    >
      {children}
    </FileDrop>
  );
};

ImportFile.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Frame for the Drag and Drop */
  frame: PropTypes.element,
  /** DragNDrop bool */
  drag: PropTypes.bool
};
ImportFile.defaultProps = {
  className: '',
  frame: document,
  drag: false
};
export default ImportFile;
