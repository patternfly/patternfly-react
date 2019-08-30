import React from 'react';
import ModalPattern from './ModalPattern';
import { propOrState, excludeKeys } from '../../../index';

/**
 * Stateful Modal Pattern component.
 */
class StatefulModalPattern extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      show: propOrState(nextProps, prevState, 'show')
    };
  }

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  open = () => {
    this.setState({ show: true });
  }

  close = () => {
    this.setState({ show: false });
  }

  getModalPatternProps = () => this.props;

  render() {
    return <ModalPattern {...this.getModalPatternProps()} show={this.state.show} onClose={this.close} />;
  }
}

StatefulModalPattern.propTypes = {
  ...excludeKeys(ModalPattern.propTypes, ['onClose'])
};

StatefulModalPattern.defaultProps = {
  ...excludeKeys(ModalPattern.defaultProps, ['onClose', 'show'])
};

StatefulModalPattern.displayName = 'StatefulModalPattern';

export default StatefulModalPattern;
