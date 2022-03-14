import * as React from 'react';
import { FormSection } from '../FormSection';
import { render } from '@testing-library/react';

test('Check form section example against snapshot', () => {
  const Section = <FormSection />;
  const view = render(Section);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('Check form section example with title', () => {
  const Section = <FormSection title="Title" titleElement="h4" />;
  const view = render(Section);
  expect(view.container.outerHTML).toMatchSnapshot();
});
