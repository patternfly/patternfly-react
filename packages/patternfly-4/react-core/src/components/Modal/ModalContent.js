import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import ModalBoxBody from './ModalBoxBody';
import ModalBoxHeader from './ModalBoxHeader';
import ModalBoxHCloseButton from './ModalBoxCloseButton';
import ModalBox from './ModalBox';
import ModalBoxFooter from './ModalBoxFooter';
import Backdrop from '../Backdrop/Backdrop';
import Bullseye from '../../layouts/Bullseye/Bullseye';
import bullseyeStyle from '@patternfly/patternfly/layouts/Bullseye/bullseye.css';
import { css } from '@patternfly/react-styles';

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
  /** Default width of the Modal. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Creates a large version of the Modal */
  isLarge: PropTypes.bool,
  /** Creates a small version of the Modal */
  isSmall: PropTypes.bool,
  /** id to use for Modal Box description */
  'aria-describedby': PropTypes.string,
  /** id of the ModalBoxBody */
  id: PropTypes.string.isRequired,
  /** Additional props are spread to the ModalBoxBody component */
  '': PropTypes.any
};

const defaultProps = {
  width: null,
  className: '',
  isOpen: false,
  hideTitle: false,
  actions: [],
  onClose: () => undefined,
  isLarge: false,
  isSmall: false,
  'aria-describedby': ''
};

const ModalContent = ({
  children,
  className,
  isOpen,
  title,
  hideTitle,
  actions,
  onClose,
  isLarge,
  isSmall,
  width,
  'aria-describedby': ariaDescribedBy,
  id,
  ...props
}) => {
  const modalBoxHeader = <ModalBoxHeader hideTitle={hideTitle}> {title} </ModalBoxHeader>;
  const modalBoxFooter = actions.length > 0 && <ModalBoxFooter> {actions} </ModalBoxFooter>;
  if (!isOpen) {
    return null;
  }
  return (
    <Backdrop>
      <Bullseye>
        <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }} className={css(bullseyeStyle.bullseye)}>
          <ModalBox style={{ width }} className={className} isLarge={isLarge} isSmall={isSmall} title={title} id={ariaDescribedBy || id}>
            <ModalBoxHCloseButton onClose={onClose} />
            {modalBoxHeader}
            <ModalBoxBody {...props} id={id}>
              {children}
            </ModalBoxBody>
            {modalBoxFooter}
          </ModalBox>
        </FocusTrap>
      </Bullseye>
    </Backdrop>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
