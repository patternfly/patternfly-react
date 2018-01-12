import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon, Modal } from '../../index';

const AboutModal = ({
  children,
  className,
  show,
  onHide,
  productTitle,
  logo,
  altLogo,
  trademarkText,
  ...rest
}) => {
  return (
    <Modal
      className={className}
      contentClassName="about-modal-pf"
      show={show}
      onHide={onHide}
      {...rest}
    >
      <Modal.Header>
        <Button
          className="close"
          onClick={onHide}
          aria-hidden="true"
          aria-label="Close"
        >
          <Icon type="pf" name="close" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <h1>{productTitle}</h1>
        {children}
        <div className="trademark-pf">{trademarkText}</div>
      </Modal.Body>
      <Modal.Footer>
        <img src={logo} alt={altLogo} />
      </Modal.Footer>
    </Modal>
  );
};

AboutModal.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to show the modal */
  show: PropTypes.bool.isRequired,
  /** Function to call when modal is closed */
  onHide: PropTypes.func.isRequired,
  /** Text to show for the product title */
  productTitle: PropTypes.string,
  /** Image Source for the Product logo */
  logo: PropTypes.object,
  /** Alternate text if invalid logo */
  altLogo: PropTypes.string,
  /** Trademark information text */
  trademarkText: PropTypes.string
};

export default AboutModal;
