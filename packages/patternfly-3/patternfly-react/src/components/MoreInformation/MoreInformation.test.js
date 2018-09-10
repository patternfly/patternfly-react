import React from 'react';
import { mount, shallow } from 'enzyme';
import MoreInformation from './MoreInformation';

test('MoreInformation with content', () => {
  const view = mount(
    <MoreInformation>
      <div id="content">My text</div>
    </MoreInformation>
  );

  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);

  const button = view.find('.btn-link');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
});

test('localized MoreInformation', () => {
  const view = shallow(
    <MoreInformation textMoreInfo="Additional Information">
      <div id="content">My text</div>
    </MoreInformation>
  );

  expect(view).toMatchSnapshot();
});
