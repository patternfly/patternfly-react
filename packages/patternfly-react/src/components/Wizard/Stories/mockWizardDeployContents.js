import React from 'react';
import PropTypes from 'prop-types';

class MockWizardDeployContents extends React.Component {
  constructor() {
    super();
    this.state = { deploying: true };
  }
  componentWillReceiveProps(nextProps) {
    const { active } = this.props;
    if (!nextProps.active) {
      this.setState({ deploying: true });
    } else if (!active && nextProps.active) {
      setTimeout(() => {
        this.setState({ deploying: false });
      }, 3000);
    }
  }
  render() {
    if (this.state.deploying) {
      return (
        <div className="wizard-pf-process blank-slate-pf">
          <div className="spinner spinner-lg blank-slate-pf-icon" />
          <h3 className="blank-slate-pf-main-action">Deployment in progress</h3>
          <p className="blank-slate-pf-secondary-action">
            Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.{' '}
          </p>
        </div>
      );
    }
    return (
      <div className="wizard-pf-complete blank-slate-pf">
        <div className="wizard-pf-success-icon">
          <span className="glyphicon glyphicon-ok-circle" />
        </div>
        <h3 className="blank-slate-pf-main-action">Deployment was successful</h3>
        <p className="blank-slate-pf-secondary-action">
          Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi vivamus, lorem sociosqu eget nunc amet.{' '}
        </p>
        <button type="button" className="btn btn-lg btn-primary">
          View Deployment
        </button>
      </div>
    );
  }
}
MockWizardDeployContents.propTypes = {
  active: PropTypes.bool.isRequired
};
export default MockWizardDeployContents;
