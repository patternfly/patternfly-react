import * as React from 'react';
import { Flex } from '../Flex';
import { FlexItem } from '../FlexItem';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

test('Simple flex with single item', () => {
  const view = render(
    <Flex>
      <FlexItem>Test</FlexItem>
    </Flex>
  );
  expect(view.container).toMatchSnapshot();
});

test('Nested flex', () => {
  const view = render(
    <Flex>
      <Flex>
        <FlexItem>Test</FlexItem>
      </Flex>
    </Flex>
  );
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = render(<Flex className="extra-class" />);
  expect(view.container).toMatchSnapshot();
});

const flexModifiers = {
  spacer: ['spacerNone', 'spacerXs', 'spacerSm', 'spacerMd', 'spacerLg', 'spacerXl', 'spacer2xl', 'spacer3xl', 'spacer4xl'],
  spaceItems: ['spaceItemsNone', 'spaceItemsXs', 'spaceItemsSm', 'spaceItemsMd', 'spaceItemsLg', 'spaceItemsXl', 'spaceItems2xl', 'spaceItems3xl', 'spaceItems4xl'],
  grow: ['grow'],
  shrink: ['shrink'],
  flex: ['flexDefault', 'flexNone', 'flex_1', 'flex_2', 'flex_3', 'flex_4'],
  direction: ['column', 'columnReverse', 'row', 'rowReverse'],
  alignItems: ['alignItemsFlexStart', 'alignItemsFlexEnd', 'alignItemsCenter', 'alignItemsStretch', 'alignItemsBaseline'],
  alignContent: ['alignContentFlexStart', 'alignContentFlexEnd', 'alignContentCenter', 'alignContentStretch', 'alignContentSpaceBetween', 'alignContentSpaceAround'],
  alignSelf: ['alignSelfFlexStart', 'alignSelfFlexEnd', 'alignSelfCenter', 'alignSelfStretch', 'alignSelfBaseline'],
  align: ['alignLeft', 'alignRight'],
  justifyContent: ['justifyContentFlexStart', 'justifyContentFlexEnd', 'justifyContentCenter', 'justifyContentSpaceBetween', 'justifyContentSpaceAround', 'justifyContentSpaceEvenly'],
  display: ['inlineFlex'],
  fullWidth: ['fullWidth'],
  flexWrap: ['wrap', 'wrapReverse', 'nowrap']
};

describe('flex modifiers', () => {
  Object.entries(flexModifiers)
    .map(([mod, values]) => values.map(value => ({
      [mod]: {
        default: value,
        sm: value,
        lg: value,
        xl: value,
        '2xl': value
      }
    })))
    .reduce((acc, val) => acc.concat(val), [])
    .forEach(props =>
      test(`${JSON.stringify(props)} add valid classes to Flex`, () => {
        const view = mount(<Flex {...props}>{JSON.stringify(props)}</Flex>);
        const className = view.find('div').prop('className').replace('pf-l-flex', '').trim();
        expect(className).not.toBe("''");
        expect(className).not.toBe("");
      })
    );
});

const flexItemModifiers = {
  spacer: flexModifiers.spacer,
  grow: flexModifiers.grow,
  shrink: flexModifiers.shrink,
  flex: flexModifiers.flex,
  alignSelf: flexModifiers.alignSelf,
  align: flexModifiers.align,
  fullWidth: flexModifiers.fullWidth
};

describe('flexItem modifiers', () => {
  Object.entries(flexItemModifiers)
    .map(([mod, values]) => values.map(value => ({
      [mod]: {
        default: value,
        sm: value,
        lg: value,
        xl: value,
        '2xl': value
      }
    })))
    .reduce((acc, val) => acc.concat(val), [])
    .forEach(props =>
      test(`${JSON.stringify(props)} add valid classes to FlexItem`, () => {
        const view = mount(<FlexItem {...props}>{JSON.stringify(props)}</FlexItem>);
        const className = view.find('div').prop('className').trim();
        expect(className).not.toBe("''");
        expect(className).not.toBe("");
      })
    );
});

test('alternative component', () => {
  const view = render(
    <Flex component='ul'>
      <FlexItem component='li'>Test</FlexItem>
    </Flex>
  );
  expect(view.container).toMatchSnapshot();
});
