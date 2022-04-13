import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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

describe('DesktopViewer', () => {
  test('empty', () => {
    const { asFragment } = render(<DesktopViewer />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with Spice and VNC', () => {
    const { asFragment } = render(<DesktopViewer spice={spice} vnc={vnc} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with Spice, VNC and RDP', () => {
    const { asFragment } = render(<DesktopViewer spice={spice} vnc={vnc} rdp={rdp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('with Spice, VNC and RDP (different hostname)', () => {
    const { asFragment } = render(<DesktopViewer spice={spice} vnc={vnc} rdp={rdp2} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('launch button', () => {
    const onDownload = jest.fn();
    const onGenerate = jest.fn().mockReturnValue({ content: 'Foo' });

    render(<DesktopViewer spice={spice} vnc={vnc} onDownload={onDownload} onGenerate={onGenerate} />);

    userEvent.click(screen.getByRole('button', { name: 'Launch Remote Viewer' }));
    expect(onGenerate).toHaveBeenCalledTimes(1);
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  test('RDP launch button', () => {
    const onDownload = jest.fn();
    const onGenerate = jest.fn().mockReturnValue({ content: 'Foo' });

    render(<DesktopViewer rdp={rdp} onDownload={onDownload} onGenerate={onGenerate} />);

    userEvent.click(screen.getByRole('button', { name: 'Launch Remote Desktop' }));
    expect(onGenerate).toHaveBeenCalledTimes(1);
    expect(onDownload).toHaveBeenCalledTimes(1);
  });

  test('with custom more-info content', () => {
    render(
      <DesktopViewer spice={spice} vnc={vnc}>
        <p id="custom-more-info">My more-info content</p>
      </DesktopViewer>
    );

    expect(screen.queryByText('My more-info content')).toBeNull();

    userEvent.click(screen.getByRole('button', { name: 'Remote Viewer Details' }));
    // If one of the items is shown in the description list, the rest will be in the document as well.
    expect(screen.getByText('RHEL, CentOS')).toBeInTheDocument();
  });

  test('default MoreInformationContent', () => {
    render(<MoreInformationDefaultContent />);
    expect(screen.getByText(/Launch Remote Viewer/).outerHTML).toMatchSnapshot();
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
});
