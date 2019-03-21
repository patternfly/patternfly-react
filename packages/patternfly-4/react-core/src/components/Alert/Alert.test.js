import React from 'react';
import { mount, shallow } from 'enzyme';

import Alert, { AlertVariant } from './Alert';
import AlertActionLink from './AlertActionLink';
import AlertActionCLoseButton from './AlertActionCloseButton';

Object.keys(AlertVariant).forEach(variant => {
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
        <Alert variant={variant} action={<AlertActionCLoseButton aria-label="Close" onClose={onClose} />} title="">
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

    test('Toast alerts match snapsnot', () => {
      const view = mount(
        <Alert
          isToast={true}
          variant={variant}
          aria-label={`${variant} toast alert`}
          title="Some title"
        >
          Some toast alert
        </Alert>
      );
      expect(view).toMatchSnapshot();
    });

    test('Toast alerts contain default live region', () => {
      const wrapper = shallow(
        <Alert
          isToast={true}
          variant={variant}
          aria-label={`${variant} toast alert`}
          title="Some title"
        >
          Some toast alert
        </Alert>
      );
      const liveRegion = wrapper.find('[aria-live]').length
      expect(liveRegion).toBe(1);
    });

    test('Toast alert live regions are not atomic', () => {
      const wrapper = shallow(
        <Alert
          isToast={true}
          variant={variant}
          aria-label={`${variant} toast alert`}
          title="Some title"
        >
          Some toast alert
        </Alert>
      );
      const isAtomic = wrapper.find('.pf-c-alert__content').is('[aria-atomic="false"]');
      expect(isAtomic).toBe(true);
    });

    test('Toast alert should specify pf-m-live on container', () => {
      const wrapper = shallow(
        <Alert
          isToast={true}
          variant={variant}
          aria-label={`${variant} toast alert`}
          title="Some title"
        >
          Some toast alert
        </Alert>
      );
      const alert = wrapper.find('.pf-c-alert');
      expect(alert.hasClass('pf-m-live')).toBe(true);
    });

    test('Non-toast alerts can have custom live region settings', () => {
      const wrapper = shallow(
        <Alert
          aria-live="assertive"
          aria-relevant="all"
          aria-atomic="true"
          variant={variant}
          aria-label={`${variant} toast alert`}
          title="Some title"
        >
          Some noisy alert
        </Alert>
      );

      const assertiveLiveRegion = wrapper.find('[aria-live="assertive"]').length
      const politeLiveRegion = wrapper.find('[aria-live="polite"]').length
      const hasAriaRelevantAll = wrapper.find('.pf-c-alert').is('[aria-relevant="all"]');
      const isAriaAtomic = wrapper.find('.pf-c-alert').is('[aria-atomic="true"]');
      expect(assertiveLiveRegion).toBe(1);
      expect(politeLiveRegion).toBe(0);
      expect(hasAriaRelevantAll).toBe(true);
      expect(isAriaAtomic).toBe(true);
    });

  });
});
