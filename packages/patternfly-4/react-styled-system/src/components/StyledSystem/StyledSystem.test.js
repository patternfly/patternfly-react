import React from 'react';
import { shallow } from 'enzyme';
import StyledBox from './StyledBox';
import StyledFlex from './StyledFlex';
import StyledText from './StyledText';

const props = {
  m: 'md',
  p: 'lg',
  fontSize: 'md',
  fontFamily: 'monospace',
  bg: 'dark_100',
  color: 'light_100'
};

test('StyledBox test', () => {
  const view = shallow(<StyledBox {...props}>Styled Box</StyledBox>);
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

test('StyledFlex test', () => {
  const view = shallow(<StyledFlex {...props}>Styled Flex</StyledFlex>);
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

test('StyledText test', () => {
  const view = shallow(<StyledText {...props}>Styled Text</StyledText>);
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});