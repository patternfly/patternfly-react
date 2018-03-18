import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const ImportFileStatic = ({
  maxSize,
  maxAmount,
  dropzoneRef,
  text,
  icon,
  className,
  ...props
}) => {
  const classes = ClassNames('import-file-text-pf', className);

  return (
    <div className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
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
};
ImportFileStatic.propTypes = {
  /** dropzone reference */
  dropzoneRef: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string,
  /** maxSize prop */
  maxSize: PropTypes.number,
  /** max Amount of files prop */
  maxAmount: PropTypes.number
};
ImportFileStatic.defaultProps = {
  className: '',
  dropzoneRef: null,
  text: null,
  icon: null,
  maxAmount: 0,
  maxSize: 0
};
export default ImportFileStatic;
