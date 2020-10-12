import React from 'react';

import { DescriptionListTerm, DescriptionListGroup, DescriptionListDescription } from '@patternfly/react-core';

export interface MoreInformationInstallVariantProps {
  children?: React.ReactNode;
  os: string;
  content?: string | React.ReactNode;
}

export const MoreInformationInstallVariant: React.FunctionComponent<MoreInformationInstallVariantProps> = ({
  os = '',
  content = null as string | React.ReactNode,
  children = null
}: MoreInformationInstallVariantProps) => (
  <DescriptionListGroup>
    <DescriptionListTerm>{os}</DescriptionListTerm>
    <DescriptionListDescription>{content || children}</DescriptionListDescription>
  </DescriptionListGroup>
);
MoreInformationInstallVariant.displayName = 'MoreInformationInstallVariant';
