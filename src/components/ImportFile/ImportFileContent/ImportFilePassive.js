import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';
import { Button } from '../../Button';

const ImportFilePassive = ({
  acceptedTypes,
  maxSize,
  maxAmount,
  browseClicked,
  text,
  icon,
  className,
  ...props
}) => {
  const classes = classNames('import-file-text-pf', className);

  return (
    <div className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
      </h1>
      <h1>
        <Button bsStyle="link" onClick={browseClicked}>
          <h1>Browse</h1>
        </Button>
        {text}
      </h1>
      <h5 className="max-amount">
        Max: {maxAmount} files ({maxAmount * maxSize / 1024}KB Total)
      </h5>
      <h5>Supported File types: {acceptedTypes}</h5>
    </div>
  );
};
ImportFilePassive.propTypes = {
  /** Browse click func */
  browseClicked: PropTypes.func,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string,
  /** maxSize prop */
  maxSize: PropTypes.number,
  /** max Amount of files prop */
  maxAmount: PropTypes.number,
  /** accepted file types */
  acceptedTypes: PropTypes.string
};
ImportFilePassive.defaultProps = {
  className: '',
  browseClicked: null,
  text: null,
  icon: null,
  acceptedTypes: null,
  maxAmount: 0,
  maxSize: 0
};
export default ImportFilePassive;
