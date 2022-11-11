import React from 'react';
import { render } from '@testing-library/react';
import { Tab } from '../Tab';
import { TabAction } from '../TabAction';
import { TabTitleText } from '../TabTitleText';

test('should not render anything', () => {
  const { asFragment } = render(
    <Tab eventKey={0} title={<TabTitleText>"Tab item 1"</TabTitleText>}>
      Tab 1 section
    </Tab>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders tab action', () => {
  const { asFragment } = render(
    <Tab eventKey={1} title={<TabTitleText>"Tab item 2"</TabTitleText>} actions={<TabAction>test</TabAction>}>
      Tab 2 section
    </Tab>
  );
  expect(asFragment()).toMatchSnapshot();
});
