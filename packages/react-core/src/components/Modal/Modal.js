import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent';

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

// create a node for the modal and render it to the DOM
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

class Modal extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.container = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.container);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalContent {...this.props} />,
      this.container
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
