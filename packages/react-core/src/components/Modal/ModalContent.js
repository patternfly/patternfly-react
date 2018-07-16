import React from 'react';
import PropTypes from 'prop-types';
import ModalBoxBody from './ModalBoxBody';
import ModalBoxHeader from './ModalBoxHeader';
import ModalBoxHCloseButton from './ModalBoxCloseButton';
import ModalBox from './ModalBox';
import ModalBoxFooter from './ModalBoxFooter';
import Backdrop from './Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';

const propTypes = {
  /** content rendered inside the Modal. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Flag to show the modal */
  show: PropTypes.bool,
  /** Content of the Modal Header */
  header: PropTypes.any,
  /** Content of the Modal Footer */
  footer: PropTypes.any,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Creates a large version of the Modal */
  isLarge: PropTypes.bool,
  /* Aria label used for Modal Box Header */
  label: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  show: false,
  header: null,
  footer: null,
  onClose: () => undefined,
  isLarge: false
};

const ModalContent = ({
  children,
  className,
  show,
  header,
  footer,
  onClose,
  isLarge,
  label,
  ...props
}) => {
  const modalBoxHeader = header ? (
    <ModalBoxHeader> {header} </ModalBoxHeader>
  ) : null;
  const modalBoxFooter = footer ? (
    <ModalBoxFooter> {footer} </ModalBoxFooter>
  ) : null;
  if (show) {
    return (
      <div {...props}>
        <Backdrop>
          <Bullseye>
            <ModalBox className={className} isLarge={isLarge} label={label}>
              <ModalBoxHCloseButton onClose={onClose} />
              {modalBoxHeader}
              <ModalBoxBody> {children} </ModalBoxBody>
              {modalBoxFooter}
            </ModalBox>
          </Bullseye>
        </Backdrop>
      </div>
    );
  }
  return null;
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
