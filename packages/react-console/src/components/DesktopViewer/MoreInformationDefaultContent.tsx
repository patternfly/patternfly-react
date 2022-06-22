import React from 'react';

import { MoreInformationInstallVariant } from './MoreInformationInstallVariant';
import { DescriptionList } from '@patternfly/react-core';

export interface MoreInformationDefaultContentProps {
  textMoreInfoContent?: string | React.ReactNode;
}
export const MoreInformationDefaultContent: React.FunctionComponent<MoreInformationDefaultContentProps> = ({
  textMoreInfoContent = (
    <>
      <p>
        Clicking &quot;Launch Remote Viewer&quot; will download a .vv file and launch <i>Remote Viewer</i>
      </p>
      <p>
        <i>Remote Viewer</i> is available for most operating systems. To install it, search for it in GNOME Software or
        run the following:
      </p>
    </>
  )
}: MoreInformationDefaultContentProps) => (
  <>
    {textMoreInfoContent}
    <DescriptionList isHorizontal>
      <MoreInformationInstallVariant os="RHEL, CentOS" content="sudo yum install virt-viewer" />
      <MoreInformationInstallVariant os="Fedora" content="sudo dnf install virt-viewer" />
      <MoreInformationInstallVariant os="SLE, openSUSE" content="sudo zypper install virt-viewer" />
      <MoreInformationInstallVariant os="Ubuntu, Debian" content="sudo apt-get install virt-viewer" />
      <MoreInformationInstallVariant os="Windows">
        <div>
          Download the MSI from{' '}
          <a href="https://virt-manager.org/download/" target="_blank" rel="noopener noreferrer">
            virt-manager.org
          </a>
        </div>
      </MoreInformationInstallVariant>
    </DescriptionList>
  </>
);
MoreInformationDefaultContent.displayName = 'MoreInformationDefaultContent';
