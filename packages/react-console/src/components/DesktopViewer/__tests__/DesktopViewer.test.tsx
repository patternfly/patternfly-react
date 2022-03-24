import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import { DesktopViewer } from '../DesktopViewer';
import { MoreInformationDefaultContent } from '../MoreInformationDefaultContent';
import { generateDescriptorFile } from '../consoleDescriptorGenerator';
import { constants } from '../../common/constants';

const { SPICE_CONSOLE_TYPE, RDP_CONSOLE_TYPE, DEFAULT_RDP_PORT } = constants;

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

const rdp = {
  address: 'my.host.com',
  port: DEFAULT_RDP_PORT
};

const rdp2 = {
  address: 'my.differenthost.com',
  port: 1234
};

test('DesktopViewer empty', () => {
  const wrapper = render(<DesktopViewer />);
  expect(wrapper.container).toMatchSnapshot();
});

test('DesktopViewer with Spice and VNC', () => {
  const wrapper = render(<DesktopViewer spice={spice} vnc={vnc} />);
  expect(wrapper.container).toMatchSnapshot();
});

test('DesktopViewer with Spice, VNC and RDP', () => {
  const wrapper = render(<DesktopViewer spice={spice} vnc={vnc} rdp={rdp} />);
  expect(wrapper.container).toMatchSnapshot();
});

test('DesktopViewer with Spice, VNC and RDP (different hostname)', () => {
  const wrapper = render(<DesktopViewer spice={spice} vnc={vnc} rdp={rdp2} />);
  expect(wrapper.container).toMatchSnapshot();
});

test('DesktopViewer launch button', () => {
  const onDownload = jest.fn();
  const onGenerate = jest.fn().mockReturnValue({ content: 'Foo' });
  const wrapper = mount(<DesktopViewer spice={spice} vnc={vnc} onDownload={onDownload} onGenerate={onGenerate} />);
  const launchButton = wrapper.find('button.pf-c-console__remote-viewer-launch-vv');
  expect(launchButton).toHaveLength(1);
  launchButton.simulate('click');
  expect(onGenerate).toHaveBeenCalledTimes(1);
  expect(onDownload).toHaveBeenCalledTimes(1);
});

test('DesktopViewer RDP launch button', () => {
  const onDownload = jest.fn();
  const onGenerate = jest.fn().mockReturnValue({ content: 'Foo' });
  const wrapper = mount(<DesktopViewer rdp={rdp} onDownload={onDownload} onGenerate={onGenerate} />);
  const launchButton = wrapper.find('button.pf-c-console__remote-viewer-launch-rdp');
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
  const linkMoreInfo = wrapper.find('.pf-c-expandable-section__toggle');
  expect(linkMoreInfo).toHaveLength(1);
  linkMoreInfo.simulate('click');
  expect(wrapper.find('.pf-c-expandable-section__content')).toHaveLength(1);
});

test('default MoreInformationContent', () => {
  const wrapper = render(<MoreInformationDefaultContent />);
  expect(wrapper.container).toMatchSnapshot();
});

test('default implementation of generateVVFile()', () => {
  const output = generateDescriptorFile(spice, SPICE_CONSOLE_TYPE);
  expect(output.mimeType).toMatch('application/x-virt-viewer');
  expect(output.content).toMatch(
    '[virt-viewer]\ntype=spice\nhost=my.host.com\nport=5900\ndelete-this-file=1\nfullscreen=0\n'
  );
});

test('default implementation of generateRDPFile()', () => {
  const output = generateDescriptorFile(rdp, RDP_CONSOLE_TYPE);
  expect(output.mimeType).toMatch('application/rdp');
  expect(output.content).toEqual(expect.stringContaining('full address:s:my.host.com:3389\n')); // the rest is a constant so far
});
