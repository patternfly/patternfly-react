import * as React from 'react';
import { mount } from 'enzyme';

import { Alert, AlertVariant } from './Alert';
import { AlertActionLink }  from './AlertActionLink';
import { AlertActionCloseButton } from './AlertActionCloseButton';

Object.values(AlertVariant).forEach(variant => {
  describe(`Alert - ${variant}`, () => {
    test('Description', () => {
      const view = mount(
        <Alert variant={variant} title="">
          Some alert
        </Alert>
      );
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

    test('Action Link', () => {
      const view = mount(
        <Alert variant={variant} action={<AlertActionLink>test</AlertActionLink>} title="">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Action Close Button', () => {
      const onClose = jest.fn();
      const view = mount(
        <Alert variant={variant} action={<AlertActionCloseButton aria-label="Close" onClose={onClose} />} title="">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
      view.find('button[aria-label="Close"]').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });

    test('Action and Title', () => {
      const view = mount(
        <Alert variant={variant} action={<AlertActionLink>test</AlertActionLink>} title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Custom aria label', () => {
      const view = mount(
        <Alert
          variant={variant}
          aria-label={`Custom aria label for ${variant}`}
          action={<AlertActionLink>test</AlertActionLink>}
          title="Some title"
        >
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
