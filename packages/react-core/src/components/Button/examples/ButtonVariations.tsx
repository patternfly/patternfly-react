import React from 'react';
import { Button } from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';

export const ButtonVariations: React.FunctionComponent = () => (
  <React.Fragment>
    <Button variant="primary" ouiaId="Primary">
      Primary
    </Button>{' '}
    <Button variant="primary" icon={<ExternalLinkSquareAltIcon />} ouiaId="PrimaryWithIcon">
      Primary with icon
    </Button>{' '}
    <Button variant="secondary" ouiaId="Secondary">
      Secondary
    </Button>{' '}
    <Button variant="secondary" ouiaId="DangerSecondary" isDanger>
      Danger Secondary
    </Button>{' '}
    <Button variant="tertiary" ouiaId="Tertiary">
      Tertiary
    </Button>{' '}
    <Button variant="danger" ouiaId="Danger">
      Danger
    </Button>{' '}
    <Button variant="warning" ouiaId="Warning">
      Warning
    </Button>
    <br />
    <br />
    <Button variant="link" icon={<PlusCircleIcon />}>
      Link
    </Button>{' '}
    <Button variant="link" icon={<ExternalLinkSquareAltIcon />} iconPosition="end">
      Link
    </Button>{' '}
    <Button variant="link" isInline>
      Inline link
    </Button>{' '}
    <Button variant="link" isDanger>
      Danger link
    </Button>
    <br />
    <br />
    <Button variant="plain" aria-label="Action">
      <TimesIcon />
    </Button>
    <br />
    <br />
    <Button variant="control">Control</Button>{' '}
    <Button variant="control" aria-label="Copy">
      <CopyIcon />
    </Button>
  </React.Fragment>
);
