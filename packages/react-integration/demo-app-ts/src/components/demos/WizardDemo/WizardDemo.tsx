import React from 'react';
import { Button, Modal, Wizard, WizardHeader, WizardStep } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';
import SlackHashIcon from '@patternfly/react-icons/dist/esm/icons/slack-hash-icon';

interface WizardDemoState {
  isOpen: boolean;
  isOpenWithRole: boolean;
}

export class WizardDemo extends React.Component<React.HTMLProps<HTMLDivElement>, WizardDemoState> {
  static displayName = 'WizardDemo';
  state = {
    isOpen: false,
    isOpenWithRole: false
  };

  handleModalToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleRoleWizardToggle = () => {
    this.setState(({ isOpenWithRole }) => ({ isOpenWithRole: !isOpenWithRole }));
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isOpen, isOpenWithRole } = this.state;

    return (
      <React.Fragment>
        <Button id="launchWiz" variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} showClose={false} hasNoBodyWrapper onEscapePress={this.handleModalToggle}>
          <Wizard
            id="modalWizId"
            width={710}
            onClose={this.handleModalToggle}
            header={
              <WizardHeader
                onClose={this.handleModalToggle}
                title="Simple Modal Wizard"
                description="Simple Wizard Description"
              />
            }
          >
            <WizardStep name="A" id="wizard-step-a">
              <p>Step 1</p>
            </WizardStep>
            <WizardStep
              name="B"
              id="wizard-step-b"
              steps={[
                <WizardStep name="B-1" id="wizard-step-b1" key="wizard-step-b1">
                  <p>Step 2</p>
                </WizardStep>,
                <WizardStep name="B-2" id="wizard-step-b2" key="wizard-step-b2">
                  <p>Step 3</p>
                </WizardStep>
              ]}
            />
            <WizardStep name="C" id="wizard-step-c">
              <p>Step 4</p>
            </WizardStep>
            <WizardStep name="D" id="wizard-step-d">
              <p>Step 5</p>
            </WizardStep>
          </Wizard>
        </Modal>
        <Wizard id="inPageWizId" height={500}>
          <WizardStep name="A" id="wizard-step-a">
            <p>Step 1</p>
          </WizardStep>
          <WizardStep
            name="B"
            id="wizard-step-b"
            steps={[
              <WizardStep name="B-1" id="wizard-step-b1" key="wizard-step-b1">
                <p>Step 2</p>
              </WizardStep>,
              <WizardStep name="B-2" id="wizard-step-b2" key="wizard-step-b2">
                <p>Step 3</p>
              </WizardStep>
            ]}
          />
          <WizardStep name="C" id="wizard-step-c">
            <p>Step 4</p>
          </WizardStep>
          <WizardStep name="D" id="wizard-step-d">
            <p>Step 5</p>
          </WizardStep>
        </Wizard>
        <Wizard id="inPageWizWithAnchorsId" height={500}>
          <WizardStep
            name={
              <>
                <ExternalLinkAltIcon /> Read about PF3
              </>
            }
            id="wizard-anchor-pf3"
            navItem={{ component: 'a', href: 'https://www.patternfly.org/v3', target: '_blank' }}
          >
            <p>Step 1</p>
          </WizardStep>
          <WizardStep
            name={
              <>
                <ExternalLinkAltIcon /> Read about PF4
              </>
            }
            id="wizard-anchor-pf4"
            navItem={{ component: 'a', href: 'https://www.patternfly.org/v4', target: '_blank' }}
          >
            <p>Step 2</p>
          </WizardStep>
          <WizardStep
            name={
              <>
                <SlackHashIcon /> Join us on Slack
              </>
            }
            id="wizard-anchor-slack"
            navItem={{ component: 'a', href: 'https://patternfly.slack.com', target: '_blank' }}
          >
            <p>Step 3</p>
          </WizardStep>
        </Wizard>
        <Wizard id="inPageWizWithOverflow" height={500}>
          <WizardStep name="Step without overflow" id="wizard-overflow-without">
            <p>Step 1</p>
          </WizardStep>
          <WizardStep name="Step with overflow" id="wizard-overflow-with">
            <div style={{ height: '800px' }}>
              <p>Step 2</p>
            </div>
          </WizardStep>
        </Wizard>
        <Button id="launchWizOverflow" variant="primary" onClick={this.handleRoleWizardToggle}>
          Show Modal with Overflow
        </Button>
        <Modal isOpen={isOpenWithRole} showClose={false} hasNoBodyWrapper onEscapePress={this.handleRoleWizardToggle}>
          <Wizard
            id="inModalWizWithOverflow"
            height={400}
            width={710}
            onClose={this.handleRoleWizardToggle}
            header={
              <WizardHeader
                onClose={this.handleRoleWizardToggle}
                title="Modal Wizard with Overflow"
                description="Simple Wizard Description"
              />
            }
          >
            <WizardStep body={{ component: 'main' }} name="Step without overflow" id="wizard-overflow-without">
              <p>Step 1</p>
            </WizardStep>
            <WizardStep body={{ component: 'main' }} name="Step with overflow" id="wizard-overflow-with">
              <div style={{ height: '800px' }}>
                <p>Step 2</p>
              </div>
            </WizardStep>
          </Wizard>
        </Modal>
      </React.Fragment>
    );
  }
}
