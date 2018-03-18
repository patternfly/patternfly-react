import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

const ImportFileContent = ({
  text,
  state,
  dropzoneRef,
  maxAmount,
  maxSize,
  acceptedTypes,
  acceptedFiles,
  rejectedFiles
}) => {
  const classes = ClassNames({
    'import-file-text-pf': state === 'static',
    'import-file-active-text-pf': state === 'active',
    'import-file-accept-text-pf': state === 'accept',
    'import-file-reject-text-pf': state === 'reject'
  });

  switch (state) {
    default:
      return null;
    case 'static':
      return (
        <div className={classes}>
          <h1>
            <Icon type="fa" name="plus-square" size="2x" />
          </h1>
          <h1>
            <Button
              bsStyle="link"
              onClick={() => {
                dropzoneRef.open();
              }}
            >
              <h1>Browse</h1>
            </Button>
            {text}
          </h1>
          <h5>
            Max: {maxAmount} files ({maxAmount * maxSize / 1024}KB Total)
          </h5>
        </div>
      );
    case 'active':
      return (
        <div className={classes}>
          <h1>
            <Icon type="fa" name="plus-square" size="2x" />
          </h1>
          <h1>{text}</h1>
        </div>
      );
    case 'accept':
      return (
        <div className={classes}>
          {acceptedFiles.map((file, i) => (
            <div>
              <h5 key={i}>
                <Spinner inline loading size="xs" />
                Uploading {file.name}, size:{file.size}
              </h5>
            </div>
          ))}
          {rejectedFiles.map((file, i) => (
            <div>
              <h5 key={i}>Rejected {file.name}</h5>
            </div>
          ))}
        </div>
      );
    case 'reject':
      return (
        <div className={classes}>
          <h1>
            <Icon type="fa" name="exclamation-circle" size="2x" />
          </h1>
          <h1>{text}</h1>
          {rejectedFiles.map((file, i) => (
            <div>
              <h5 key={i}>Rejected {file.name}</h5>
            </div>
          ))}
        </div>
      );
  }
};

ImportFileContent.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  dropzoneRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxAmount: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired // in Bytes
};

export default ImportFileContent;
