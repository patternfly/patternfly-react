import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { ProgressBar } from '../../ProgressBar';

const ImportFileAccept = ({
  progressDone,
  acceptedFiles,
  rejectedFiles,
  text,
  icon,
  className,
  ...props
}) => {
  const classes = ClassNames('import-file-accept-text-pf', className);
  const accepted = acceptedFiles.map(f => f.name).join(', ');
  const rejected = rejectedFiles.map(f => f.name).join(', ');
  return (
    <div key="accept" className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
      </h1>
      <h1>{text}</h1>
      <div>
        <h5>{accepted}</h5>
      </div>
      <ProgressBar active now={progressDone} />
      {rejectedFiles.length > 0 && (
        <div>
          <h5>Rejected: {rejected}</h5>
        </div>
      )}
    </div>
  );
};
ImportFileAccept.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string,
  /** Accepted,Rejected Files */
  acceptedFiles: PropTypes.array,
  rejectedFiles: PropTypes.array,
  /** Progress Done so far */
  progressDone: PropTypes.number
};
ImportFileAccept.defaultProps = {
  className: '',
  text: null,
  icon: null,
  acceptedFiles: null,
  rejectedFiles: null,
  progressDone: 0
};
export default ImportFileAccept;
