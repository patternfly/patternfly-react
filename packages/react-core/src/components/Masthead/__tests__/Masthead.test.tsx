import React from 'react';
import { render } from '@testing-library/react';
import { Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle } from '../index';

describe('Masthead', () => {
  test('verify basic', () => {
    const view = render(<Masthead>test</Masthead>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify full structure', () => {
    const view = render(
      <Masthead>
        <MastheadToggle>Toggle</MastheadToggle>
        <MastheadMain>
          <MastheadBrand>Logo</MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <span>Content</span>
        </MastheadContent>
      </Masthead>
    );

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<Masthead className="custom-css">test</Masthead>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify inline display breakpoints', () => {
    const view = render(
      <Masthead
        display={{ default: 'inline', sm: 'inline', md: 'inline', lg: 'inline', xl: 'inline', '2xl': 'inline' }}
      >
        test
      </Masthead>
    );

    expect(view.container).toMatchSnapshot();
  });

  test('verify stack display breakpoints', () => {
    const view = render(
      <Masthead display={{ default: 'stack', sm: 'stack', md: 'stack', lg: 'stack', xl: 'stack', '2xl': 'stack' }}>
        test
      </Masthead>
    );

    expect(view.container).toMatchSnapshot();
  });

  Object.values(['insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl'] as [
    'insetNone',
    'insetXs',
    'insetSm',
    'insetMd',
    'insetLg',
    'insetXl',
    'inset2xl',
    'inset3xl'
  ]).forEach(inset => {
    test(`verify ${inset} inset breakpoints`, () => {
      const view = render(
        <Masthead inset={{ default: inset, sm: inset, md: inset, lg: inset, xl: inset, '2xl': inset }}>test</Masthead>
      );
      expect(view.container).toMatchSnapshot();
    });
  });
});

describe('MastheadBrand', () => {
  test('verify basic', () => {
    const view = render(<MastheadBrand>test</MastheadBrand>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<MastheadBrand className="custom-css">test</MastheadBrand>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom component', () => {
    const view = render(<MastheadBrand component="div">test</MastheadBrand>);

    expect(view.container).toMatchSnapshot();
  });
});

describe('MastheadContent', () => {
  test('verify basic', () => {
    const view = render(<MastheadContent>test</MastheadContent>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<MastheadContent className="custom-css">test</MastheadContent>);

    expect(view.container).toMatchSnapshot();
  });
});

describe('MastheadMain', () => {
  test('verify basic', () => {
    const view = render(<MastheadMain>test</MastheadMain>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<MastheadMain className="custom-css">test</MastheadMain>);

    expect(view.container).toMatchSnapshot();
  });
});

describe('MastheadToggle', () => {
  test('verify basic', () => {
    const view = render(<MastheadToggle>test</MastheadToggle>);

    expect(view.container).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<MastheadToggle className="custom-css">test</MastheadToggle>);

    expect(view.container).toMatchSnapshot();
  });
});
