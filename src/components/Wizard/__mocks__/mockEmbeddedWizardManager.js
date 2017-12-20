import React from 'react';
import MockWizardBase from './mockWizardBase';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Wizard } from '../index';

import { mockWizardItems } from './mockWizardItems';

import {
  renderWizardSteps,
  renderSidebarItems,
  renderWizardContents
} from './mockWizardRenderers';

export class MockEmbeddedWizardManager extends MockWizardBase {
  render() {
    const { activeStepIndex, activeSubStepIndex } = this.state;

    return (
      <Wizard embedded>
        <Wizard.Header title="Wizard Title" />
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
          <Button bsStyle="default" className="btn-cancel">
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
              <Button bsStyle="primary">
                Done<Icon type="fa" name="angle-right" />
              </Button>
            )}
        </Wizard.Footer>
      </Wizard>
    );
  }
}

export const mockEmbeddedWizardSource = `
  <Wizard embedded>
    <Wizard.Header title="Wizard Title" />
    <Wizard.Body>
      <Wizard.Steps
        steps={renderWizardSteps(
          mockWizardItems,
          activeStepIndex,
          activeSubStepIndex,
          this.onStepClick,
        )}
      />
      <Wizard.Row>
        <Wizard.Sidebar
          items={renderSidebarItems(
            mockWizardItems,
            activeStepIndex,
            activeSubStepIndex,
            this.onSidebarItemClick,
          )}
        />
        <Wizard.Main>
          {renderWizardContents(
            mockWizardItems,
            activeStepIndex,
            activeSubStepIndex,
          )}
        </Wizard.Main>
      </Wizard.Row>
    </Wizard.Body>
    <Wizard.Footer>
      <Button bsStyle="default" className="btn-cancel">
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
          <Button bsStyle="primary">
            Done<Icon type="fa" name="angle-right" />
          </Button>
        )}
    </Wizard.Footer>
  </Wizard>
`;
