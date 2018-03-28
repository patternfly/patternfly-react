import React from 'react';
import { mount } from 'enzyme';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../Button';
import { Wizard } from './index';

import {
  mockWizardItems,
  mockLoadingContents
} from './__mocks__/mockWizardItems';

import {
  renderWizardSteps,
  renderSidebarItems,
  renderWizardContents
} from './__mocks__/mockWizardRenderers';

test('Wizard loading renders properly', () => {
  const component = mount(
    <Row>
      <Col sm={12}>
        <Wizard>
          <Wizard.Header title="Wizard Title" />
          <Wizard.Body>
            <Wizard.Row>
              <Wizard.Main>{mockLoadingContents()}</Wizard.Main>
            </Wizard.Row>
          </Wizard.Body>
          <Wizard.Footer>
            <Button bsStyle="default" className="btn-cancel">
              Cancel
            </Button>
            <Button bsStyle="default" disabled>
              <span className="i fa fa-angle-left" />Back
            </Button>
            <Button bsStyle="primary" disabled>
              Next<span className="i fa fa-angle-right" />
            </Button>
          </Wizard.Footer>
        </Wizard>
      </Col>
    </Row>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Wizard embedded renders properly', () => {
  const onStepClick = jest.fn();
  const onSidebarItemClick = jest.fn();
  const activeStepIndex = 0;
  const activeSubStepIndex = 0;
  const onNextButtonClick = jest.fn();
  const onBackButtonClick = jest.fn();

  const component = mount(
    <Wizard embedded>
      <Wizard.Header title="Wizard Title" />
      <Wizard.Body>
        <Wizard.Steps
          steps={renderWizardSteps(mockWizardItems, 0, 0, onStepClick)}
        />
        <Wizard.Row>
          <Wizard.Sidebar
            items={renderSidebarItems(
              mockWizardItems,
              activeStepIndex,
              activeSubStepIndex,
              onSidebarItemClick
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
        <Button bsStyle="default" onClick={onBackButtonClick}>
          <span className="i fa fa-angle-left" />Back
        </Button>

        <Button bsStyle="primary" onClick={onNextButtonClick}>
          Next<span className="i fa fa-angle-right" />
        </Button>
      </Wizard.Footer>
    </Wizard>
  );

  expect(component.render()).toMatchSnapshot();
});
