import React from 'react';
import PropTypes from 'prop-types';
import { boolean, number } from '@storybook/addon-knobs';
import { Button } from '../../Button';
import { Wizard } from '../../../index';

const wizardSteps = [
  {
    title: 'General',
    render: () => <p>(Step 1 Contents Here)</p>
  },
  {
    title: 'Details',
    render: () => <p>(Step 2 Contents Here)</p>
  },
  {
    title: 'Results',
    render: () => <p>(Step 3 Contents Here)</p>
  }
];

export class WizardPatternExample extends React.Component {
  state = {
    showModal: false,
    loading: false,
    activeStepIndex: 0 // eslint-disable-line no-unused-state
  };

  close = () => {
    this.setState({ showModal: false, loading: false });
  };
  open = () => {
    this.setState({ showModal: true, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
  renderStateless = () => {
    // We need knobs on the stateless example, because we must drive its state ourselves.
    const { loading, activeStepIndex } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Stateless Wizard
        </Button>

        <Wizard.Pattern
          show={this.state.showModal}
          onHide={this.close}
          onExited={this.close}
          title="Stateless Wizard Pattern Example"
          nextStepDisabled={false}
          steps={wizardSteps}
          loadingTitle="Loading..."
          loadingMessage="This may take a minute."
          onStepChanged={index => this.setState({ activeStepIndex: index })}
          loading={boolean('Loading', loading)}
          activeStepIndex={number('Active Step Index', activeStepIndex, {
            range: true,
            min: 0,
            max: 2
          })}
        />
      </div>
    );
  };
  renderStateful = () => (
    // No knobs for the stateful example, we want to let it control its own state.
    <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>
        Launch Stateful Wizard
      </Button>

      <Wizard.Pattern.Stateful
        show={this.state.showModal}
        onHide={this.close}
        onExited={this.close}
        title="Stateful Wizard Pattern Example"
        shouldDisableNextStep={activeStepIndex => false}
        steps={wizardSteps}
        loadingTitle="Loading..."
        loadingMessage="This may take a minute."
        loading={this.state.loading}
      />
    </div>
  );
  render() {
    return this.props.stateful ? this.renderStateful() : this.renderStateless();
  }
}

WizardPatternExample.propTypes = {
  stateful: PropTypes.bool
};

WizardPatternExample.defaultProps = {
  stateful: false
};

export const wizardPatternExampleSource = `
const wizardSteps = [
  {
    title: 'General',
    render: () => <p>(Step 1 Contents Here)</p>
  },
  {
    title: 'Details',
    render: () => <p>(Step 2 Contents Here)</p>
  },
  {
    title: 'Results',
    render: () => <p>(Step 3 Contents Here)</p>
  }
];

export class WizardPatternExample extends React.Component {
    state = {
      showModal: false,
      loading: false,
      activeStepIndex: 0 // eslint-disable-line no-unused-state
    };
  }
  close = () => {
    this.setState({ showModal: false, loading: false });
  };
  open = () => {
    this.setState({ showModal: true, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
  renderStateless = () => {
    // We need knobs on the stateless example, because we must drive its state ourselves.
    const { loading, activeStepIndex } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Stateless Wizard
        </Button>

        <Wizard.Pattern
          show={this.state.showModal}
          onHide={this.close}
          onExited={this.close}
          title="Stateless Wizard Pattern Example"
          nextStepDisabled={false}
          steps={wizardSteps}
          loadingTitle="Loading..."
          loadingMessage="This may take a minute."
          onStepChanged={index => this.setState({ activeStepIndex: index })}
          loading={boolean('Loading', loading)}
          activeStepIndex={number('Active Step Index', activeStepIndex, {
            range: true,
            min: 0,
            max: 2
          })}
        />
      </div>
    );
  };
  renderStateful = () => {
    // No knobs for the stateful example, we want to let it control its own state.
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch Stateful Wizard
        </Button>

        <Wizard.Pattern.Stateful
          show={this.state.showModal}
          onHide={this.close}
          onExited={this.close}
          title="Stateful Wizard Pattern Example"
          shouldDisableNextStep={activeStepIndex => false}
          steps={wizardSteps}
          loadingTitle="Loading..."
          loadingMessage="This may take a minute."
          loading={this.state.loading}
        />
      </div>
    );
  };
  render() {
    return this.props.stateful ? this.renderStateful() : this.renderStateless();
  }
}
`;
