import React from 'react';
import MockWizardBase from './mockWizardBase';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Wizard } from '../index';

import { mockWizardItems } from './mockWizardItems';

import { renderWizardSteps, renderSidebarItems, renderWizardContents } from './mockWizardRenderers';

export class WizardExample extends MockWizardBase {
  open = () => {
    this.setState({ showModal: true });
  };
  close = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { showModal, activeStepIndex, activeSubStepIndex } = this.state;

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.open}>
          Launch wizard
        </Button>

        <Wizard show={showModal} onHide={this.close}>
          <Wizard.Header onClose={this.close} title="Wizard Title" />
          <Wizard.Body>
            <Wizard.Steps
              steps={renderWizardSteps(mockWizardItems, activeStepIndex, activeSubStepIndex, this.onStepClick)}
            />
            <Wizard.Row>
              <Wizard.Sidebar
                items={renderSidebarItems(
                  mockWizardItems,
                  activeStepIndex,
                  activeSubStepIndex,
                  this.onSidebarItemClick
                )}
              />
              <Wizard.Main>{renderWizardContents(mockWizardItems, activeStepIndex, activeSubStepIndex)}</Wizard.Main>
            </Wizard.Row>
          </Wizard.Body>
          <Wizard.Footer>
            <Button bsStyle="default" className="btn-cancel" onClick={this.close}>
              Cancel
            </Button>
            <Button
              bsStyle="default"
              disabled={activeStepIndex === 0 && activeSubStepIndex === 0}
              onClick={this.onBackButtonClick}
            >
              <Icon type="fa" name="angle-left" />
              Back
            </Button>
            {(activeStepIndex === 0 || activeStepIndex === 1) && (
              <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                Next
                <Icon type="fa" name="angle-right" />
              </Button>
            )}
            {activeStepIndex === 2 &&
              activeSubStepIndex === 0 && (
                <Button bsStyle="primary" onClick={this.onNextButtonClick}>
                  Deploy
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
            {activeStepIndex === 2 &&
              activeSubStepIndex === 1 && (
                <Button bsStyle="primary" onClick={this.close}>
                  Close
                  <Icon type="fa" name="angle-right" />
                </Button>
              )}
          </Wizard.Footer>
        </Wizard>
      </div>
    );
  }
}

export const wizardExampleSource = `
<div>
  <Button bsStyle="primary" bsSize="large" onClick={this.open}>
    Launch wizard
  </Button>

  <Wizard show={showModal} onHide={this.close}>
    <Wizard.Header onClose={this.close} title="Wizard Title" />
    <Wizard.Body>
      <Wizard.Steps
        steps={renderWizardSteps(
          mockWizardItems,
          activeStepIndex,
          activeSubStepIndex,
          this.onStepClick
        )}
      />
      <Wizard.Row>
        <Wizard.Sidebar
          items={renderSidebarItems(
            mockWizardItems,
            activeStepIndex,
            activeSubStepIndex,
            this.onSidebarItemClick
          )}
        />
        <Wizard.Main>
          {renderWizardContents(
            mockWizardItems,
            activeStepIndex,
            activeSubStepIndex
          )}
        </Wizard.Main>
      </Wizard.Row>
    </Wizard.Body>
    <Wizard.Footer>
      <Button
        bsStyle="default"
        className="btn-cancel"
        onClick={this.close}
      >
        Cancel
      </Button>
      <Button
        bsStyle="default"
        disabled={activeStepIndex === 0 && activeSubStepIndex === 0}
        onClick={this.onBackButtonClick}
      >
        <Icon type="fa" name="angle-left" />Back
      </Button>
      {(activeStepIndex === 0 || activeStepIndex === 1) && (
        <Button bsStyle="primary" onClick={this.onNextButtonClick}>
          Next<Icon type="fa" name="angle-right" />
        </Button>
      )}
      {activeStepIndex === 2 &&
        activeSubStepIndex === 0 && (
          <Button bsStyle="primary" onClick={this.onNextButtonClick}>
            Deploy<Icon type="fa" name="angle-right" />
          </Button>
        )}
      {activeStepIndex === 2 &&
        activeSubStepIndex === 1 && (
          <Button bsStyle="primary" onClick={this.close}>
            Close<Icon type="fa" name="angle-right" />
          </Button>
        )}
    </Wizard.Footer>
  </Wizard>
</div>
`;
