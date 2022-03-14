import React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../Panel';
import { PanelMain } from '../PanelMain';
import { PanelMainBody } from '../PanelMainBody';
import { PanelHeader } from '../PanelHeader';
import { PanelFooter } from '../PanelFooter';

describe('Panel', () => {
  test('renders content', () => {
    const view = render(<Panel>Foo</Panel>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('renders content with raised styling', () => {
    const view = render(<Panel variant="raised">Foo</Panel>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('renders content with bordered styling', () => {
    const view = render(<Panel variant="bordered">Foo</Panel>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('renders content with scrollable styling', () => {
    const view = render(<Panel isScrollable>Foo</Panel>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

describe('PanelMain', () => {
  test('renders content', () => {
    const view = render(<PanelMain>Foo</PanelMain>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('renders content with the set maximum height', () => {
    const view = render(<PanelMain maxHeight={'80px'}>Foo</PanelMain>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

describe('PanelMainBody', () => {
  test('renders content', () => {
    const view = render(<PanelMainBody>Foo</PanelMainBody>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

describe('PanelHeader', () => {
  test('renders content', () => {
    const view = render(<PanelHeader>Foo</PanelHeader>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

describe('PanelFooter', () => {
  test('renders content', () => {
    const view = render(<PanelFooter>Foo</PanelFooter>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
