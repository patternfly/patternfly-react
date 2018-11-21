import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../internal/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/Backdrop/backdrop.css';

const propTypes = {
  /** content rendered inside the Modal. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the Modal */
  className: PropTypes.string,
  /** Flag to show the modal */
  isOpen: PropTypes.bool,
  /** Content of the Modal Header */
  title: PropTypes.string.isRequired,
  /** Flag to show the title */
  hideTitle: PropTypes.bool,
  /** Action buttons to put in the Modal Footer */
  actions: PropTypes.any,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func,
  /** Creates a large version of the Modal */
  isLarge: PropTypes.bool
};

const defaultProps = {
  className: '',
  isOpen: false,
  hideTitle: false,
  actions: [],
  onClose: () => undefined,
  isLarge: false
};

let currentId = 0;

class Modal extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  id = `pf-modal-${currentId++}`;

  handleEscKeyClick = event => {
    if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.body.appendChild(this.container);
    document.addEventListener('keydown', this.handleEscKeyClick, false);
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.container) {
      this.container = document.createElement('div');
    }

    return ReactDOM.createPortal(<ModalContent {...this.props} id={this.id} />, this.container);
  }
}

export default Modal;
