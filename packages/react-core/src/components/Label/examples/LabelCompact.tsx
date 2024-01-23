import React from 'react';
import { Label, Flex } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelCompact: React.FunctionComponent = () => (
  <React.Fragment>
    <Flex gap={{ default: 'gapSm' }}>
      <Label isCompact>Compact</Label>
      <Label isCompact icon={<InfoCircleIcon />}>
        Compact icon
      </Label>
      <Label isCompact onClose={() => Function.prototype}>
        Compact removable
      </Label>
      <Label isCompact icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Compact icon removable
      </Label>
      <Label isCompact href="#compact">
        Compact link
      </Label>
      <Label isCompact href="#compact" onClose={() => Function.prototype}>
        Compact link removable
      </Label>
      <Label isCompact icon={<InfoCircleIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
        Compact label with icon that overflows
      </Label>
    </Flex>
    <br />
    <Flex gap={{ default: 'gapSm' }}>
      <Label variant="outline" color="blue" isCompact>
        Compact
      </Label>
      <Label variant="outline" color="blue" isCompact icon={<InfoCircleIcon />}>
        Compact icon
      </Label>
      <Label variant="outline" color="blue" isCompact onClose={() => Function.prototype}>
        Compact removable
      </Label>
      <Label variant="outline" color="blue" isCompact icon={<InfoCircleIcon />} onClose={() => Function.prototype}>
        Compact icon removable
      </Label>
      <Label variant="outline" color="blue" isCompact href="#compact">
        Compact link
      </Label>
      <Label variant="outline" color="blue" isCompact href="#compact" onClose={() => Function.prototype}>
        Compact link removable
      </Label>
      <Label
        variant="outline"
        color="blue"
        isCompact
        icon={<InfoCircleIcon />}
        onClose={() => Function.prototype}
        textMaxWidth="16ch"
      >
        Compact label with icon that overflows
      </Label>
    </Flex>
  </React.Fragment>
);
