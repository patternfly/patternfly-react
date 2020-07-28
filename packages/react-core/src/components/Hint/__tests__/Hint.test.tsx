import * as React from 'react';
import { shallow } from 'enzyme';
import { Hint } from '../Hint';
import { HintBody } from '../HintBody';
import { HintTitle } from '../HintTitle';
import { HintFooter } from '../HintFooter';

test('simple hint', () => {
  const view = shallow(
    <Hint>
      <HintTitle>Title</HintTitle>
      <HintBody>Body</HintBody>
      <HintFooter>Footer</HintFooter>
    </Hint>
  );
  expect(view).toMatchSnapshot();
});
