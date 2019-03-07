import React from 'react';
import { mount } from 'enzyme';

import { Alert, AlertActionLink, AlertActionCloseButton, AlertVariant } from './index';

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
        <Alert variant={variant} title="" action={
          <AlertActionCloseButton aria-label="Close" variantLabel={variant} onClose={onClose} title="" />
        }>
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
