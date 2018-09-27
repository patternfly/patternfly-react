import React from 'react';
import PropTypes from 'prop-types';
import ModalBoxBody from './ModalBoxBody';
import ModalBoxHeader from './ModalBoxHeader';
import ModalBoxHCloseButton from './ModalBoxCloseButton';
import ModalBox from './ModalBox';
import ModalBoxFooter from './ModalBoxFooter';
import Backdrop from '../Backdrop/Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';

const propTypes = {
  /** content rendered inside the Modal. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Flag to show the modal */
  isOpen: PropTypes.bool,
  /** Content of the Modal Header */
  title: PropTypes.string.isRequired,
  /** Flag to show the title */
  hideTitle: PropTypes.bool,
  /** Content of the Modal Footer */
  actions: PropTypes.any,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Creates a large version of the Modal */
  isLarge: PropTypes.bool,
  /** id to use for Modal Box description */
  id: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  isOpen: false,
  hideTitle: false,
  actions: [],
  onClose: () => undefined,
  isLarge: false
};

const ModalContent = ({ children, className, isOpen, title, hideTitle, actions, onClose, isLarge, id, ...props }) => {
  const modalBoxHeader = title && <ModalBoxHeader> {title} </ModalBoxHeader>;
  const modalBoxFooter = actions && <ModalBoxFooter> {actions} </ModalBoxFooter>;
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop>
      <Bullseye>
        <ModalBox className={className} isLarge={isLarge} title={title} id={id}>
          <ModalBoxHCloseButton onClose={onClose} />
          {modalBoxHeader}
          <ModalBoxBody {...props} id={id}>
            {children}
          </ModalBoxBody>
          {modalBoxFooter}
        </ModalBox>
      </Bullseye>
    </Backdrop>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
