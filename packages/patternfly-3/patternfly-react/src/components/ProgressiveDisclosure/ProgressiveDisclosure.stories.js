import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { defaultTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { name } from '../../../package.json';
import ProgressiveDisclosure, { ProgressiveDisclosureItem } from './index';
import { Button, Modal, FormGroup, FormControl, ControlLabel, Col } from '../../index';
import { action } from '@storybook/addon-actions';

const ProgressiveDisclosureStories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.FORMS_AND_CONTROLS}/Progressive Disclosure`,
  module
);

ProgressiveDisclosureStories.addDecorator(withKnobs);
ProgressiveDisclosureStories.addDecorator(
  defaultTemplate({
    title: 'Progressive Disclosure',
    documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_FORMS}progressive-disclosure`
  })
);

ProgressiveDisclosureStories.add(
  'Single Level',
  withInfo({
    propTablesExclude: [Col, FormGroup, FormControl]
  })(() => (
    <Col sm={5}>
      <ProgressiveDisclosure name="RHN" onChange={action('RHN notification')}>
        <ProgressiveDisclosureItem text="RHN Satellite URL">
          <FormGroup>
            <FormControl type="text" />
          </FormGroup>
        </ProgressiveDisclosureItem>
      </ProgressiveDisclosure>
    </Col>
  ))
);

ProgressiveDisclosureStories.add(
  'Multi Level',
  withInfo({
    propTablesExclude: [Col, FormGroup, ControlLabel, FormControl]
  })(() => (
    <Col sm={4}>
      <ProgressiveDisclosure name="CDN" onChange={action('CDN enabled: ')}>
        <ProgressiveDisclosureItem text="Enable CDN Channel">
          <ProgressiveDisclosure name="Router" onChange={action('router: ')}>
            <ProgressiveDisclosureItem text="Router">
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Token</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </ProgressiveDisclosureItem>
          </ProgressiveDisclosure>
          <ProgressiveDisclosure name="Registry" onChange={action('registry: ')}>
            <ProgressiveDisclosureItem text="Registry">
              <FormGroup>
                <ControlLabel>Server</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Path</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </ProgressiveDisclosureItem>
          </ProgressiveDisclosure>
          <ProgressiveDisclosure name="Metrics" onChange={action('metrics: ')}>
            <ProgressiveDisclosureItem text="Metrics">
              <FormGroup>
                <ControlLabel>Server</ControlLabel>
                <FormControl type="text" />
              </FormGroup>
            </ProgressiveDisclosureItem>
          </ProgressiveDisclosure>
        </ProgressiveDisclosureItem>
        <ProgressiveDisclosureItem text="None" onChange={action('CDN disabled')} />
      </ProgressiveDisclosure>
    </Col>
  ))
);

ProgressiveDisclosureStories.add(
  'with Dropdown Menu',
  withInfo({
    propTablesExclude: [Col, FormGroup, ControlLabel, FormControl]
  })(() => (
    <Col sm={4}>
      <ProgressiveDisclosure name="Provider" onChange={action('provider: ')}>
        <ProgressiveDisclosureItem text="Enable CDN Use existing VMs from an existing provider">
          <FormGroup>
            <FormControl type="text" placeholder="Existing Provider 1" />
          </FormGroup>
        </ProgressiveDisclosureItem>
        <ProgressiveDisclosureItem text="Create new VMs on provider">
          <select>
            <option>Next Provider 1</option>
            <option>Next Provider 2</option>
          </select>
        </ProgressiveDisclosureItem>
      </ProgressiveDisclosure>
    </Col>
  ))
);

ProgressiveDisclosureStories.addWithInfo('within Modal', () => (
  <Modal show>
    <Modal.Header>
      <Modal.CloseButton />
      <Modal.Title>Specify CDN Channel</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ProgressiveDisclosure name="CDN" onChange={action('notification: ')}>
        <ProgressiveDisclosureItem text="Enable CDN Channel">
          <FormGroup>
            <ControlLabel>Username</ControlLabel>
            <FormControl type="text" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl type="password" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>SKU</ControlLabel>
            <FormControl type="text" />
          </FormGroup>
          <ProgressiveDisclosure name="RHN" onChange={action('RHN notification')}>
            <ProgressiveDisclosureItem text="RHN Satellite URL">
              <FormGroup>
                <FormControl type="text" />
              </FormGroup>
            </ProgressiveDisclosureItem>
          </ProgressiveDisclosure>
        </ProgressiveDisclosureItem>
      </ProgressiveDisclosure>
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="default" className="btn-cancel">
        Cancel
      </Button>
      <Button bsStyle="primary">Save</Button>
    </Modal.Footer>
  </Modal>
));
