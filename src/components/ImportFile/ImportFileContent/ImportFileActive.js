import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../Icon';

const ImportFileActive = ({ text, icon, className, ...props }) => {
  const classes = ClassNames('import-file-active-text-pf', className);

  return (
    <div className={classes}>
      <h1>
        <Icon type="fa" name={icon} size="2x" />
      </h1>
      <h1>{text}</h1>
    </div>
  );
};
ImportFileActive.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Zone Text */
  text: PropTypes.string,
  /** Icon Name */
  icon: PropTypes.string
};
ImportFileActive.defaultProps = {
  className: '',
  text: null,
  icon: null
};
export default ImportFileActive;
