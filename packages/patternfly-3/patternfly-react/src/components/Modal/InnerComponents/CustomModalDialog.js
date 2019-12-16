/**
 * CustomModalDialog creates custom ReactBootstrap ModalDialog
 * https://github.com/react-bootstrap/react-bootstrap/blob/bs3-dev/src/ModalDialog.js
 * Up-to-date with the original as of https://github.com/react-bootstrap/react-bootstrap/commit/87a9a97f8670f3a02436f8f520caf36f88e4bdab
 *
 * This extends ModalDialog and adds contentClassName prop for setting
 * `modal-content` div's class
 */
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import * as utils from 'react-bootstrap/lib/utils';

const { bsClass } = utils.bootstrapUtils;
const { bsSizes } = utils.bootstrapUtils;
const { getClassSet } = utils.bootstrapUtils;
const { prefix } = utils.bootstrapUtils;
const { splitBsProps } = utils.bootstrapUtils;

// React Bootstrap utils/StyleConfig Size is currently not exported
const Size = {
  LARGE: 'large',
  SMALL: 'small'
};

// eslint-disable-next-line react/prefer-stateless-function
class CustomModalDialog extends React.Component {
  render() {
    const { dialogClassName, contentClassName, className, style, children, onMouseDownDialog, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const bsClassName = prefix(bsProps);

    const modalStyle = { display: 'block', ...style };

    const dialogClasses = {
      ...getClassSet(bsProps),
      [bsClassName]: false,
      [prefix(bsProps, 'dialog')]: true
    };

    return (
      <div
        {...elementProps}
        tabIndex="-1"
        role="dialog"
        style={modalStyle}
        className={classNames(className, bsClassName)}
      >
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={classNames(dialogClassName, dialogClasses)} onMouseDown={onMouseDownDialog}>
          <div className={classNames(prefix(bsProps, 'content'), contentClassName)} role="document">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

CustomModalDialog.propTypes = {
  /** A css class to apply to the Modal dialog DOM node. */
  dialogClassName: PropTypes.string,
  /** custom modal-content class added to the content DOM node */
  contentClassName: PropTypes.string,
  /** base modal class name */
  className: PropTypes.string,
  /** additional modal styles */
  style: PropTypes.object,
  /** Children nodes */
  children: PropTypes.node
};

CustomModalDialog.defaultProps = {
  dialogClassName: '',
  contentClassName: '',
  className: '',
  style: {},
  children: null
};

export default bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], CustomModalDialog));
