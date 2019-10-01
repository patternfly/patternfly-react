import * as React from 'react';
import { mount } from 'enzyme';

import { Alert, AlertVariant } from './Alert';
import { AlertActionLink } from './AlertActionLink';
import { AlertActionCloseButton } from './AlertActionCloseButton';

test('default Alert variant is info', () => {
  const view = mount(<Alert title="this is a test">Alert testing</Alert>);
  expect(
    view
      .find('Alert')
      .childAt(0)
      .prop('className')
  ).toContain('pf-m-info');
});

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

    test('inline variation', () => {
      const view = mount(
        <Alert variant={variant} isInline title="Some title">
          Some alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });
  });
});
