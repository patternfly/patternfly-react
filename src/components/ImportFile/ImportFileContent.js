import React from 'react';
import PropTypes from 'prop-types';
import ImportFileStatic from './ImportFileContent/ImportFileStatic';
import ImportFileActive from './ImportFileContent/ImportFileActive';
import ImportFileReject from './ImportFileContent/ImportFileReject';

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
  switch (state) {
    default:
      return null;
    case 'static':
      return (
        <ImportFileStatic
          text={text}
          maxAmount={maxAmount}
          maxSize={maxSize}
          dropzoneRef={dropzoneRef}
          icon="plus-square"
        />
      );
    case 'active':
      return <ImportFileActive text={text} icon="plus-square" />;
    case 'accept':
      return <div>ACCEPTED</div>;
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
  maxSize: PropTypes.number.isRequired // in Bytes
};

export default ImportFileContent;
