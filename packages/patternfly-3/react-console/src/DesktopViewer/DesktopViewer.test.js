/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, mount } from 'enzyme';

import DesktopViewer from './DesktopViewer';
import MoreInformationDefaultContent from './MoreInformationDefaultContent';
import { generateVVFile } from './vvFileGenerator';
import { SPICE_CONSOLE_TYPE } from '../common/constants';

const spice = {
  address: 'my.host.com',
  port: 5900,
  tlsPort: '5901'
};
const vnc = {
  address: 'my.host.com',
  port: 5902,
  tlsPort: '5903'
};

test('DesktopViewer empty', () => {
  const wrapper = render(<DesktopViewer />);
  expect(wrapper).toMatchSnapshot();
});

test('DesktopViewer custom topClassName', () => {
  const wrapper = render(<DesktopViewer topClassName="my-custom-class" />);
  expect(wrapper).toMatchSnapshot();
});

test('DesktopViewer with Spice and VNC', () => {
  const wrapper = render(<DesktopViewer spice={spice} vnc={vnc} />);
  expect(wrapper).toMatchSnapshot();
});

test('DesktopViewer launch button', () => {
  const onDownload = jest.fn();
  const onGenerate = jest.fn().mockReturnValue({ content: 'Foo' });
  const wrapper = mount(<DesktopViewer spice={spice} vnc={vnc} onDownload={onDownload} onGenerate={onGenerate} />);
  const launchButton = wrapper.find('.remote-viewer-pf-launch button');
  expect(launchButton).toHaveLength(1);
  launchButton.simulate('click');
  expect(onGenerate).toHaveBeenCalledTimes(1);
  expect(onDownload).toHaveBeenCalledTimes(1);
});

test('DesktopViewer with custom more-info content', () => {
  const wrapper = mount(
    <DesktopViewer spice={spice} vnc={vnc}>
      <p id="custom-more-info">My more-info content</p>
    </DesktopViewer>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('#custom-more-info')).toHaveLength(0);
  const linkMoreInfo = wrapper.find('.expand-collapse-pf button');
  expect(linkMoreInfo).toHaveLength(1);
  linkMoreInfo.simulate('click');
  expect(wrapper.find('#custom-more-info')).toHaveLength(1);
});

test('default MoreInformationContent', () => {
  const wrapper = render(<MoreInformationDefaultContent />);
  expect(wrapper).toMatchSnapshot();
});

test('default implementation of generateVVFile()', () => {
  const output = generateVVFile({ console: spice, type: SPICE_CONSOLE_TYPE });
  expect(output.mimeType).toMatch('application/x-virt-viewer');
  expect(output.content).toMatch(
    '[virt-viewer]\ntype=spice\nhost=my.host.com\nport=5900\ndelete-this-file=1\nfullscreen=0\n'
  );
});
