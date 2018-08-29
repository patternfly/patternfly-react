import React from 'react';
import { mount } from 'enzyme';

import Alert, { AlertVariant } from './Alert';

Object.keys(AlertVariant).forEach(variant => {
  describe(`Alert - ${variant}`, () => {
    test('Body', () => {
      const view = mount(<Alert variant={variant}>Some alert</Alert>);
      expect(view).toMatchSnapshot();
    });

    test('Title', () => {
      const view = mount(
        <Alert variant={variant} title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Action', () => {
      const view = mount(
        <Alert variant={variant} action="action">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Action and Title', () => {
      const view = mount(
        <Alert variant={variant} action="action" title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Custom aria label', () => {
      const view = mount(
        <Alert variant={variant} aria-label={`Custom aria label for ${variant}`} action="action" title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
