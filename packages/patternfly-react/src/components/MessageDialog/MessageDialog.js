import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../common/helpers';
import { Modal, Button } from '../../index';

const MessageDialog = ({
  show,
  onHide,
  primaryAction,
  secondaryAction,
  title,
  icon,
  primaryContent,
  secondaryContent,
  primaryActionButtonBsStyle,
  secondaryActionButtonBsStyle,
  primaryActionButtonContent,
  secondaryActionButtonContent,
  className,
  footer,
  enforceFocus,
  ...props
}) => (
  <Modal
    className={classNames('message-dialog-pf', className)}
    show={show}
    onHide={onHide}
    enforceFocus={enforceFocus}
    {...props}
  >
    <Modal.Header>
      <Modal.CloseButton onClick={onHide} />
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {icon && icon}
      <div>
        {primaryContent && primaryContent}
        {secondaryContent && secondaryContent}
      </div>
    </Modal.Body>
    <Modal.Footer>
      {!footer ? (
        <React.Fragment>
          {secondaryActionButtonContent && (
            <Button
              bsStyle={secondaryActionButtonBsStyle}
              onClick={secondaryAction}
            >
              {secondaryActionButtonContent}
            </Button>
          )}
          <Button
            autoFocus
            bsStyle={primaryActionButtonBsStyle}
            onClick={primaryAction}
          >
            {primaryActionButtonContent}
          </Button>
        </React.Fragment>
      ) : (
        footer
      )}
    </Modal.Footer>
  </Modal>
);

MessageDialog.propTypes = {
  /** additional class(es) */
  className: PropTypes.string,
  /** When true, the modal will show itself */
  show: PropTypes.bool.isRequired,
  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer primary action button */
  primaryAction: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: PropTypes.func,
  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: PropTypes.string,
  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: PropTypes.string,
  /** content for default footer primary action button */
  primaryActionButtonContent: PropTypes.node.isRequired,
  /** content for default footer secondary action button */
  secondaryActionButtonContent: PropTypes.node,
  /** modal title */
  title: PropTypes.string,
  /** modal body icon */
  icon: PropTypes.node,
  /** modal body primary content */
  primaryContent: PropTypes.node,
  /** modal body secondary content */
  secondaryContent: PropTypes.node,
  /** custom footer */
  footer: PropTypes.node,
  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: PropTypes.bool
};

MessageDialog.defaultProps = {
  className: '',
  secondaryAction: noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryContent: null,
  secondaryContent: null,
  footer: null,
  enforceFocus: true
};

export default MessageDialog;
