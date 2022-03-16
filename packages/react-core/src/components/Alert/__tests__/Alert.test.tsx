import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Alert, AlertVariant } from '../Alert';
import { AlertActionLink } from '../AlertActionLink';
import { AlertActionCloseButton } from '../AlertActionCloseButton';
import { UsersIcon } from '@patternfly/react-icons';

describe('Alert', () => {
  test('default Alert variant is default', () => {
    render(<Alert title="this is a test">Alert testing</Alert>);
    expect(screen.getByText('this is a test').className).toContain('pf-c-alert');
  });

  Object.values(AlertVariant).forEach(variant => {
    describe(`Alert - ${variant}`, () => {
      test('Description', () => {
        const view = render(
          <Alert variant={variant} title="">
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Title', () => {
        const view = render(
          <Alert variant={variant} title="Some title">
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Heading level', () => {
        const view = render(
          <Alert variant={variant} title="Some title" titleHeadingLevel="h1">
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Action Link', () => {
        const view = render(
          <Alert variant={variant} actionLinks={[<AlertActionLink key={'action-1'}>test</AlertActionLink>]} title="">
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Action Close Button', () => {
        const onClose = jest.fn();

        render(
          <Alert
            variant={variant}
            actionClose={<AlertActionCloseButton aria-label="Close" onClose={onClose} />}
            title={`Sample ${variant} alert`}
          >
            Some alert
          </Alert>
        );

        userEvent.click(screen.getByLabelText('Close'));
        expect(onClose).toHaveBeenCalled();
      });

      test('Action and Title', () => {
        const view = render(
          <Alert
            variant={variant}
            actionLinks={[<AlertActionLink key={'action-1'}>test</AlertActionLink>]}
            title="Some title"
          >
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Custom aria label', () => {
        const view = render(
          <Alert
            variant={variant}
            aria-label={`Custom aria label for ${variant}`}
            actionLinks={[<AlertActionLink key={'action-1'}>test</AlertActionLink>]}
            title="Some title"
          >
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('inline variation', () => {
        const view = render(
          <Alert variant={variant} isInline title="Some title">
            Some alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('expandable variation', () => {
        const view = render(
          <Alert variant={variant} title="Some title" isExpandable>
            <p>Success alert description. This should tell the user more information about the alert.</p>
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('expandable variation description hidden', () => {
        const description = 'Success alert description.';

        render(
          <Alert variant={variant} title="Some title" isExpandable>
            <p>{description}</p>
          </Alert>
        );

        expect(screen.queryByText(description)).toBeNull();
      });

      test('Toast alerts match snapsnot', () => {
        const view = render(
          <Alert isLiveRegion={true} variant={variant} aria-label={`${variant} toast alert`} title="Some title">
            Some toast alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });

      test('Toast alerts contain default live region', () => {
        const ariaLabel = `${variant} toast alert`;

        render(
          <Alert isLiveRegion={true} variant={variant} aria-label={ariaLabel} title="Some title">
            Some toast alert
          </Alert>
        );

        expect(screen.getByLabelText(ariaLabel).getAttribute('aria-live')).toEqual('polite');
      });

      test('Toast alert live regions are not atomic', () => {
        const ariaLabel = `${variant} toast alert`;

        render(
          <Alert isLiveRegion={true} variant={variant} aria-label={ariaLabel} title="Some title">
            Some toast alert
          </Alert>
        );

        expect(screen.getByLabelText(ariaLabel).getAttribute('aria-atomic')).toEqual('false');
      });

      test('Non-toast alerts can have custom live region settings', () => {
        const ariaLabel = `${variant} toast alert`;

        render(
          <Alert
            aria-live="assertive"
            aria-relevant="all"
            aria-atomic="true"
            variant={variant}
            aria-label={ariaLabel}
            title="Some title"
          >
            Some noisy alert
          </Alert>
        );
        const alert = screen.getByLabelText(ariaLabel);

        expect(alert.getAttribute('aria-live')).toEqual('assertive');
        expect(alert.getAttribute('aria-relevant')).toEqual('all');
        expect(alert.getAttribute('aria-atomic')).toEqual('true');
      });

      test('Custom icon', () => {
        const view = render(
          <Alert
            customIcon={<UsersIcon />}
            variant={variant}
            aria-label={`${variant} custom icon alert`}
            title="custom icon alert title"
          >
            Some noisy alert
          </Alert>
        );
        expect(view.container).toMatchSnapshot();
      });
    });
  });

  test('Alert truncate title', () => {
    render(
      <Alert truncateTitle={1} title="this is a test">
        Alert testing
      </Alert>
    );

    expect(screen.getByText('this is a test').className).toContain('pf-m-truncate');
  });
});
