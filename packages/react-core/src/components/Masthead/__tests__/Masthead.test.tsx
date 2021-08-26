import React from 'react';
import { shallow, mount } from 'enzyme';
import { Masthead, MastheadBrand, MastheadContent, MastheadMain, MastheadToggle } from '../index';

describe('Masthead', () => {
  test('verify basic', () => {
    const view = shallow(<Masthead>test</Masthead>);

    expect(view).toMatchSnapshot();
  });

  test('verify full structure', () => {
    const view = mount(
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

    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<Masthead className="custom-css">test</Masthead>);

    expect(view).toMatchSnapshot();
  });

  test('verify inline display breakpoints', () => {
    const view = mount(
      <Masthead
        display={{ default: 'inline', sm: 'inline', md: 'inline', lg: 'inline', xl: 'inline', '2xl': 'inline' }}
      >
        test
      </Masthead>
    );

    expect(view).toMatchSnapshot();
  });

  test('verify stack display breakpoints', () => {
    const view = mount(
      <Masthead display={{ default: 'stack', sm: 'stack', md: 'stack', lg: 'stack', xl: 'stack', '2xl': 'stack' }}>
        test
      </Masthead>
    );

    expect(view).toMatchSnapshot();
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
      const view = mount(
        <Masthead inset={{ default: inset, sm: inset, md: inset, lg: inset, xl: inset, '2xl': inset }}>test</Masthead>
      );
      expect(view).toMatchSnapshot();
    });
  });
});

describe('MastheadBrand', () => {
  test('verify basic', () => {
    const view = shallow(<MastheadBrand>test</MastheadBrand>);

    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<MastheadBrand className="custom-css">test</MastheadBrand>);

    expect(view).toMatchSnapshot();
  });

  test('verify custom component', () => {
    const view = mount(<MastheadBrand component="div">test</MastheadBrand>);

    expect(view).toMatchSnapshot();
  });
});

describe('MastheadContent', () => {
  test('verify basic', () => {
    const view = shallow(<MastheadContent>test</MastheadContent>);

    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<MastheadContent className="custom-css">test</MastheadContent>);

    expect(view).toMatchSnapshot();
  });
});

describe('MastheadMain', () => {
  test('verify basic', () => {
    const view = shallow(<MastheadMain>test</MastheadMain>);

    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<MastheadMain className="custom-css">test</MastheadMain>);

    expect(view).toMatchSnapshot();
  });
});

describe('MastheadToggle', () => {
  test('verify basic', () => {
    const view = shallow(<MastheadToggle>test</MastheadToggle>);

    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<MastheadToggle className="custom-css">test</MastheadToggle>);

    expect(view).toMatchSnapshot();
  });
});
