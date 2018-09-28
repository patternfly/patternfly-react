import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { ModelessOverlay } from './index';

test('ModelessOverlay renders properly', () => {
  const component = mount(
    <ModelessOverlay id="test-modeless-overlay-id" className="test-modeless-overlay-class">
      <Modal.Header>
        <Modal.CloseButton />
        <Modal.Title>Modal Overlay Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>test body text</Modal.Body>
      <Modal.Footer>
        <Button bsStyle="default" className="btn-cancel">
          Cancel
        </Button>
        <Button bsStyle="primary">Save</Button>
      </Modal.Footer>
    </ModelessOverlay>
  );
  expect(component.render()).toMatchSnapshot();
});

test('ModelessOverlay renders properly when setting size', () => {
  const component = mount(
    <ModelessOverlay id="test-modeless-overlay-id" className="test-modeless-overlay-class" bsSize="sm">
      <Modal.Header>
        <Modal.CloseButton />
        <Modal.Title>Modal Overlay Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>test body text</Modal.Body>
      <Modal.Footer>
        <Button bsStyle="default" className="btn-cancel">
          Cancel
        </Button>
        <Button bsStyle="primary">Save</Button>
      </Modal.Footer>
    </ModelessOverlay>
  );
  expect(component.render()).toMatchSnapshot();
});
