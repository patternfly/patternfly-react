import React from 'react';
import PropTypes from 'prop-types';
import ImportFilePassive from './ImportFileContent/ImportFilePassive';
import ImportFileActive from './ImportFileContent/ImportFileActive';
import ImportFileReject from './ImportFileContent/ImportFileReject';
import ImportFileAccept from './ImportFileContent/ImportFileAccept';

const ImportFileContent = ({
  text,
  state,
  dropzoneRef,
  maxAmount,
  maxSize,
  acceptedTypes,
  acceptedFiles,
  rejectedFiles,
  progressDone
}) => {
  switch (state) {
    default:
      return null;
    case 'static':
      return (
        <ImportFilePassive
          text={text}
          acceptedTypes={acceptedTypes}
          maxAmount={maxAmount}
          maxSize={maxSize}
          dropzoneRef={dropzoneRef}
          icon="plus-circle"
        />
      );
    case 'active':
      return <ImportFileActive text={text} icon="plus-circle" />;
    case 'accept':
      return (
        <ImportFileAccept
          text={text}
          icon="chevron-circle-up"
          acceptedFiles={acceptedFiles}
          rejectedFiles={rejectedFiles}
          progressDone={progressDone}
        />
      );
    case 'reject':
      return (
        <ImportFileReject
          text={text}
          icon="exclamation-circle"
          rejectedFiles={rejectedFiles}
        />
      );
  }
};

ImportFileContent.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  dropzoneRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxAmount: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired, // in Bytes
  progressDone: PropTypes.number.isRequired
};

export default ImportFileContent;
