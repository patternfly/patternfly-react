import * as React from 'react';
import { mount } from 'enzyme';
import { HelperText } from '../HelperText';
import { HelperTextItem } from '../HelperTextItem';
import { CheckIcon } from '@patternfly/react-icons';

describe('HelperText', () => {
  test('simple helper text renders successfully', () => {
    const view = mount(
      <HelperText>
        <HelperTextItem>help test text</HelperTextItem>
      </HelperText>
    );
    expect(view).toMatchSnapshot();
  });

  Object.values(['default', 'indeterminate', 'warning', 'success', 'invalid']).forEach(variant => {
    test(`${variant} helper text variant applies successfully`, () => {
      const view = mount(
        <HelperTextItem variant={variant as 'default' | 'indeterminate' | 'warning' | 'success' | 'invalid'}>
          {variant} help test text
        </HelperTextItem>
      );
      expect(view).toMatchSnapshot();
    });
  });

  test('variant comonent helper text renders properly', () => {
    const view = mount(
      <HelperText component="ul">
        <HelperTextItem component="li">help test text 1</HelperTextItem>
        <HelperTextItem component="li">help test text 2</HelperTextItem>
      </HelperText>
    );
    expect(view).toMatchSnapshot();
  });

  test('icon helper text renders properly', () => {
    const view = mount(
      <HelperText>
        <HelperTextItem icon={<CheckIcon />}>help test text</HelperTextItem>
      </HelperText>
    );
    expect(view).toMatchSnapshot();
  });

  test('dynamic helper text renders successfully', () => {
    const view = mount(
      <HelperText>
        <HelperTextItem isDynamic>help test text</HelperTextItem>
      </HelperText>
    );
    expect(view).toMatchSnapshot();
  });

  test('helper text block renders successfully', () => {
    const view = mount(
      <HelperText>
        <HelperTextItem>help test text 1</HelperTextItem>
        <HelperTextItem>help test text 2</HelperTextItem>
        <HelperTextItem>help test text 3</HelperTextItem>
      </HelperText>
    );
    expect(view).toMatchSnapshot();
  });
});
