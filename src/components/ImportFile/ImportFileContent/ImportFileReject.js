import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';

const ImportFileReject = ({
  rejectedFiles,
  text,
  icon,
  className,
  ...props
}) => {
  const classes = ClassNames('import-file-reject-text-pf', className);

  return (
    <div className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
      </h1>
      <h1>{text}</h1>
      {rejectedFiles.map((file, i) => (
        <div>
          <h5 key={i}>Rejected {file.name}</h5>
        </div>
      ))}
    </div>
  );
};
ImportFileReject.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string,
  /** Rejected Files */
  rejectedFiles: PropTypes.array
};
ImportFileReject.defaultProps = {
  className: '',
  text: null,
  icon: null,
  rejectedFiles: null
};
export default ImportFileReject;
