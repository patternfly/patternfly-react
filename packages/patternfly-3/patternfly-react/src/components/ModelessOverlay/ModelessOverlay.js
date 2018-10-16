import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Timer from '../../common/Timer';
import { excludeKeys } from '../../common/helpers';

class ModelessOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isIn: false };
    this.inTimer = new Timer(this.updateForTransitions, 150);
  }

  componentWillUnmount() {
    this.inTimer.clearTimer();
  }

  updateForTransitions = () => {
    this.setState({ isIn: this.props.show });
  };

  render() {
    const { children, className, bsSize, show, ...otherProps } = this.props;
    const { isIn } = this.state;

    const classes = classNames(
      'modal modeless-pf fade right-side-modal-pf',
      { shown: show || isIn, in: show && isIn },
      className
    );

    if (isIn !== show) {
      this.inTimer.clearTimer();
      this.inTimer.startTimer();
    }

    const dialogClasses = classNames('modal-dialog', {
      'modal-sm': bsSize === 'sm' || bsSize === 'small',
      'modal-lg': bsSize === 'lg' || bsSize === 'large'
    });
    return (
      <div role="dialog" tabIndex={-1} className={classes} {...excludeKeys(otherProps, ['show'])}>
        <div className={dialogClasses}>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}

ModelessOverlay.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** When true, the dialog is shown */
  show: PropTypes.bool,
  /** Component size variations (effects dialog width). */
  bsSize: PropTypes.oneOf(['lg', 'large', 'sm', 'small', 'default'])
};

ModelessOverlay.defaultProps = {
  children: null,
  className: '',
  show: false,
  bsSize: 'default'
};

export default ModelessOverlay;
