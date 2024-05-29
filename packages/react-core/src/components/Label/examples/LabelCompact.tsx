import React from 'react';
import { Label } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

export const LabelCompact: React.FunctionComponent = () => (
  <React.Fragment>
    <Label isCompact>Compact</Label>
    <Label isCompact icon={<CubeIcon />}>
      Compact icon
    </Label>
    <Label isCompact onClose={() => Function.prototype}>
      Compact removable
    </Label>
    <Label isCompact icon={<CubeIcon />} onClose={() => Function.prototype}>
      Compact icon removable
    </Label>
    <Label isCompact href="#compact">
      Compact link
    </Label>
    <Label isCompact href="#compact" onClose={() => Function.prototype}>
      Compact link removable
    </Label>{' '}
    <Label isCompact onClick={() => Function.prototype}>
      Compact clickable
    </Label>{' '}
    <Label isCompact onClick={() => Function.prototype} onClose={() => Function.prototype}>
      Compact clickable removable
    </Label>{' '}
    <Label isCompact icon={<CubeIcon />} onClose={() => Function.prototype} textMaxWidth="16ch">
      Compact label with icon that overflows
    </Label>{' '}
    <Label isDisabled isCompact href="#compact" onClose={() => Function.prototype} icon={<CubeIcon />}>
      Compact link removable (disabled)
    </Label>{' '}
    <Label
      isDisabled
      isCompact
      onClick={() => Function.prototype}
      onClose={() => Function.prototype}
      icon={<CubeIcon />}
    >
      Compact clickable removable (disabled)
    </Label>
    <Label variant="outline" color="blue" isCompact icon={<CubeIcon />}>
      Compact icon
    </Label>
    <Label variant="outline" color="blue" isCompact onClose={() => Function.prototype}>
      Compact removable
    </Label>
    <Label variant="outline" color="blue" isCompact icon={<CubeIcon />} onClose={() => Function.prototype}>
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
      icon={<CubeIcon />}
      onClose={() => Function.prototype}
      textMaxWidth="16ch"
    >
      Compact label with icon that overflows
    </Label>{' '}
    <Label isDisabled isCompact href="#compact" onClose={() => Function.prototype} icon={<InfoCircleIcon />}>
      Compact link removable (disabled)
    </Label>{' '}
    <Label
      isDisabled
      isCompact
      onClick={() => Function.prototype}
      onClose={() => Function.prototype}
      icon={<InfoCircleIcon />}
    >
      Compact clickable removable (disabled)
    </Label>
  </React.Fragment>
);
